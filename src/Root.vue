<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>

import Results from './app/cars/main'

export default {
    name: 'Root',
    components: {
    	Results
    }
}

</script>
