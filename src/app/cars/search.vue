<template>
	<div class="notification is-warning">
        <label>LOCAL DE RETIRADA</label>
        <p class="control">
            <input class="input is-medium" type="text" placeholder="">
        </p>
        <p class="control">
            <label class="checkbox">
                <input type="checkbox">
                Devolver o carro em outro local
            </label>
        </p>
        <label>LOCAL DE DEVOLUÇÃO</label>
        <p class="control">
            <input class="input is-medium" type="text" placeholder="">
        </p>
        <label>RETIRADA</label>
        <p class="control">
            <input class="input is-medium" type="text" placeholder="">
        </p>
        <label>DEVOLUÇÃO - 8 DIA(S)</label>
        <p class="control">
            <input class="input is-medium" type="text" placeholder="">
        </p>
        <a class="button is-normal is-info is-fullwidth">BUSCAR</a>
    </div>
</template>

<script>
    export default {
        name : 'Search'
    }
</script>

<style scoped>
    .button {
        font-size: 0.9em;
        font-weight: bold;
    }
</style>