<template>
  <main>
    <h2>Bem vindo a</h2>
    <h1>Valeroth</h1>

    <div>
      <p>Muito bom ver você de volta!</p>
      <p>Para passar, diga-me seu nome!</p>
    </div>

    <form @submit.prevent="login">
      <div v-show="userError">Usuário Incorreto</div>
      <input v-model="userName" required placeholder="Usuário">
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
