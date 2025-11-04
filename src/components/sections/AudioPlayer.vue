<script setup>
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">audio</h1>
    </el-row>

    <!-- 每个网站的视频的iframe可能不一致，最好在这里手动调整 -->
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10" >

        <!-- local -->
        <el-container class="audio-container">
           <div class="video-header">
            <h3>mix</h3>  <!-- 添加标题 -->
          </div>
          <audio controls muted preload playsinline>
            <source src="/output_audio/guidance/mix.wav'">
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
  width: 100%;
}

</style>
