<template>
  <main class="gutter">
    <div class="background">
      <NuxtImg class="background-image" src="/images/background/castleBackground.jpg" />
      <div class="background-shadow"></div>
    </div>

    <h2>Bem vindo a</h2>
    <ValDivisor />
    <h1>Valeroth</h1>

    <div class="text-name">
      <p>Muito bom ver você de volta!</p>
      <p>Para passar, diga-me seu nome!</p>
    </div>

    <form :class="{ 'error': userError }" @submit.prevent="login">
      <div v-show="userError" class="error">Usuário Incorreto</div>
      <input v-model="userName" required type="text" placeholder="Usuário" @input="userError = false">
      <button type="submit">Entrar</button>
    </form>
  </main>
</template>

<script setup lang="ts">
  const router = useRouter();

  const userName = ref<string>('');
  const userError = ref<boolean>(false);

  async function login() {
    userError.value = false;

    const { data, error } = await useFetch('/api/login', {
      method: 'POST',
      body: { userName: userName },
    });

    if (error) {
      userError.value = true;
      return;
    }

    if (data.value?.haveChar) {
      router.push('/char');
    } else {
      router.push('/charCreation');
    }
  }
</script>

<style lang="scss" scoped>
$shadow-color: #111010;

main {
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: end;
  box-sizing: border-box;
}

.background {
  &-image {
    position: absolute;
    z-index: -1;
    top: -100px;
    left: 0;
    height: 100vh;
    transform: translateX(-40%);
  }

  &-shadow {
    position: absolute;
    z-index: -1;
    width: 160%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: $shadow-color;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 40%);
    filter: blur(40px);
  }
}

h1 {
  margin-top: 0;
}

h2 {
  margin-bottom: 0;
}

.text-name {
  p {
    margin: 0;
  }

  p:last-of-type {
    margin-bottom: 32px;
    font-weight: 500;
  }
}

form {
  position: relative;

  &.error {
    input {
      border-color: red;
    }
  }

  div.error {
    color: red;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $shadow-color;
    padding: 0 8px;
  }

  input {
    margin-bottom: 12px;
  }

  * {
    transition: all 0.2s ease;
  }
}
</style>
