<template>
  <div class="w-100">
    <h4 class="w-100 border-bottom">评论（{{comments.length}}）</h4>
    <div class="list-group list-group-flush">
      <div class="list-group-item p-0"
          v-for="item in mainComments" :key="item.commentId">
        <div class="">
          <div class="d-flex justify-content-between">
            <h5>
              <i class="fas fa-user m-1"></i>
              {{item.username}}
            </h5>
            <span class="text-secondary">
              <span>{{item.createTime}}</span>
              <!--
              <span>{{item.edited?'编辑于':'发布于'}}</span>
              <span>{{formatDate(item.timestamp)}}</span>
              -->
            </span>
          </div>
          <p class="w-100 text-dark m-0">{{item.commentMsg}}</p>
          <div class="d-flex justify-content-start p-0">
            <!--
            <span class="pointer text-link ml-1 mr-1" @click="item.like.push(1)">
              <i class="fas fa-thumbs-up m-1"></i>
              <span>{{item.like.length}}</span>
            </span>
            -->
            <span class="pointer text-link ml-1 mr-1"
                  @click="replyId=item.commentId;$refs.commentInput.focus()">
              <i class="fas fa-comment m-1"></i>
              <span>回复</span>
            </span>
            <!--
            <span class="pointer text-link ml-1 mr-1"
                  @click="editId=item.commentId;inputText=item.comment;$refs.commentInput.focus()"
                  v-if="item.username===username">
              <i class="fas fa-edit m-1"></i>
              <span>编辑</span>
            </span>
            -->
          </div>
        </div>
        <div class="pl-4 border-top list-group list-group-flush"
             v-if="item.commentId in subComments">
          <div class="list-group-item p-0"
               v-for="sub in subComments[item.commentId]"
               :key="sub.commentId">
            <div class="d-flex justify-content-between">
              <h5>
                <i class="fas fa-user m-1"></i>
                <span>{{sub.username}}</span>
                <span v-if="item.commentId!==sub.replyId">
                  <i class="fas fa-angle-right m-1"></i>
                  <i class="fas fa-user m-1"></i>
                  <span>
                    {{subComments[item.commentId].find(v=>v.commentId===sub.replyId).username}}
                  </span>
                </span>
              </h5>
              <span class="text-secondary">
                <span>{{item.createTime}}</span>
                <!--
                <span>{{sub.edited?'编辑于':'发布于'}}</span>
                <span>{{formatDate(sub.timestamp)}}</span>
                -->
              </span>
            </div>
            <p class="w-100 text-dark m-0">{{sub.commentMsg}}</p>
            <div class="d-flex justify-content-start p-0">
              <!--
              <span class="pointer text-link ml-1 mr-1" @click="sub.like.push(1)">
                <i class="fas fa-thumbs-up m-1"></i>
                <span>{{sub.like.length}}</span>
              </span>
              -->
              <span class="pointer text-link ml-1 mr-1"
                    @click="replyId=sub.commentId;$refs.commentInput.focus()">
                <i class="fas fa-comment m-1"></i>
                <span>回复</span>
              </span>
              <!--
              <span class="pointer text-link ml-1 mr-1"
                    @click="editId=sub.commentId;inputText=sub.comment;$refs.commentInput.focus()"
                    v-if="sub.username===username">
                <i class="fas fa-edit m-1"></i>
                <span>编辑</span>
              </span>
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit="reply" onsubmit="false">
    <div class="input-group w-100 mt-2 mb-2">
      <input class="form-control"
             ref="commentInput"
             v-model="inputText"
             :placeholder="`回复 ${replyId?comments.find(v=>v.commentId===replyId).username:''}`">
      <div class="input-group-append">
        <button class="btn btn-outline-dark" type="submit">
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import api from '../utils/api'
import { mapState } from 'vuex'

export default {
  name: 'comment',
  props: {
    videoId: Number
  },
  data () {
    return {
      replyId: null,
      inputText: '',
      editId: null,
      comments: []
    }
  },
  computed: {
    subComments () {
      // 并查集
      const dset = this.comments.filter(v => v.replyId).reduce((pre, cur) => {
        pre[cur.commentId] = cur.replyId
        return pre
      }, {})
      console.debug(dset)
      function findSet (x) {
        if (x in dset) {
          dset[x] = findSet(dset[x])
          return dset[x]
        } else {
          return x
        }
      }
      return this.comments.filter(v => v.replyId).reduce((pre, cur) => {
        const acc = findSet(cur.replyId)
        if (!(acc in pre)) {
          pre[acc] = []
        }
        pre[acc].push(cur)
        return pre
      }, {})
    },
    mainComments () {
      return this.comments.filter(v => v.replyId === null)
    },
    ...mapState('user', ['username', 'flag'])
  },
  methods: {
    formatDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    },
    async reply () {
      try {
        await api.comment.add({
          videoId: this.videoId,
          commentMsg: this.inputText,
          replyId: this.replyId
        })
        this.$emit('alert', {
          type: 'success',
          text: '评论成功。'
        })
        this.comments = (await api.comment.get({ videoId: this.videoId })).data
        this.inputText = ''
      } catch (e) {
        this.$emit('alert', '评论失败，您可能需要重新登录。')
        console.debug(e)
      }
      return false
    }
  },
  async mounted () {
    try {
      this.comments = (await api.comment.get({ videoId: this.videoId })).data
    } catch (e) {
      console.debug(e)
    }
  }
}
</script>

<style scoped>
  .text-link {
    color: #6c757d;
    transition: color .2s ease;
  }
  .text-link:hover {
    color: black;
  }
</style>
