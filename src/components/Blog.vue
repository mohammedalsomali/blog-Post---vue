<script>
    function like(){
        return console.log('like');
    }

    
</script>

<template>
    <div class="blogContainer">
        <div>
            <input type="text" class="blogSubject">
            <a> Auther </a>
            <a> Publish Date </a>
            <button class="like">
                Like
            </button>
        </div>
        <textarea name="blogBody" maxlength="255" > 

        </textarea>
        
    </div>
</template>


<style scoped>
    .blogContainer {
        display: flex;
        flex-direction: column;
        background-color: azure;
    }

    textarea{
        background-color: aqua;
    }
</style>