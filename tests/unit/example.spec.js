import WorkoutDiary from "@/components/WorkoutDiary/WorkoutDiary.vue"
import { mount } from "@vue/test-utils"

describe("Emitter", () => {
  it("emits an event with one argument", () => {
    // Lisame komponendi "wrapper" objekti sisse, kus sees toimub testimine
    const wrapper = mount(WorkoutDiary)

    // Kirjeldame meetodit, mida testime. milleks on this.$emit('onEdit', id)
    // "onEdit" on eventi nimi ja id on parameeter
    wrapper.vm.$emit('onEdit', 0)

    // Siin tahame, et väärtus oleks tõene
    expect(wrapper.emitted().onEdit).toBeTruthy()

    // Kontrollime parameetri "id" pikkus oleks vähemalt 1
    expect(wrapper.emitted().onEdit.length).toBe(1)

    // Kui paneme parameetriks 0 siis ta peab võrduma 0'iga
    expect(wrapper.emitted().onEdit[0]).toEqual([0])

    // Testi lõppedes on näha, et parameeter on 0
    console.log(wrapper.emitted())
  })
})