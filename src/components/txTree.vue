<template>
  <div class="tree">
    <li class="tree-node">
      <a class="tree-node-content" :class="{'tree-node-active':activeNode==model.name}" @click="toggle(model.name)">
        <i class="icon" v-if="hasChildren" :class="[open ? 'fa fa-minus-square': 'fa fa-plus-square']"></i>
        <span>{{model.name}}</span>
      </a>
      <ul v-show="open" v-if="hasChildren">
        <tx-tree v-for="item in model.children" :model="item" @getSelectedNodeName="getSelectedNodeName"
                 :activeNode="activeNode"></tx-tree>
      </ul>
    </li>
  </div>
</template>
<style scoped>
  .tree {
    font-size: 14px;
    color: black;
    background-color: white;
  }
  
  .tree-node {
    padding-left: 20px;
    list-style: none;
  }
  
  .tree-node-content {
    display: block;
    padding: 10px;
    cursor: pointer;
    border-right: 2px solid #1B809E;
    border-bottom: 1px solid #EEEEEE;
  }
  
  .tree-node-content:hover {
    background-color: #6FA3D5;
    transform: translate(0, 0);
    transition: all .2s ease-in 0s;
    color: white;
  }
  
  .tree-node-active {
    background-color: #6FA3D5;
    color: white;
  }
  
  .icon {
    color: #777777;
  }
</style>
<script>
  export default{
    name: 'txTree',
    props: ['model', 'activeNode'],
    data(){
      return {
        open: false,
        selectedNodeName: '',
      }
    },
    computed: {
      hasChildren: function () {
        return this.model.children && this.model.children.length
      },
    },
    methods: {
      toggle: function (name) {
        if (this.hasChildren) {
          this.open = !this.open;
        }
        this.selectedNodeName = name;
        this.$emit('getSelectedNodeName', this.selectedNodeName);
      },
      getSelectedNodeName: function (nodeName) {
        this.$emit('getSelectedNodeName', nodeName);
      },
    }
  }
</script>
