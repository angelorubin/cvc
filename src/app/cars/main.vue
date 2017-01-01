<template>
    
    <div class="container">

        <div class="columns">
            <div class="column is-3">
                <cvc-search></cvc-search>
            </div>
            <div class="column is-9">
                <div class="columns">
                    <div class="column is-3">
                        <p class="control">
                            <span class="select is-medium">
                                <select>
                                    <option>Itens por página: 100</option>
                                    <option>Itens por página: 50</option>
                                    <option>Itens por página: 20</option>
                                </select>
                            </span>
                        </p>
                    </div>
                    <div class="column is-3">
                        <p class="control">
                            <span class="select is-medium">
                                <select>
                                    <option>Itens por página: 100</option>
                                    <option>Itens por página: 50</option>
                                    <option>Itens por página: 20</option>
                                </select>
                            </span>
                        </p>
                    </div>
                    <div class="column">
                        <p class="control">
                            <span class="select is-medium">
                                <select>
                                    <option>Itens por página: 100</option>
                                    <option>Itens por página: 50</option>
                                    <option>Itens por página: 20</option>
                                </select>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="columns is-gapless">
                    <div class="column is-10">
                        <div class="box">1</div>
                    </div>
                    <div class="column is-2">
                        <div class="notification is-warning">2</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    import CvcSearch from './search'

    export default {
        name: 'Results',
        data () {
            return {
                msg: 'Welcome to CVC'
            }
        },
        components: {
            CvcSearch
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

html {
    background-color: #fff;
}

.box {
    border-radius: 0;
    box-shadow: none;
    background-color: none;
    border-top: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
}

.control select {
    border-radius: 0;
}

.notification {
    border-radius: 0;
}

.container {
    margin-top: 2em;
}
        
</style>


<!--
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
<a class="button is-info is-fullwidth">BUSCAR</a>

<div class="tile">
<p class="control">
    <span class="select">
        <select>
            <option>Itens por página: 100</option>
            <option>Itens por página: 50</option>
            <option>Itens por página: 20</option>
        </select>
    </span>
</p>
</div>

<div class="tile">
<p class="control">
    <span class="select">
        <select>
            <option>Ordenar por: <small class="is-small">menor preço</small></option>
            <option>Options</option>
        </select>
    </span>
</p>
</div>

<div class="tile">
<p class="control">
    <span class="select">
        <select>
            <option>Moeda: Real</option>
            <option>Moeda: Dólar</option>
        </select>
    </span>
</p>
</div>


<div class="tile is-parent is-12">

<div class="tile is-9">
    <div class="tile box">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>

<div class="tile is-3">
    <div class="notification is-warning">
        <h1 class="title is-5">TOTAL DA LOCAÇÃO</h1>
    </div>
</div>

</div>
-->