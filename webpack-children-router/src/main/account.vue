<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/account/login">login</router-link>
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
/* 普通的style标签，只支持普通的样式。若想要启用scss或less，需要为style元素，设置lang属性 */
//样式的scoped是通过CSS的属性选择器实现的 
    body{
       div{
           font-style: italic;
       }
    }
</style>