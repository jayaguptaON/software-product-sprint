// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    Collection<String> meetingattendees = request.getAttendees();
    long meetingduration = request.getDuration();
    ArrayList<TimeRange> busytimes = new ArrayList<TimeRange>();
    ArrayList<TimeRange> freetimes = new ArrayList<TimeRange>();

    if (meetingduration > TimeRange.WHOLE_DAY.duration()) {
        return freetimes;
    }

    for (Event e : events){
        Collection<String> busypeople = e.getAttendees();
        for (String busyperson : busypeople) {
            for (String meetingperson : meetingattendees) {
                if (busyperson == meetingperson) {
                    busytimes.add(e.getWhen());
                }
            }
        }    
    }

    boolean emptycheck = busytimes.isEmpty();
    if (emptycheck == true) {
        freetimes.add(TimeRange.WHOLE_DAY);
        return freetimes;
    }

    Collections.sort(busytimes, TimeRange.ORDER_BY_START);
    
    for (int i = 0; i < busytimes.size(); i++) {
        int start1 = (busytimes.get(i)).end();
        int end1 = (busytimes.get(i+1)).start();
        TimeRange newtimeslot = TimeRange.fromStartEnd(start1, end1, false);    
        int newtimeslotDuration = newtimeslot.duration();
        if (newtimeslotDuration > meetingduration) {
            freetimes.add(newtimeslot);
        }
    }
    return freetimes;
  }
}