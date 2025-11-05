<script setup>
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">Target Speaker Switches</h1>
    </el-row>

    <!-- 每个网站的视频的iframe可能不一致，最好在这里手动调整 -->
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10" >

        <!-- local -->
        <el-container class="video-container">
          <div class="audio-title">USEV (Switch sample1)</div>
          <video controls muted preload playsinline>
            <source src="/output_video/usev-switch/usev-est.mp4" type="video/mp4">
          </video>
        </el-container>
        <!-- local -->
        <el-container class="video-container">
          <div class="audio-title">USEV-M-Roberta (Switch sample1)</div>
          <video controls muted preload playsinline>
            <source src="/output_video/usev-switch/usev-m-est.mp4" type="video/mp4">
          </video>
        </el-container>
          <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">Mixture (Switch sample1)</div>
          <audio controls muted preload playsinline>
            <source src="/output_video/usev-switch/mix.wav">
          </audio>
        </el-container>
            <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">GT (Switch sample1)</div>
          <audio controls muted preload playsinline>
            <source src="/output_video/usev-switch/tgt.wav">
          </audio>
        </el-container>


         <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">AV-Mamba (Switch sample2)</div>
          <video controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/avmamba-est.mp4" type="video/mp4">
          </video>
        </el-container>
        <!-- local -->
        <el-container class="video-container">
          <div class="audio-title">AV-Mamba-I-Roberta (Switch sample2)</div>
          <video controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/avmamba-i-est.mp4" type="video/mp4">
          </video>
        </el-container>
          <!-- local -->
        <el-container class="video-container">
           <div class="audio-title">Mixture (Switch sample2)</div>
          <audio controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/mix.wav">
          </audio>
        </el-container>
            <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">GT (Switch sample2)</div>
          <audio controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/tgt.wav">
          </audio>
        </el-container>
         
         
        
         
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.video-container{
  margin: 20px 0px 0px 0px;
}

iframe, video {
  aspect-ratio: 16 / 9;
  width: 70%;
}

</style>
