<template>
  <div class="doctor__new">
    <div class="doctor__form">
      <form onSubmit={handleSubmit}>
        <h1 class="heading1 mb-2" style="color: '#fff'">ADD A NEW DOCTOR</h1>
        <div class="field">
          <input
            type="text"
            placeholder="Doctor's Name"
            class="input"
            required
            v-model="doctor.fullname"
          />
        </div>
        <div class="field">
          <select required>
            <option>Select a city</option>
            <option value="lagos">Lagos</option>
            <option value="toronto">Toronto</option>
          </select>
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Specialization"
            class="input"
            required
            v-model="doctor.specialty"
          />
        </div>
        <div class="field">
          <textarea
            placeholder="Description"
            rows="5"
            cols="35"
            class="textarea"
            required
            v-model="doctor.description"
          />
        </div>
        <div class="field">
          <input
            type="file"
            class="input"
            required
          />
        </div>
        <div class="actions">
          <div class="form__submission-indicator" v-if="loading" />
          <input type="submit" value="Add Doctor" class="btn addBtn" v-else />}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  export default {
    name: 'NewDoctor',
    setup() {
      const store = useStore();
      const doctor = reactive({
        fullname: '',
        specialty: '',
        description: '',
        picture: '',
      });

      return { 
        doctor,
        loading: computed(() => store.getters.loading),
      };
    },
  }
</script>

<style scoped>

</style>