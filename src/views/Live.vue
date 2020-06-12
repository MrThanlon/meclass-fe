<template>
  <div class="live">
    <header class="d-flex justify-content-between">
      <span class="m-3" style="font-size: 1.5rem">
        课程名称
      </span>
      <div class="d-flex justify-content-between align-items-center m-3"
           style="font-size: 1.5rem">
        <i class="fas fa-redo mr-2 ml-2"></i>
        <i class="fas fa-share mr-2 ml-2"></i>
        <i class="fas fa-smile mr-2 ml-2"></i>
      </div>
    </header>
    <main class="d-flex flex-nowrap">
      <aside class="col-9 p-0">
        <div class="d-flex flex-wrap">
          <div class="col-4 p-0 d-flex justify-content-center align-items-center"
               style="font-size: 12rem;
             color: #dcca4c;background: #9d9d9b;
             min-height: 300px;border: #faff98 1px solid"
               v-for="(item, idx) in [1,2,3,4,5,6]" :key="idx">
            <i class="fas fa-user"></i>
          </div>
        </div>
        <div class="d-flex w-100 justify-content-between align-items-center"
             style="font-size: 1.5rem;background: black">
          <div class="d-flex m-3">
            <i class="fas fa-signal mr-1" style="color: #47ff00"></i>
            <i class="fas fa-question-circle ml-1 mr-1"></i>
            <i class="fas fa-map-marker-alt ml-1 mr-1"></i>
            <i class="fas fa-toggle-on ml-1"></i>
          </div>
          <div class="d-flex m-3">
            <i class="fas fa-microphone mr-1"></i>
            <i class="fas fa-video mr-1 ml-1"></i>
            <i class="fas fa-laptop-code ml-1 mr-1"></i>
            <i class="fas fa-volume-off ml-1 mr-1"></i>
            <i class="fas fa-cog ml-1 mr-1"></i>
            <i class="fas fa-expand ml-1"></i>
          </div>
        </div>
      </aside>
      <aside class="col-3 p-0 d-flex flex-wrap align-content-start"
             style="background: #505050">
        <ul class="list-group list-group-horizontal w-100"
            style="height: 8%">
          <li class="list-group-item rounded-0
           col-4 d-flex justify-content-center align-items-center"
              style="background: #505050;border: #30302d 1px solid"
              v-for="(item, idx) in ['讨论','成员','房间']" :key="idx">
            {{item}}
          </li>
        </ul>

        <div class="w-100" style="min-height: 60%;border: #30302d 1px solid">
        </div>

        <div class="w-100"
             style="border: #30302d 1px solid;border-bottom: 0;height: 32%">
          <div class="d-flex justify-content-between">
            <div>
              <i class="fas fa-smile m-2"></i>
              <i class="fas fa-image m-2"></i>
              <i class="fas fa-heart m-2"></i>
            </div>
            <div>
              <i class="fas fa-address-book m-2"></i>
            </div>
          </div>
          <textarea class="p-1"
            style="background: #505050;border: 0;
            resize: none;width: 100%;height: 65%;color: white">
          </textarea>
          <div class="w-100 d-flex justify-content-end align-items-center"
               style="">
            <button class="badge badge-pill border-0 mt-1 mr-2"
                  style="background: #f1da32;color: black;font-size: 1.3rem">
              发送
            </button>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Live'
}
</script>

<style scoped>
.live {
  background: black;
  height: 100vh;
  color: #f1da32;
}
</style>
