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
            <h2 class="section-subtitle">USEV on switch </h2>

        <!-- local -->
        <el-container class="video-container">
          <div class="audio-title">USEV </div>
          <video controls muted preload playsinline>
            <source src="/output_video/usev-switch/usev-est.mp4" type="video/mp4">
          </video>
        </el-container>
        <!-- local -->
        <el-container class="video-container">
          <div class="audio-title">USEV-M-Roberta </div>
          <video controls muted preload playsinline>
            <source src="/output_video/usev-switch/usev-m-est.mp4" type="video/mp4">
          </video>
        </el-container>
          <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">Mixture </div>
          <audio controls muted preload playsinline>
            <source src="/output_video/usev-switch/mix.wav">
          </audio>
        </el-container>
            <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">GT </div>
          <audio controls muted preload playsinline>
            <source src="/output_video/usev-switch/tgt.wav">
          </audio>
        </el-container>

    <h2 class="section-subtitle">AV-Mamba on switch </h2>
         <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">AV-Mamba</div>
          <video controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/avmamba-est.mp4" type="video/mp4">
          </video>
        </el-container>
        <!-- local -->
        <el-container class="video-container">
          <div class="audio-title">AV-Mamba-I-Roberta </div>
          <video controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/avmamba-i-est.mp4" type="video/mp4">
          </video>
        </el-container>
          <!-- local -->
        <el-container class="video-container">
           <div class="audio-title">Mixture </div>
          <audio controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/mix.wav">
          </audio>
        </el-container>
            <!-- local -->
        <el-container class="video-container">
            <div class="audio-title">GT </div>
          <audio controls muted preload playsinline>
            <source src="/output_video/avmamba-switch/tgt.wav">
          </audio>
        </el-container>
         
         
        
         
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.video-container {
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center;    /* 横向居中可选 */
  margin: 20px 0;
}

/* 保持视频/音频的样式不变 */
iframe, video, audio {
  aspect-ratio: 16/9;
  width: 70%;
}

/* 确保标题在上方且样式良好 */
.audio-title {
  margin-bottom: 10px; /* 标题与视频/音频之间的距离 */
  font-weight: bold;   /* 可选：加粗 */
  font-size: 16px;     /* 可选：字体大小 */
  text-align: center;  /* 居中标题文本 */
}

</style>
