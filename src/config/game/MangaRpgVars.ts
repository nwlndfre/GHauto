export class MangaRpg {
    static getEnv() {
        return {
            "www.mangarpg.com": { name: "MRPG_prod", id: "hh_mangarpg", baseImgPath: "https://mh.hh-content.com" }
        }
    }
    static getTrolls() {
        return ['Latest',
            'William Scarlett'];
    }

    static updateFeatures(envVariables: any) {
        envVariables.isEnabledSideQuest = false;// to remove when SideQuest arrives in Manga RPG
        envVariables.isEnabledMythicPachinko = false;// to remove when Mythic Pachinko arrives in Manga RPG
        envVariables.isEnabledEquipmentPachinko = false;// to remove when Equipment Pachinko arrives in Manga RPG
        envVariables.isEnabledClubChamp = false;// to remove when Club Champs arrives in Manga RPG
        envVariables.isEnabledPantheon = false;// to remove when Pantheon arrives in Manga RPG
        envVariables.isEnabledLabyrinth = false;// to remove when Pantheon arrives in Manga RPG
        envVariables.isEnabledSeasonalEvent = false;// to remove when event arrives in Manga RPG
        envVariables.isEnabledBossBangEvent = false;// to remove when event arrives in Manga RPG
        envVariables.isEnabledSultryMysteriesEvent = false;// to remove when event arrives in Manga RPG
    }
}