<template>
    <div>
        <button @click="startRecording">Start recording</button>
        <button @click="stopRecording">Stop recording</button>
        <button @click="playAudio">Play audio</button>
        <button @click="pauseAudio">Pause audio</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        // Set up a boolean to track whether or not the recorder is currently recording
        isRecording: false,
  
        // Set up an audio buffer to store the recorded audio
        recordedAudioBuffer: null,
  
        // Set up an HTML audio element to play back the recorded audio
        audioElement: new Audio(),
      };
    },
    mounted() {
      // First, create an audio context and an audio worklet node
      const audioContext = new AudioContext();
      const audioWorkletNode = new AudioWorkletNode(audioContext, 'recorder-processor');
  
      // When the audio worklet node receives audio data, store it in the recorded audio buffer if the recorder is currently recording
      audioWorkletNode.onprocessorerror = (event) => {
        console.error(event.error);
      };
  
      audioWorkletNode.port.onmessage = (event) => {
        if (event.data.type === 'recording' && this.isRecording) {
          this.recordedAudioBuffer = event.data.audioBuffer;
        }
      };
  
      // Function to start the recording
      this.startRecording = () => {
        // Set the isRecording flag to true
        this.isRecording = true;
  
        // Set up the media stream for audio input
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          // Create a media stream source to feed the audio context
          const mediaStreamSource = audioContext.createMediaStreamSource
                    // Connect the media stream source to the audio worklet node
                    mediaStreamSource.connect(audioWorkletNode);

            // Connect the audio worklet node to the audio context destination
        audioWorkletNode.connect(audioContext.destination);
  });
};

// Function to stop the recording
this.stopRecording = () => {
// Set the isRecording flag to false
this.isRecording = false;

// Disconnect the audio worklet node from the audio context destination
audioWorkletNode.disconnect(audioContext.destination);
};

// Function to play back the recorded audio
this.playAudio = () => {
// Set the audio element's src attribute to a URL created from the audio buffer
this.audioElement.src = URL.createObjectURL(new Blob([this.recordedAudioBuffer], { type: 'audio/wav' }));
};

// Function to pause the recorded audio
this.pauseAudio = () => {
// Pause the audio element
this.audioElement.pause();
};
},
}