<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Vue file consists of free optional parts


// Mounted is a lifecycle event that is always triggered whenever this component is rendered to your browser's DOM.
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
