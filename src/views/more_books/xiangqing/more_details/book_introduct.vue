<template>
    <div class="book-introduct-content">
        <div class="more-introduct">
            <div class="header-introduct">
                <h4>特别说明</h4>
            </div>
            <div class="text-introduct">
                <ul>
                    <li>
                        {{Info.special}}
                    </li>
                </ul>
            </div>
        </div>


        <div class="more-introduct">
            <div class="header-introduct">
                <h4>目录</h4>
            </div>
            <!-- 表格 -->
            <div>
                 <v-simple-table>
                    <template v-slot:default>
                        <!-- <v-divider></v-divider> -->
                    <tbody>
                        <tr
                        v-for="item in Info.directory"
                        :key="item"
                        >
                        <td>{{ item }}</td>
                        <!-- <td>{{ item.calories }}</td> -->
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </div>

        </div>

        <div class="more-introduct">
            <div class="header-introduct">
                <h4>作译者介绍</h4>
            </div>
            <div class="details">
                    <div class="anthor-details">
                        <span class="anthor-title">
                            {{Info.author}}
                        </span>
                        <span class="anthor-detail">
                            {{Info.authorinfo}}
                        </span>
                    </div>
                    </div>
        </div>

        <div class="more-introduct">
            <div class="header-introduct">
                <h4>出版信息</h4>
            </div>
            <div style="padding-left:15px">
               <div class="more-item">
                  <span class="more-lable">
                    书  名
                  </span>
                  <span class="more-lable-style">{{Info.bookname}}</span>
               </div>
               <div class="more-item">
                  <span class="more-lable">
                    系列书名
                  </span>
                  <span class="more-lable-style">{{Info.seriesName}}</span>
               </div>
               <div class="more-item">
                  <span class="more-lable">
                    出版社
                  </span>
                  <span class="more-lable-style">{{Info.publication}}</span>
               </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
	props:["Info"],
    data () {
      return {
        desserts: [
          {
            name: '版权声明',
            
          },
          {
            name: '引言',
            
          },
          {
            name: '致谢',
         
          },
          {
            name: '第一部分  Linux命令行',
            
          },
          {
            name: 'Linux命令行',
            
          },
          {
            name: 'Linux命令行',

          },
          {
            name: 'Linux命令行',

          },
          {
            name: 'Linux命令行',

          },
          {
            name: 'Linux命令行',
            calories: 452,
          },
          {
            name: 'Linux命令行t',
            
          },
        ],
      }
    },
  }
</script>

<style scoped>
.book-introduct-content{
    padding-right: 15px;
    padding-left: 15px;
}
.more-introduct{
    margin-top: 20px;
}

.header-introduct{
        justify-content: space-between;
    margin-bottom: 15px;
        display: flex;
    -webkit-box-pack: justify;
}
h4{
    font-size: 1rem;
    color: var(--charcoal-grey);
    border-left: 4px solid blue;
    padding-left: 10px;
    line-height: 16px;
}
.text-introduct{
    color: grey;
    letter-spacing: normal;
    font-style: normal;
    font-weight: 400;
    font-size: .875rem;
    padding-left: 15px;
    white-space: pre-line;
    line-height: 20px;
}
.more-item{
      align-items: center;
    line-height: normal;
    margin-bottom: 10px;
        display: flex;
    -webkit-box-align: center;
        font-size: .875rem;
    color: var(--bluey-grey);
}
.more-lable{
      /* min-width: 56px;
          flex-shrink: 0;

    align-self: baseline;
    line-height: 20px; */
     width: 100%;
                 width: 56px;
                height: 30px;
                display: inline-block;
                line-height: 30px;
                vertical-align: middle;
                text-align: justify;
                text-align-last: justify;

}
label::after {
                content: '';

                width: 100%;
              }
 .more-lable-style{
  padding-left: 20px;
 }

 .details{
    margin-top: 10px;
    font-size: 16px;

}

.anthor-details{
    display: flex;
    font-size: .875rem;
    line-height: 30px;
    margin-top: 30px;
}

.anthor-title{
    font-weight: 500;
    margin-right: 10px;
    flex-shrink: 0;
}
</style>