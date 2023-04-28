<script setup>
import { ref, watch } from "vue";

const billDivide = ref(1);

watch(
    () => billDivide.value,
    (newValue) => {
        if (newValue < 1) {
            billDivide.value = 1;
        }
    }
);

const emits = defineEmits(["update:bill", "update:billDivide"]);
</script>

<template>
    <div class="bill-divide">
        <div class="bill-divide__divide">
            <label for="bill-divide">Number of People</label>
            <input
                id="bill-divide"
                type="number"
                v-model="billDivide"
                @input="
                    $emit('update:billDivide', Number($event.target.value))
                "
                placeholder="1"
            />
        </div>
    </div>
</template>

<style scoped>
.bill-divide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

.bill-divide__divide {
    display: flex;
    flex-direction: column;
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

@media (min-width: 768px) {
    .bill-divide {
        flex-direction: row;
    }

    .bill-divide__divide {
        margin: 0 1rem;
    }
}

@media (min-width: 1024px) {
    .bill-divide {
        flex-direction: column;
    }
}

@media (min-width: 1440px) {
    .bill-divide {
        flex-direction: row;
    }
}

@media (min-width: 2560px) {
    .bill-divide {
        flex-direction: column;
    }
}
</style>
