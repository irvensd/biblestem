<template>
  <section aria-label="Interactive BibleStem ecosystem map" class="relative hidden lg:block">
    <div class="relative h-[520px] rounded-[2rem] bg-gradient-to-br from-neutral-100 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden shadow-xl">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-24 left-1/4 w-72 h-72 bg-primary-400/20 dark:bg-primary-500/10 blur-3xl" />
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-400/20 dark:bg-secondary-500/10 blur-3xl" />
      </div>

      <svg class="absolute inset-0 w-full h-full text-primary-300/30 dark:text-primary-300/20 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <line
          v-for="branch in branches"
          :key="`connector-${branch.id}`"
          x1="500"
          y1="500"
          :x2="branch.connector.x"
          :y2="branch.connector.y"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          class="transition-opacity duration-500"
          :class="{ 'opacity-100': branch.id === selectedBranch.id, 'opacity-60': branch.id !== selectedBranch.id }"
        />
      </svg>

      <div
        class="map-center-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] p-6 rounded-3xl bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 shadow-2xl backdrop-blur-sm"
      >
        <div class="flex items-center gap-4 mb-5">
          <div :class="['w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg bg-gradient-to-br', selectedBranch.accent]">
            <component :is="selectedBranch.icon" class="w-7 h-7" />
          </div>
          <div class="text-left">
            <p class="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
              {{ selectedBranch.category }}
            </p>
            <h3 class="text-2xl font-bold text-neutral-900 dark:text-white">{{ selectedBranch.name }}</h3>
          </div>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <span
            class="text-xs font-semibold px-2.5 py-1 rounded-full"
            :class="selectedBranch.status === 'Live'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'"
          >
            {{ selectedBranch.status === 'Live' ? 'Available Now' : 'In Development' }}
          </span>
          <span class="text-xs text-neutral-500 dark:text-neutral-400">
            {{ selectedBranch.timeline }}
          </span>
        </div>
        <p class="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          {{ selectedBranch.description }}
        </p>
        <div class="rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200/70 dark:border-neutral-700/60 px-5 py-4 text-sm text-neutral-600 dark:text-neutral-300">
          <p class="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Why it matters</p>
          <p>{{ selectedBranch.focus }}</p>
        </div>
      </div>

      <button
        v-for="branch in branches"
        :key="branch.id"
        type="button"
        class="map-node group absolute w-52 focus:outline-none"
        :class="branch.positionClass"
        :aria-pressed="branch.id === selectedBranch.id"
        @click="selectBranch(branch)"
        @mouseenter="selectBranch(branch)"
        @focus="selectBranch(branch)"
      >
        <div
          class="flex items-center gap-3 px-5 py-4 rounded-3xl border backdrop-blur-sm transition-all duration-300"
          :class="branch.id === selectedBranch.id
            ? 'border-primary-300/80 dark:border-primary-400/50 bg-white/95 dark:bg-neutral-900/95 shadow-xl'
            : 'border-neutral-200/70 dark:border-neutral-700/60 bg-white/80 dark:bg-neutral-900/70 hover:border-primary-200/70 dark:hover:border-primary-500/40 hover:shadow-lg'
          "
        >
          <div :class="['w-12 h-12 flex items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 bg-gradient-to-br', branch.accent]">
            <component :is="branch.icon" class="w-6 h-6" />
          </div>
          <div class="text-left">
            <p class="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-semibold">{{ branch.category }}</p>
            <p class="text-sm font-semibold text-neutral-900 dark:text-white">{{ branch.name }}</p>
            <p class="text-[11px] text-neutral-500 dark:text-neutral-400">{{ branch.timeline }}</p>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h, reactive, ref } from 'vue'

interface Branch {
  id: string
  name: string
  category: string
  status: 'Live' | 'Coming Soon'
  timeline: string
  description: string
  focus: string
  accent: string
  positionClass: string
  connector: { x: number; y: number }
  icon: ReturnType<typeof defineComponent>
}

const iconBaseProps = {
  fill: 'currentColor',
  viewBox: '0 0 24 24'
}

const StudiesIcon = defineComponent({
  name: 'StudiesIcon',
  setup() {
    return () =>
      h('svg', iconBaseProps, [
        h('path', {
          d: 'M5 3h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 13h5v-1h-5v1zm-7 0h5v-1H5v1zm0-3h14v-2H5v2zm0-4h14V7H5v2z'
        })
      ])
  }
})

