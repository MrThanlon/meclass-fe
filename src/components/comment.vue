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
              <span>{{item.edited?'编辑于':'发布于'}}</span>
              <span>{{formatDate(item.timestamp)}}</span>
            </span>
          </div>
          <p class="w-100 text-dark m-0">{{item.comment}}</p>
          <div class="d-flex justify-content-start p-0">
            <span class="pointer text-link ml-1 mr-1" @click="item.like.push(1)">
              <i class="fas fa-thumbs-up m-1"></i>
              <span>{{item.like.length}}</span>
            </span>
            <span class="pointer text-link ml-1 mr-1"
                  @click="replyId=item.commentId;$refs.commentInput.focus()">
              <i class="fas fa-comment m-1"></i>
              <span>回复</span>
            </span>
            <span class="pointer text-link ml-1 mr-1"
                  @click="editId=item.commentId;inputText=item.comment;$refs.commentInput.focus()"
                  v-if="item.username===username">
              <i class="fas fa-edit m-1"></i>
              <span>编辑</span>
            </span>
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
                <span v-if="item.commentId!==sub.reply">
                  <i class="fas fa-angle-right m-1"></i>
                  <i class="fas fa-user m-1"></i>
                  <span>
                    {{subComments[item.commentId].find(v=>v.commentId===sub.reply).username}}
                  </span>
                </span>
              </h5>
              <span class="text-secondary">
                <span>{{sub.edited?'编辑于':'发布于'}}</span>
                <span>{{formatDate(sub.timestamp)}}</span>
              </span>
            </div>
            <p class="w-100 text-dark m-0">{{sub.comment}}</p>
            <div class="d-flex justify-content-start p-0">
              <span class="pointer text-link ml-1 mr-1" @click="sub.like.push(1)">
                <i class="fas fa-thumbs-up m-1"></i>
                <span>{{sub.like.length}}</span>
              </span>
              <span class="pointer text-link ml-1 mr-1"
                    @click="replyId=sub.commentId;$refs.commentInput.focus()">
                <i class="fas fa-comment m-1"></i>
                <span>回复</span>
              </span>
              <span class="pointer text-link ml-1 mr-1"
                    @click="editId=sub.commentId;inputText=sub.comment;$refs.commentInput.focus()"
                    v-if="sub.username===username">
                <i class="fas fa-edit m-1"></i>
                <span>编辑</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit="reply">
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
      comments: [
        {
          commentId: 1267,
          username: 'Dart',
          comment: 'Good video.',
          timestamp: 1593865719,
          edited: false,
          like: [
            'Mono'
          ]
        },
        {
          commentId: 1269,
          username: 'Royce',
          comment: 'This is a reply comment. edited.',
          timestamp: 1593865937,
          edited: true,
          reply: 1267,
          like: []
        },
        {
          commentId: 1273,
          username: 'Mono',
          comment: 'This is a main comment.',
          timestamp: 1593875937,
          edited: false,
          like: []
        },
        {
          commentId: 1274,
          username: 'Rolls',
          comment: 'This is a reply to Royce.',
          timestamp: 1594038769,
          edited: false,
          like: [],
          reply: 1269
        }
      ]
    }
  },
  computed: {
    subComments () {
      // 并查集
      const dset = this.comments.filter(v => 'reply' in v).reduce((pre, cur) => {
        pre[cur.commentId] = cur.reply
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
      return this.comments.filter(v => 'reply' in v).reduce((pre, cur) => {
        const acc = findSet(cur.reply)
        if (!(acc in pre)) {
          pre[acc] = []
        }
        pre[acc].push(cur)
        return pre
      }, {})
    },
    mainComments () {
      return this.comments.filter(v => !('reply' in v))
    },
    ...mapState('user', ['username', 'flag'])
  },
  methods: {
    formatDate (timestamp) {
      const date = new Date(timestamp * 1000)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    },
    async reply () {
      console.debug(this.replyText, this.replyId)
      return false
    }
  },
  async mounted () {
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
