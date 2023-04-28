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
                v-model="bill"
                @input="$emit('update:bill', Number($event.target.value))"
                placeholder="0.00"
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
    font-size: 2.5rem;
    padding: 0.5rem;
    border: 1px solid #4e4e4e;
    border-radius: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: transparent;
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
