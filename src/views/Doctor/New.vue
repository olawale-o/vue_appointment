<template>
  <div class="doctor__new">
    <div class="doctor__form">
      <form @submit.prevent="onSubmit">
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
          <select required v-model="doctor.city">
            <option disabled value="" selected>Please select one</option>
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
            accept="image/*"
            required
            ref="picture"
            @change="onFileUpload"
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
  import { computed, ref, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { actionDoctorAdd } from '@/redux/doctor/action_creators';
  export default {
    name: 'NewDoctor',
    setup() {
      const picture = ref(null);
      const doctor = reactive({
        fullname: '',
        city: 'Abuja',
        specialty: '',
        description: '',
      });
      const store = useStore();
      const router = useRouter();
      const onSubmit = () => {
        const formData = new FormData();
        formData.append('doctor[fullname]', doctor.fullname);
        formData.append('doctor[city]', doctor.city);
        formData.append('doctor[specialty]', doctor.specialty);
        formData.append('doctor[picture]', picture.value);
        formData.append('doctor[description]', doctor.description);
        store.dispatch(actionDoctorAdd(formData, router.push));
      };
      const onFileUpload = (e) => {
        picture.value = e.target.files[0];
      };
      return { 
        loading: computed(() => store.getters.loading),
        onSubmit, picture, onFileUpload, doctor,
      };
    },
  }
</script>

<style scoped>

</style>