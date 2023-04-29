<template>
    <div class="card">
        <div v-if="this.$slots.header" class="card__card-header">
            <slot name="header"></slot>
        </div>
        <div class="card__card-body">
            <slot></slot>
        </div>
        <div v-if="this.$slots.footer" class="card__card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0.5rem 1rem 0.5rem;
    padding: 0rem 0.5rem 0rem 0.5rem;
    border-radius: 0.5rem;
    background-color: #252525;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
}

.card__card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin: 0rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #121212;
    position: relative;
}

.card__card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0rem;
    padding: 0.5rem;
    width: 100%;
    border-radius: 0;
    background-color: var(--color-primary);
}

.card__card-footer {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin: 0rem;
    padding: 0.5rem;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: #232323;
    border-top: 1px solid #181818;
}
</style>
