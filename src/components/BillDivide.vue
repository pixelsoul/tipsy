<script setup>
import { ref, watch } from "vue";

const billDivide = ref(1);

const emits = defineEmits(["update:billDivide"]);

watch(
    () => billDivide.value,
    (newValue, oldValue) => {
        if (newValue < 1) {
            billDivide.value = 1;
        }
    }
);

const updateBillDivide = (value) => {
    value < 1
        ? (value = 1)
        : ((billDivide.value = value), emits("update:billDivide", value));
};
</script>

<template>
    <div class="bill-divide">
        <div class="bill-divide__label">
            <label for="bill-divide">Number of People</label>
        </div>
        <div class="bill-divide__divide">
            <button
                class="bill-divide__button"
                @click="updateBillDivide(billDivide - 1)"
            >
                -
            </button>
            <input
                id="bill-divide"
                type="number"
                v-model="billDivide"
                @input="updateBillDivide(Number($event.target.value))"
                placeholder="1"
                disabled
            />
            <button
                class="bill-divide__button"
                @click="updateBillDivide(billDivide + 1)"
            >
                +
            </button>
        </div>
    </div>
</template>

<style scoped>
.bill-divide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0rem;
}

.bill-divide input:disabled {
    color: var(--white);
}

.bill-divide__button {
    font-size: 2rem;
    padding: 0.5rem;
    border: 0px solid #ccc;
    border-radius: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
}

.bill-divide__button:focus {
    outline: none;
}

.bill-divide__divide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.bill-divide__divide label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.bill-divide__divide input {
    font-size: 2rem;
    padding: 0.5rem;
    border: 0px solid #ccc;
    border-radius: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: transparent;
}

.bill-divide__divide input:focus {
    outline: none;
}

.bill-divide__divide input::-webkit-outer-spin-button,
.bill-divide__divide input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
