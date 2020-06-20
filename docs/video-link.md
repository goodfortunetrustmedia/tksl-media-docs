---
title: Linking Video
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## How links behave

Links will behave as follows:

1. If the link is not in the list of links, the app will say the link is not found
1. If the link is in the list of links and,
   - Is within the viewing period defined by the start time and the number of hours after which it will expire, the link will redirect the user to the youtube video.
   - Is before the start time, the link will say the video is not ready to be viewed. Once the countdown passes the start time, the link will automatically direct the user to the video.
   - Is after the expiry time, the link will say the video has expired.

## Managing links

### Logging in

1. Navigate to https://tkslmedia.netlify.app/videoLinks
1. Login using provided user and password - provided separately (not in this document)

### Creating links

1. Click create new link on the page https://tkslmedia.netlify.app/videoLinks
1. Type in the details and select the start date
   - Title = just a short reference to what it is, no one sees this except you
   - Youtube URL = the video the link will redirect to the select start time
     - This can be left blank if the video is not yet available
     - This allows you to generate a link, before the YouTube video link is available
   - Video Start Time = the time the video starts
     - Make sure you select the correct start time as this can’t be edited later (expiry hours is locked at 48 hours)
1. Click “Create Video Link” when done
1. Your link will appear in the table on the left hand column for use in emails and elsewhere

<img src={useBaseUrl('img/video-link/create.png')} />

### Editing links

1. Look for the link you want to edit, click Edit
2. Update the Title and/or Youtube URL
   - Note: the start time cannot be changed, if you want to change this, delete this link and create a new one
3. Click “Edit Video Link” when done

<img src={useBaseUrl('img/video-link/link_table.png')} />

### Deleting links

1. Find the link in the table of links
2. Click delete
   - If you delete a link accidentally, go to create new link to replace it
