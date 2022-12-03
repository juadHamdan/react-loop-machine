### Demo: https://juadhamdan.github.io/react-loop-machine/

# Loop Machine - Assignment description
```
The player can play, pause, stop and loop through a list of 8 tracks channels (containing audio loops).
As a bonus, the cursor can be dragged and dropped, moving the playback to the updated position.
 - The application is responsive (compatible with all screens sizes) and runs on Chrome, Firefox, Opera and Edge.
 ```
 
 ### The Application
 ```
This is a React application, using the * HTMLAudioElement interface we map through the tracks (dynamically), playing each track while the cursor indicates all playback's positions.
 * The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them (Accessed with the Audio() constructor).
 ```
 
#### Input
```
We'll provide the tracks it an array, each track contains title, audio source (from ./src/assets) and color.
```

### Main Components:
```
ControllerButtons
This component returns the Play, Stop and Loop buttons, while updating the related states.

Channel
Input: single track and other application states.
The channel responsible for running the track audio.
output: ChannelTrack component: channel containing track title and colored by the color attribute.

Cursor
input: track sample and other applications states and methods.
The cursor responsible for tracking the audio sample and moving the cursor along the track, showing the current playing position in real time.
output: an audio cursor on top of all channels 
 * added functionality: the cursor can be moved along the track and update the audio playback.
 ```
 




