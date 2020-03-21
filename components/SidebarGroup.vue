<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
  >
    <RouterLink
      v-if="item.path"
      class="sidebar-heading clickable"
      :class="{
        open,
        'active': isActive($route, item.path)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span
        v-if="collapsable"
        class="arrow"
        :class="open ? 'down' : 'right'"
      />
    </RouterLink>

    <p
      v-else
      class="sidebar-heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span
        v-if="collapsable"
        class="arrow"
        :class="open ? 'down' : 'right'"
      />
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-if="open || !collapsable"
        class="sidebar-group-items"
        :items="item.children"
        :sidebar-depth="item.sidebarDepth"
        :depth="depth + 1"
      />
    </DropdownTransition>
  </section>
</template>

<script>
import { isActive } from '../util'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  name: 'SidebarGroup',

  components: {
    DropdownTransition
  },

  props: [
    'item',
    'open',
    'collapsable',
    'depth'
  ],

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate () {
    this.$options.components.SidebarLinks = require('@theme/components/SidebarLinks.vue').default
  },

  methods: { isActive }
}
</script>

<style lang="stylus">
.sidebar-group
  .sidebar-group
    padding-right 0.5em
  &:not(.collapsable)
    .sidebar-heading:not(.clickable)
      cursor auto
      color inherit
  // refine styles of nested sidebar groups
  &.is-sub-group
    padding-right 0
    & > .sidebar-heading
      font-size 0.95em
      line-height 1.4
      font-weight normal
      padding-right 2rem
      &:not(.clickable)
        opacity 0.5
    & > .sidebar-group-items
      padding-right 1rem
      & > li > .sidebar-link
        font-size: 0.95em;
        border-right none
  &.depth-2
    & > .sidebar-heading
      border-right none

.sidebar-heading
  color $textColor
  transition color .15s ease
  cursor pointer
  font-size 1.1em
  font-weight bold
  // text-transform uppercase
  padding 0.35rem 1.25rem 0.35rem 1.5rem
  width 100%
  box-sizing border-box
  margin 0
  border-right 0.25rem solid transparent
  &.open, &:hover
    color inherit
  .arrow
    position relative
    top -0.12em
    right 0.5em
  &.clickable
    &.active
      font-weight 600
      color $accentColor
      border-right-color $accentColor
    &:hover
      color $accentColor

.sidebar-group-items
  transition height .1s ease-out
  font-size 0.95em
  overflow hidden
</style>
