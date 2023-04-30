<script setup>
import { ref } from "vue";

const bill = ref(null);

const emits = defineEmits(["update:bill"]);
</script>

<template>
    <div class="bill-amount">
        <div class="bill-amount__bill">
            <input
                id="bill-amount"
                type="number"
                v-model.number="bill"
                @input="$emit('update:bill', bill)"
                placeholder="$0"
            />
        </div>
    </div>
</template>

<style scoped>
.bill-amount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.bill-amount__bill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.bill-amount__bill input {
    font-size: 3.5rem;
    padding: 0.5rem;
    border: 0px;
    border-radius: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: transparent;
    color: var(--primary);
}

.bill-amount__bill input:focus {
    outline: none;
}

.bill-amount__bill input::-webkit-outer-spin-button,
.bill-amount__bill input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
