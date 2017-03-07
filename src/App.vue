<template>
  <div>
    <img src="./assets/logo.png">
    <div style="width: 300px">
      <ul v-for="top in TreeData">
        <tx-tree :model="top" @getSelectedNodeName="getSelectedNodeName" :activeNode="activeNode"></tx-tree>
      </ul>
    </div>
  </div>
</template>

<script>
  import txTree from '@/components/txTree.vue'
  export default{
    data(){
      return {
        TreeData: [
          {
            'id': '1',
            'name': '爷',
            'menuCode': '10',
            'children': [
              {
                'name': '父1',
                'menuCode': '11'
              },
              {
                'name': '父2',
                'menuCode': '12',
                'children': [
                  {
                    'name': '父2-1',
                    'menuCode': '121'
                  },
                  {
                    'name': '父2-2',
                    'menuCode': '122'
                  },
                  {
                    'name': '父2-3',
                    'menuCode': '123'
                  },
                  {
                    'name': '父2-4',
                    'menuCode': '124'
                  },
                  {
                    'name': '父2-5',
                    'menuCode': '124'
                  }
                ]
              },
              {
                'name': '父3',
                'menuCode': '13',
                'children': [
                  {
                    'name': '父3-1',
                    'menuCode': '121'
                  },
                  {
                    'name': '父3-2',
                    'menuCode': '122'
                  },
                  {
                    'name': '父3-3',
                    'menuCode': '123'
                  },
                  {
                    'name': '父3-4',
                    'menuCode': '124'
                  },
                  {
                    'name': '父3-5',
                    'menuCode': '124'
                  }]
              }
            ]
          }
        ],
        activeNode: ''
      }
    },
    methods: {
      getSelectedNodeName: function (nodeName) {
        console.log("选中的为:", nodeName);
        this.activeNode = nodeName;
      }
    },
    components: {txTree}
  }
</script>

<style>
  
</style>
