<template>
    <div class="search">
        <form>
            <p><input type="search" placeholder="Wpisz nazwe..."><input type="submit" class="button" value="Szukaj"></p>
            <p>Szukaj po <select required=true>                        
                    <option value="0">Nazwie</option>
                    <option value="1">Marce</option>
                </select></p>
        </form>
    </div>
</template>

<script>
    module.exports = {

    }
</script>