const { getSkillRepository } = require("../../database/utils")

const initializeSkills = async () => {
    const skillRepository = await getSkillRepository()
    await skillRepository.clear()
    await skillRepository.save({
        skillName: "PHP"
    })
    await skillRepository.save({
        skillName: "JS"
    })
}

module.exports = {
    initializeSkills
}