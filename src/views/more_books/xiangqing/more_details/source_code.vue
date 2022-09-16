

<template>
  <div class="code-content">
    <div style="width:100%">
        <a @click="downloadFile()" class="code-download" style="color:blue">{{bookname}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  props:['id','bookname'],
  data(){
    return{
      filename:''
    }
  },

  methods:{
    getcode(){
      axios.post('http://43.142.239.198/get_book', qs.stringify({
              id:this.id,
          })).then(function(res) {
            console.log(typeof(id))
          console.log(res)
          })
    },
    // downloadFile(){
    //     return new Promise((resolve, reject) => {
    //       axios({
    //         method: 'post',
    //         url: "http://43.142.239.198/get_book", // 请求地址
    //         data:  qs.stringify({
    //         id:this.id
    //         }), // 参数
        
    //         responseType: 'blob' // 表明返回服务器返回的数据类型
    //       }).then(
    //         response => {
              
    //           if(response.data.size==31){
    //             alert('您还未登录，请登录后重试')
    //             this.$router.push('/login/iphone')
    //           }
    //           console.log(URL.createObjectURL(response.data))
    //           console.log(response)
    //           let temp = response.headers["content-disposition"].split('/')[1]
    //           console.log(temp)

    //          const link=document.createElement('a')
    //          link.download=temp
    //          link.href=URL.createObjectURL(response.data)
    //          link.target='_blank'
    //          link.style.display='none'
    //          document.body.appendChild(link)
    //          link.click()

    //          URL.revokeObjectURL(link.href)
    //          document.body.removeChild(link)
             
    //         },
    //         err => {
    //           reject(err)
    //         }
    //       )
    //     })
    //   },
    downloadFile(){
        return new Promise((resolve, reject) => {
          axios({
            method: 'post',
            url: "http://43.142.239.198/get_book", // 请求地址
            data:  qs.stringify({
            id:this.id
            }), // 参数
        
            // responseType: 'blob' // 表明返回服务器返回的数据类型
          }).then(
            response => {
              console.log(response)
              if(response.data.code==1){
                alert('您还未登录，请登录后重试')
                this.$router.push('/login/iphone')
              }
              else{
                window.open('http://43.142.239.198'+response.data.url,'_search')
              }
             
              
            },
            err => {
              reject(err)
            }
          )
        })
      },
      // downloadfile2 (e) {
      //   var arr=e.filename.split('.')// /medai/companyfile/新员工手册.docx
      //   var file_type=arr[arr.length-1]//获取文件的格式
      //   this.$axios({
      //     method: 'post', // 如果是get方法，则写“GET”
      //     url: "http://127.0.0.1:8000/get_book",
      //     responseType: 'blob',
      //     data: qs.stringify({
      //     id:1
      //   }), 
      //   })
      //     .then(res => {
 
      //       let blob = new Blob([res.data], {
      //         type: 'application/msword' //这里需要根据不同的文件格式写不同的参数
      //       })
 
      //       let eLink = document.createElement('a')
      //       eLink.download = `a.docx` //给文件名和指定格式,浏览器下载时看到的
      //       eLink.style.display = 'none'
      //       eLink.href = URL.createObjectURL(blob)
      //       document.body.appendChild(eLink)
      //       eLink.click()
      //       URL.revokeObjectURL(eLink.href)
      //       document.body.removeChild(eLink)
      //     })
      //     .catch(err => {
      //     })


     

      //   }
}
}
</script>

<style lang="scss" scoped>
.code-content{
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
}
.code-download{
    font-size: .75rem;
}
</style>>