const ThreadsIcon = defineComponent({
  name: 'ThreadsIcon',
  setup() {
    return () =>
      h('svg', iconBaseProps, [
        h('path', {
          d: 'M5 4h14a1 1 0 011 1v3a6 6 0 01-6 6h-1l1 4h3v2H7v-2h3l1-4h-1a6 6 0 01-6-6V5a1 1 0 011-1z'
        })
      ])
  }
})

const StudiosIcon = defineComponent({
  name: 'StudiosIcon',
  setup() {
    return () =>
      h('svg', iconBaseProps, [
        h('path', {
          d: 'M4 4h4l2 4h8l2-4h2v16h-2l-2-4H9l-2 4H4V4zm9 8l5 3V9l-5 3z'
        })
      ])
  }
})

const CommunityIcon = defineComponent({
  name: 'CommunityIcon',
  setup() {
    return () =>
      h('svg', iconBaseProps, [
        h('path', {
          d: 'M12 2a5 5 0 110 10 5 5 0 010-10zm0 12c3.866 0 7 2.239 7 5v3H5v-3c0-2.761 3.134-5 7-5z'
        })
      ])
  }
})

const branches = reactive<Branch[]>([
  {
    id: 'studies',
    name: 'BibleStem Studies',
    category: 'Learn',
    status: 'Live',
    timeline: 'Available now',
    description: 'Interactive platform with verse-by-verse lessons, original language insights, and guided study flows.',
    focus: 'Anchors the entire ecosystem by providing free discipleship resources.',
    accent: 'from-primary-500 to-secondary-500',
    positionClass: 'node-studies',
    connector: { x: 220, y: 200 },
    icon: StudiesIcon
  },
  {
    id: 'threads',
    name: 'BibleStem Threads',
    category: 'Inspire + Fund',
    status: 'Coming Soon',
    timeline: 'Launching winter 2026',
    description: 'Faith-inspired apparel crafted in small batches—every drop helps fund BibleStem Studies.',
    focus: 'Creates a sustainable funding stream while multiplying gospel conversations.',
    accent: 'from-amber-400 to-orange-500',
    positionClass: 'node-threads',
    connector: { x: 780, y: 260 },
    icon: ThreadsIcon
  },
  {
    id: 'studios',
    name: 'BibleStem Studios',
    category: 'Create',
    status: 'Coming Soon',
    timeline: 'Mid-2026 studio debut planned',
    description: 'Cinematic storytelling built in Unreal Engine 5 that reveals the beauty and drama of Scripture.',
    focus: 'Extends BibleStem reach through immersive visual storytelling experiences.',
    accent: 'from-purple-500 to-indigo-600',
    positionClass: 'node-studios',
    connector: { x: 760, y: 780 },
    icon: StudiosIcon
  },
  {
    id: 'community',
    name: 'BibleStem Community',
    category: 'Connect',
    status: 'Coming Soon',
    timeline: 'Membership platform in development',
    description: 'Faith-based hub for testimonies, study cohorts, and ministry partnerships.',
    focus: 'Fosters discipleship relationships and long-term engagement.',
    accent: 'from-teal-500 to-cyan-500',
    positionClass: 'node-community',
    connector: { x: 220, y: 780 },
    icon: CommunityIcon
  }
])

const selectedBranch = ref(branches[0])

const selectBranch = (branch: Branch) => {
  selectedBranch.value = branch
}
</script>

<style scoped>
.map-node {
  position: absolute;
}

.node-studies {
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.node-threads {
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
}

.node-studios {
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.node-community {
  top: 50%;
  left: 4%;
  transform: translateY(-50%);
}

@media (min-width: 640px) {
  .node-studies {
    top: 6%;
    left: 18%;
    transform: translate(-50%, 0);
  }

  .node-threads {
    top: 16%;
    right: 10%;
    transform: translate(0, 0);
  }

  .node-studios {
    bottom: 8%;
    right: 14%;
    left: auto;
    transform: translate(0, 0);
  }

  .node-community {
    bottom: 10%;
    left: 10%;
    top: auto;
    transform: translate(0, 0);
  }
}

@media (min-width: 1024px) {
  .node-studies {
    top: 10%;
    left: 14%;
    transform: translate(0, 0);
  }

  .node-threads {
    top: 16%;
    right: 12%;
  }

  .node-studios {
    bottom: 12%;
    right: 18%;
  }

  .node-community {
    bottom: 12%;
    left: 12%;
  }
}
</style>
