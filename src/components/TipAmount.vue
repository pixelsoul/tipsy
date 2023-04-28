<script setup>
import { computed } from "vue";

const props = defineProps({
    bill: {
        type: Number,
        required: false,
        default: 0,
    },
    tipPercent: {
        type: Number,
        required: false,
        default: 15,
    },
});

const tipAmount = computed(() => {
    return (props.bill * props.tipPercent) / 100;
});

const total = computed(() => {
    return props.bill + tipAmount.value;
});
</script>

<template>
    <div class="tip-amount">
        <div class="tip-amount__tip-percent">{{ tipPercent }}% Tip</div>
        <div class="tip-amount__data">
            <div class="tip-amount__tip-amount">
                Tip ${{ tipAmount.toFixed(2) }}
            </div>
            <div class="tip-amount__total">
                Total ${{ total.toFixed(2) }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.tip-amount {
    margin: 1rem;
    background-color: #252525;
}

.tip-amount__tip-percent {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    background-color: #181818;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    align-items: left;
    justify-content: left;
    width: auto;
}

.tip-amount__data {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
}

.tip-amount__tip-amount,
.tip-amount__total {
    font-size: 1rem;
    margin: 0.5rem;
    background-color: #00494d;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

@media (min-width: 768px) {
    .tip-amount {
        flex-direction: row;
    }

    .tip-amount__tip-percent {
        border-radius: 0.5rem 0 0 0.5rem;
    }

    .tip-amount__data {
        flex-direction: row;
    }

    .tip-amount__tip-amount {
        margin-right: 0.5rem;
    }
}

@media (min-width: 1024px) {
}

@media (min-width: 1440px) {
}
</style>
