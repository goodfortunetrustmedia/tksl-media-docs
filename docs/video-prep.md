---
title: Preparing Video
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Processing Video

### Unzip

1. Unzip the “TKSL Video Processor.zip” into a folder on your hard drive. Suggest “C:\TKSL Video Processor”. After doing that the contents should look like this:

<img src={useBaseUrl('img/video-prep/directory.png')} />

### Save raw files

2. Save raw video files from Tashi into the folder called “1_to_be_converted”
   - Name the first one “1.mts”
   - Name the second one “2.mts”
   - Name the third one “3.mts”
   - And so on (note: if there are more than 5 then contact Pat, if there are less than 3 there is no problem)

<img src={useBaseUrl('img/video-prep/raw_video.png')} />

### Compressing video

3. Double click “step1_process_video.bat”
   - This will convert the videos into 1920x1080 resolution and compress them using H.264 codec
   - Don’t click on any of the black windows that appear
   - If you notice the numbers aren’t changing since you accidentally clicked it, just click on the black part somewhere again and press enter
   - At worst – close all black command windows, and press the “step1_process_video.bat” again to restart the conversion
     Black windows should look something like what is shown below

<img src={useBaseUrl('img/video-prep/process_video.png')} />

### Concatenating video

4. Once conversion is completed, click “step2_concat_videos.bat”
   - This will join the video files together into a single video and output it as “final_output_video.mp4”
   - It will also create a “final_output_video.mp3” audio file

<img src={useBaseUrl('img/video-prep/concat_video.png')} />
<img src={useBaseUrl('img/video-prep/video_output.png')} />

### Renaming files

5. Rename “final_output_video.mp4” to the correct teaching name. Example below:
   - 20200330 – KRGTT – Lam Rim Chen Mo.mp4
     - First part is the date as “yyyymmdd”
     - Second part is the teacher
     - Third part is the subject
   - 20200330 – KRGTT – Lam Rim Chen Mo – Lecture X.mp3
     - Same as I, ii, and iii above except:
     - On the end put “Lecture X” where X is the number of preceding lectures+1
       For the next set of teachings, just replace the videos 1.MTS, 2.MTS in the “1_to_be_converted” folder and repeat the previous steps. The scripts will automatically overwrite the previous ones (save the final output before you do it).

<img src={useBaseUrl('img/video-prep/rename.png')} />
