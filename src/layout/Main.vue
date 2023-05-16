<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <keep-alive>
                <div :key="$route.path">
                    <component :is="Component" />
                </div>
            </keep-alive>
        </transition>
    </router-view>
</template>