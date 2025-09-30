<template>
    <div class="container">
        <div class="row gap-4">
          <div class="emote-slot-legendary align-items-center justify-content mt-4 p-3 col">
            <h5>Lideres</h5>
            <ul class="list-unstyled">
              <li v-for="miembros in clan.memberList" class="d-inline-block">
                <button
                  class="btn-supercell p-2 m-1"
                  v-if="miembros.role === 'leader' || miembros.role === 'coLeader' || miembros.tag === '#88CRCPCJ0'"
                  :key="miembros.rank"
                >
                  {{ miembros.name }}
                </button>
              </li>
            </ul>
          </div>

          <div class="emote-slot-legendary  align-items-center justify-content mt-4 p-3 col">
            <h5>Veteranos</h5>
            <ul class="list-unstyled">
              <li v-for="miembros in clan.memberList" class="d-inline-block">
                <button
                  class="btn-supercell p-2 m-1"
                  v-if="miembros.role === 'elder'"
                  :key="miembros.rank"
                >
                  <ul class="list-unstyled">
                    <li>{{ miembros.name }}</li>
                  </ul>
                </button>
              </li>
            </ul>
          </div>

          <div class="emote-slot align-items-center justify-content p-3">
            <h5>Miembros</h5>
            <ul class="list-unstyled">
              <li v-for="miembros in clan.memberList" class="d-inline-block">
                <button
                  class="btn-supercell p-2 m-1"
                  v-if="miembros.role === 'member'"
                  :key="miembros.rank"
                >
                  <ul class="list-unstyled">
                    <li>{{ miembros.name }}</li>
                  </ul>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Members",
  props: { clan: { type: Object, required: true } },
};
</script>