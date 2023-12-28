import { HHAuto_ToolTips } from "./index";

HHAuto_ToolTips.fr['saveDebug'] = { version: "5.6.24", elementText: "Sauver log", tooltip: "Sauvegarder un fichier journal de débogage."};
HHAuto_ToolTips.fr['gitHub'] = { version: "5.6.24", elementText: "GitHub", tooltip: "Lien vers le projet GitHub."};
HHAuto_ToolTips.fr['saveConfig'] = { version: "5.6.24", elementText: "Sauver config", tooltip: "Permet de sauvegarder la configuration."};
HHAuto_ToolTips.fr['loadConfig'] = { version: "5.6.24", elementText: "Charger config", tooltip: "Permet de charger la configuration."};
HHAuto_ToolTips.fr['master'] = { version: "5.6.24", elementText: "Script on/off", tooltip: "Bouton marche/arrêt pour le script complet"};
HHAuto_ToolTips.fr['settPerTab'] = { version: "5.6.24", elementText: "Options par onglet", tooltip: "Active le paramétrage par onglet.<br>Si activé : permet d'ouvrir le jeu dans un autre onglet tout en laissant le script fonctionner sur le premier.<br>Les options du script ne seront pas sauvegardées à la fermeture du navigateur."};
HHAuto_ToolTips.fr['paranoia'] = { version: "5.6.24", elementText: "Mode Parano", tooltip: "Permet de simuler le sommeil et l'utilisateur humain (à documenter davantage)"};
HHAuto_ToolTips.fr['paranoiaSpendsBefore'] = { version: "5.6.24", elementText: "Utiliser points avant", tooltip: "Dépensera des points pour les options (quête, troll, ligues et saison)<br> uniquement si elles sont activées<br>et dépense des points qui seraient perdus pendant la nuit<br> Ex : vous avez la puissance d'un troll à 17, mais en allant 4h45 en paranoïa,<br> cela voudrait dire avoir 17+10 points (arrondis à l'int supérieur), donc être au dessus du 20 max<br> il dépensera alors 8 points pour retomber à 19 fin de la paranoïa, empêchant de perdre des points."};
HHAuto_ToolTips.fr['spendKobans0'] = { version: "5.6.24", elementText: "Dépense Kobans", tooltip: "<p style='color:red'>/!\\ Autorise la dépense des Kobans /!\\</p>Si activé : permet d'activer les fonctions utilisant des kobans"};
HHAuto_ToolTips.fr['kobanBank'] = { version: "5.6.24", elementText: "Kobans à conserver", tooltip: "Minimum de Kobans conservé en banque par les fonctions utilisant des kobans.<br>Ces fonctions ne s'exécuteront pas si elles risquent de faire passer la réserve de kobans sous cette limite."};
HHAuto_ToolTips.fr['buyCombat'] = { version: "5.6.24", elementText: "Achat comb. événmt", tooltip: "<p style='color:red'>/!\\ Dépense des Kobans /!\\<br>("+HHAuto_ToolTips.fr['spendKobans0'].elementText+" doit être activé)</p>Si activé : <br>recharge automatiquement les points de combat durant les X dernières heures de l'événement (sans faire passer sous la valeur de la réserve de Kobans)"};
HHAuto_ToolTips.fr['buyCombTimer'] = { version: "5.6.24", elementText: "Heures d'achat comb.", tooltip: "(Nombre entier)<br>X dernières heures de l'événement"};
HHAuto_ToolTips.fr['autoBuyBoosters'] = { version: "5.6.24", elementText: "Boosters lég.", tooltip: "<p style='color:red'>/!\\ Dépense des Kobans /!\\<br>("+HHAuto_ToolTips.fr['spendKobans0'].elementText+" doit être activé)</p>Permet d'acheter des boosters sur le marché (sans faire passer sous la valeur de la réserve de Kobans)."};
HHAuto_ToolTips.fr['autoBuyBoostersFilter'] = { version: "5.6.24", elementText: "Filtre", tooltip: "(valeurs séparées par ;)<br>Définit quel(s) booster(s) acheter, respecter l'ordre (B1:Ginseng B2:Jujubes B3:Chlorella B4:Cordyceps)."};
HHAuto_ToolTips.fr['autoSeasonPassReds'] = { version: "5.6.24", elementText: "Passer 3 rouges", tooltip: "<p style='color:red'>/!\\ Dépense des Kobans /!\\<br>("+HHAuto_ToolTips.fr['spendKobans0'].elementText+" doit être activé)</p>Utilise des kobans pour renouveler les adversaires de la saison si PowerCalc détermine 3 combats rouges (perdus)."};
HHAuto_ToolTips.fr['showCalculatePower'] = { version: "6.8.0", elementText: "PowerCalc", tooltip: "Si activé : affiche le résultat des calculs du module PowerCalc (Simulateur de combats pour Ligues, Trolls, Saisons)."};
HHAuto_ToolTips.fr['showAdsBack'] = { version: "5.34.15", elementText: "Move ads to the back", tooltip: "Si activé : deplace les pubs à l'arrière plan."};
//HHAuto_ToolTips.fr['calculatePowerLimits'] = { version: "5.6.24", elementText: "Limites perso", tooltip: "(rouge;orange)<br>Définissez vos propres limites de rouge et d'orange pour les opposants<br> -6000;0 veux dire<br> <-6000 est rouge, entre -6000 et 0 est orange et >=0 est vert"};
HHAuto_ToolTips.fr['showInfo'] = { version: "5.6.24", elementText: "Infos", tooltip: "Si activé : affiche une fenêtre d'informations sur le script."};
HHAuto_ToolTips.fr['showInfoLeft'] = { version: "5.23.0", elementText: "Infos à gauche", tooltip: "Affiche la fenêtre d'information à gauche plutot qu'à droite"};
HHAuto_ToolTips.fr['autoSalary'] = { version: "5.6.24", elementText: "Salaire", tooltip: "Si activé :<br>Collecte les salaires toutes les X secondes."};
//HHAuto_ToolTips.fr['autoSalaryMinTimer'] = { version: "5.6.24", elementText: "Attente min.", tooltip: "(Nombre entier)<br>Secondes d'attente minimum entre deux collectes."};
HHAuto_ToolTips.fr['autoSalaryMinSalary'] = { version: "5.20.3", elementText: "Salaire mini", tooltip: "(Integer)<br>Salare minium pour démarrer la collecte"};
HHAuto_ToolTips.fr['autoSalaryMaxTimer'] = { version: "5.20.3", elementText: "Temps de collecte max", tooltip: "(Integer)<br>X secs pour collecter le salaire avant d'arrêter."};
HHAuto_ToolTips.fr['autoMission'] = { version: "5.6.24", elementText: "Missions", tooltip: "Si activé : lance automatiquement les missions."};
HHAuto_ToolTips.fr['autoMissionCollect'] = { version: "5.6.24", elementText: "Collecter", tooltip: "Si activé : collecte automatiquement les récompenses des missions."};
HHAuto_ToolTips.fr['compactMissions'] = { version: "5.24.0", elementText: "Compacter", tooltip: "Compacter l'affichage des missions"};
HHAuto_ToolTips.fr['autoTrollBattle'] = { version: "5.6.24", elementText: "Activer", tooltip: "Si activé : combat automatiquement le troll."};
HHAuto_ToolTips.fr['autoTrollSelector'] = { version: "5.6.24", elementText: "Sélection troll", tooltip: "Sélection du troll à combattre"};
HHAuto_ToolTips.fr['autoTrollThreshold'] = { version: "5.6.24", elementText: "Réserve", tooltip: "Points de combat de trolls (poings) minimum à conserver"};
HHAuto_ToolTips.fr['eventTrollOrder'] = { version: "5.6.24", elementText: "Ordre Trolls d'événement", tooltip: "Permet de sélectionner l'ordre dans lequel les trolls d'événements sont automatiquement combattus."};
HHAuto_ToolTips.fr['firstTrollWithGirls'] = { version: "5.32.0", elementText: "Premier troll avec une fille"};
HHAuto_ToolTips.fr['lastTrollWithGirls'] = { version: "5.32.0", elementText: "Dernier troll avec une fille"};
HHAuto_ToolTips.fr['eventTrollOrder'] = { version: "6.15.8", elementText: "Ordre des Trolls lors des évènements", tooltip: "(valeurs séparées par ;)<br>Défini l'ordre dans lequels les combats de Troll seront effectué<br>1 : Dark Lord<br>2 : Espion Ninja<br>[]...]"};
HHAuto_ToolTips.fr['plusEvent'] = { version: "5.6.24", elementText: "+Evénmt.", tooltip: "Si activé : ignore le troll sélectionné et combat les trolls d'événement s'il y a une fille à gagner."};
HHAuto_ToolTips.fr['plusEventMythic'] = { version: "5.6.24", elementText: "+Evénmt. mythique", tooltip: "Si activé : ignorer le troll sélectionné et combat le troll d'événement mythique s'il y a une fille à gagner et des fragments disponibles."};
HHAuto_ToolTips.fr['autoSeason'] = { version: "5.6.24", elementText: "Activer", tooltip: "Si activé : combat automatique de saison (Adversaire sélectionné avec PowerCalc)."};
HHAuto_ToolTips.fr['autoSeasonCollect'] = { version: "5.6.24", elementText: "Collecter", tooltip: "Si activé : collecte automatiquement les récompenses de saison (si plusieurs à collecter, en collectera une par combat)."};
HHAuto_ToolTips.fr['autoSeasonCollectAll'] = { version: "6.15.8", elementText: "Tout collecter", tooltip: "Si activé : Collect Automatiquement toutes les récompense avant la fin de la Saison (configuré avec le timer \"Tout collecter\")"};
HHAuto_ToolTips.fr['autoSeasonThreshold'] = { version: "5.6.24", elementText: "Réserve", tooltip: "Points de combat de saison (Baiser) minimum à conserver."};
HHAuto_ToolTips.fr['autoQuest'] = { version: "5.6.24", elementText: "Quête", tooltip: "Si activé : Fait automatiquement les quêtes"};
HHAuto_ToolTips.fr['autoQuestThreshold'] = { version: "5.6.24", elementText: "Réserve", tooltip: "Energie de quête minimum à conserver"};
HHAuto_ToolTips.fr['autoContest'] = { version: "5.6.24", elementText: "Compét'", tooltip: "Si activé : récolter les récompenses de la compét' terminée"};
HHAuto_ToolTips.fr['compactEndedContests'] = { version: "5.24.0", elementText: "Compacter", tooltip: "Compacter l'affichage des compet'"};
HHAuto_ToolTips.fr['autoFreePachinko'] = { version: "5.6.24", elementText: "Pachinko", tooltip: "Si activé : collecte automatiquement les Pachinkos gratuits"};
HHAuto_ToolTips.fr['autoMythicPachinko'] = { version: "5.6.24", elementText: "Pachinko mythique"};
HHAuto_ToolTips.fr['autoEquipmentPachinko'] = { version: "5.34.9", elementText: "Pachinko d'équipment"};
HHAuto_ToolTips.fr['autoLeagues'] = { version: "5.6.24", elementText: "Activer", tooltip: "Si activé : Combattre automatiquement en Ligues"};
HHAuto_ToolTips.fr['autoLeaguesPowerCalc'] = { version: "6.14.0", elementText: "Utiliser PowerCalc", tooltip: "Si activé : choisira l'adversaire en utilisant PowerCalc."};
HHAuto_ToolTips.fr['autoLeaguesCollect'] = { version: "5.6.24", elementText: "Collecter", tooltip: "Si activé : Collecte automatiquement les récompenses de la Ligue terminée"};
HHAuto_ToolTips.fr['autoLeaguesSelector'] = { version: "5.6.24", elementText: "Ligue ciblée", tooltip: "Objectif de niveau de ligue (à atteindre, à conserver ou à dépasser selon le choix)."};
HHAuto_ToolTips.fr['autoLeaguesAllowWinCurrent'] = {version: "5.6.24", elementText:"Autoriser dépassement", tooltip: "Si activé, le script tentera de gagner la ligue ciblée puis rétrogradera la semaine suivante pour retourner dans la ligue ciblée."};
HHAuto_ToolTips.fr['autoLeaguesThreshold'] = { version: "5.6.24", elementText: "Réserve", tooltip: "Points de combat de ligue minimum à conserver."};
HHAuto_ToolTips.fr['powerPlacesTitle'] = { version: "6.8.0", elementText: "Lieux de pouvoir", tooltip: ""};
HHAuto_ToolTips.fr['autoPowerPlaces'] = { version: "6.8.0", elementText: "Activer", tooltip: "Si activé : Fait automatiquement les lieux de pouvoir."};
HHAuto_ToolTips.fr['autoPowerPlacesIndexFilter'] = { version: "5.6.24", elementText: "Filtre", tooltip: "Permet de définir un filtre et un ordre sur les lieux de pouvoir à faire (uniquement lorsque plusieurs lieux de pouvoir expirent en même temps)."};
HHAuto_ToolTips.fr['autoPowerPlacesAll'] = { version: "5.6.24", elementText: "Tous", tooltip: "Si activé : ignore le filtre et fait tous les lieux de pouvoir (mettra à jour le filtre avec les identifiants actuels)"};
HHAuto_ToolTips.fr['compactPowerPlace'] = { version: "5.24.0", elementText: "Compacter", tooltip: "Compacter l'affichage des leux de pouvoir"};
HHAuto_ToolTips.fr['autoChampsTitle'] = { version: "5.6.24", elementText: "Champions"};
HHAuto_ToolTips.fr['autoChamps'] = { version: "5.6.24", elementText: "Normal", tooltip: "Si activé : combat automatiquement les champions (s'ils sont démarrés manuellement et en filtre uniquement)."};
HHAuto_ToolTips.fr['autoChampsUseEne'] = { version: "5.6.24", elementText: "Achat tickets", tooltip: "Si activé : utiliser l'énergie pour acheter des tickets de champion (30 énergie nécessaire ; ne marchera pas si Quête auto activée)."};
HHAuto_ToolTips.fr['autoChampsFilter'] = { version: "5.6.24", elementText: "Filtre", tooltip: "Permet de filtrer les champions à combattre."};
HHAuto_ToolTips.fr['goToClubChampions'] = { version: "5.25.0", elementText: "Aller au Champion de Club"};
HHAuto_ToolTips.fr['autoStatsSwitch'] = { version: "5.6.24", elementText: "Stats", tooltip: "Achète automatiquement des statistiques sur le marché."};
HHAuto_ToolTips.fr['autoStats'] = { version: "5.6.24", elementText: "Argent à garder", tooltip: "Argent minimum à conserver lors de l'achat automatique de statistiques."};
HHAuto_ToolTips.fr['autoExpW'] = { version: "5.6.24", elementText: "Livres", tooltip: "Si activé : permet d'acheter des livres d'expérience sur le marché tout en respectant les limites d'expérience et d'argent ci-après."};
HHAuto_ToolTips.fr['autoExp'] = { version: "5.6.24", elementText: "Argent à garder", tooltip: "Argent minimum à conserver lors de l'achat automatique de livres d'expérience."};
HHAuto_ToolTips.fr['maxExp'] = { version: "5.6.24", elementText: "Exp. max", tooltip: "Expérience maximum en stock pour l'achat de livres d'expérience."};
HHAuto_ToolTips.fr['autoAffW'] = { version: "5.6.24", elementText: "Cadeaux", tooltip: "Si activé : permet d'acheter des cadeaux d'affection sur le marché tout en respectant les limites d'affection et d'argent ci-après."};
HHAuto_ToolTips.fr['autoAff'] = { version: "5.6.24", elementText: "Argent à garder", tooltip: "Argent minimum à conserver lors de l'achat automatique de cadeaux d'affection."};
HHAuto_ToolTips.fr['maxAff'] = { version: "5.6.24", elementText: "Aff. max", tooltip: "Affection maximum en stock pour l'achat de cadeaux d'affection."};
HHAuto_ToolTips.fr['OpponentListBuilding'] = { version: "5.6.24", elementText: "La liste des adversaires est en construction", tooltip: ""};
HHAuto_ToolTips.fr['OpponentParsed'] = { version: "5.6.24", elementText: "adversaires parcourus", tooltip: ""};
HHAuto_ToolTips.fr['DebugMenu'] = { version: "5.6.24", elementText: "Debug Menu", tooltip: "Options pour le debug"};
HHAuto_ToolTips.fr['DebugOptionsText'] = { version: "5.6.24", elementText: "Les boutons ci-dessous permette de modifier les variables du script, a utiliser avec prudence.", tooltip: ""};
HHAuto_ToolTips.fr['DeleteTempVars'] = { version: "5.6.24", elementText: "Supprimer les variables temporaires", tooltip: "Supprime toutes les variables temporaire du script."};
HHAuto_ToolTips.fr['ResetAllVars'] = { version: "5.6.24", elementText: "Réinitialiser", tooltip: "Remettre toutes les options par default"};
HHAuto_ToolTips.fr['DebugFileText'] = { version: "5.6.24", elementText: "Cliquer sur le boutton ci-dessous pour produire une journal de debug.", tooltip: ""};
HHAuto_ToolTips.fr['OptionCancel'] = { version: "5.6.24", elementText: "Annuler", tooltip: ""};
HHAuto_ToolTips.fr['SeasonMaskRewards'] = { version: "5.6.24", elementText: "Masquer gains", tooltip: "Permet de masquer les gains réclamés de la saison."};
HHAuto_ToolTips.fr['globalTitle'] = { version: "5.6.24", elementText: "Général"};
HHAuto_ToolTips.fr['displayTitle'] = { version: "5.6.24", elementText: "Affichage"};
HHAuto_ToolTips.fr['autoActivitiesTitle'] = { version: "5.6.24", elementText: "Activités"};
HHAuto_ToolTips.fr['autoTrollTitle'] = { version: "5.6.24", elementText: "Combat troll"};
HHAuto_ToolTips.fr['autoSeasonTitle'] = { version: "5.6.24", elementText: "Saison"};
HHAuto_ToolTips.fr['autoLeaguesTitle'] = { version: "5.6.24", elementText: "Ligues"};
HHAuto_ToolTips.fr['PoAMaskRewards'] = { version: "6.15.8", elementText: "Masquer gains", tooltip: "Si activé : masque les récompenses déjà réclamées du chemin d'affection."};
HHAuto_ToolTips.fr['showTooltips'] = { version: "5.6.24", elementText: "Infobulles", tooltip: "Si activé : affiche des bulles d'aide lors du survol des éléments avec la souris."};
HHAuto_ToolTips.fr['autoClubChamp'] = { version: "5.6.24", elementText: "Club", tooltip: "Si activé : combat automatiquement le champion de club si au moins un combat a déjà été effectué."};
HHAuto_ToolTips.fr['autoClubChampMax'] = { version: "5.6.24", elementText: "Max. tickets par session", tooltip: "Nombre maximum de ticket à utiliser sur une même session du champion de club."};
HHAuto_ToolTips.fr['showMarketTools'] = { version: "5.6.24", elementText: "Outils du marché", tooltip: "Si activé : affiche des icones supplémentaires dans le marché pour trier et vendre automatiquement l'équipement."};
HHAuto_ToolTips.fr['useX10Fights'] = { version: "5.6.24", elementText: "Combats x10", tooltip: "<p style='color:red'>/!\\ Dépense des Kobans /!\\<br>("+HHAuto_ToolTips.fr['spendKobans0'].elementText+" doit être activé)</p>Si activé : <br>utilise le bouton x10 si 10 combats sont disponibles (Si Dépense Kobans activée et suffisamment de kobans en banque)."};
HHAuto_ToolTips.fr['useX50Fights'] = { version: "5.6.24", elementText: "Combats x50", tooltip: '<p style="color:red">/!\\ Dépense des Kobans /!\\<br>('+HHAuto_ToolTips.fr['spendKobans0'].elementText+' doit être activé)</p>Si activé : <br>utilise le bouton x50 si 50 combats sont disponibles (Si Dépense Kobans activée et suffisamment de kobans en banque).'};
HHAuto_ToolTips.fr['autoBuy'] = { version: "5.6.24", elementText: "Marché"};
HHAuto_ToolTips.fr['minShardsX50'] = { version: "5.6.24", elementText: "Frags min. x50", tooltip: "Utiliser le bouton x50 si le nombre de fragments restant est supérieur ou égal à..."};
HHAuto_ToolTips.fr['minShardsX10'] = { version: "5.6.24", elementText: "Frags min. x10", tooltip: "Utiliser le bouton x10 si le nombre de fragments restant est supérieur ou égal à..."};
HHAuto_ToolTips.fr['autoMissionKFirst'] = { version: "5.6.24", elementText: "Prioriser Kobans", tooltip: "Si activé : commence par les missions qui rapportent des kobans."};
HHAuto_ToolTips.fr['povpogTitle'] = { version: "5.6.133", elementText: "Voie de la Valeur/Gloire"};
HHAuto_ToolTips.fr['povTitle'] = { version: "5.20.3", elementText: "Voie de la Valeur"};
HHAuto_ToolTips.fr['pogTitle'] = { version: "5.20.3", elementText: "Voie de la Gloire"};
HHAuto_ToolTips.fr['poaTitle'] = { version: "6.15.8", elementText: "Chemin d'affection"};
HHAuto_ToolTips.fr['seasonalEventTitle'] = { version: "5.6.133", elementText: "Evènements saisoniers"};
HHAuto_ToolTips.fr['mousePause'] = {version: "5.6.135", elementText: "Pause souris", tooltip: "Pause le script pour 5 secondes quand des mouvements de la souris sont detecté. Evite le sript d'interrompre les actions manuelles. (en ms, 5000ms=5s)"};
HHAuto_ToolTips.fr['PoVMaskRewards'] = { version: "6.15.8", elementText: "Masquer gains", tooltip: "Permet de masquer les gains réclamés de la Voie de la Valeur."};
HHAuto_ToolTips.fr['PoGMaskRewards'] = { version: "6.15.8", elementText: "Masquer gains", tooltip: "Permet de masquer les gains réclamés de la Voie de la Gloire."};
HHAuto_ToolTips.fr['rewardsToCollectTitle'] = { version: "6.15.8", elementText: "Energies, XP, monnaies à collecter"};
HHAuto_ToolTips.fr['showRewardsRecap'] = { version: "6.15.8", elementText: "Affiche recap de récompenses", tooltip: "Affiche les récompenses cumulés des energies, l'XP et les monnaies"};
HHAuto_ToolTips.fr['SeasonalEventMaskRewards'] = { version: "6.8.4", elementText: "Masquer gains", tooltip: "Permet de masquer les gains réclamés des évènements saisoniers."};
HHAuto_ToolTips.fr['bossBangEvent'] = { version: "5.20.3", elementText: "Activer", tooltip: "Si activé : Effectue les combats boss bang en commençant par l'équipe configuré si après."};
HHAuto_ToolTips.fr['bossBangEventTitle'] = { version: "6.15.8", elementText: "Boss Bang"};
HHAuto_ToolTips.fr['bossBangMinTeam'] = { version: "5.6.137", elementText: "Première équipe", tooltip: "Première équipe à utiliser<br>Si 5, le script commencera par la dernière pour finir par la premiere."};
HHAuto_ToolTips.fr['sultryMysteriesEventTitle'] = { version: "6.15.8", elementText: "Mystère sensuel"};
HHAuto_ToolTips.fr['eventTitle'] = { version: "6.15.8", elementText: "Evènements"};
HHAuto_ToolTips.fr['autodpEventCollect'] = { version: "6.15.8", elementText: "Collecter", tooltip: "Permet de collecter les gains de l'évènement double penetration"};
HHAuto_ToolTips.fr['autodpEventCollectAll'] = { version: "7.1.0", elementText: "Tout collecter", tooltip: "Si activé : Collect Automatiquement toutes les récompense avant la fin de l'évènement double penetration (configuré avec le timer \"Tout collecter\")"};
HHAuto_ToolTips.fr['autoFreeBundlesCollect'] = {version: "5.16.0", elementText: "Collecter offres gratuites", tooltip: "Permet de collecter les offres gratuites."};
HHAuto_ToolTips.fr['dailyGoalsTitle'] = {version: "5.24.0", elementText: "Objectifs journalier"};
HHAuto_ToolTips.fr['autoDailyGoalsCollect'] = {version: "5.24.0", elementText: "Collecter", tooltip: "Permet de collecter les objectifs journaliers si non collectés 2 heures avant la fin du jour HH."};
HHAuto_ToolTips.fr['compactDailyGoals'] = { version: "5.24.0", elementText: "Compacter", tooltip: "Compacter l'affichage des objectifs journalier"};
HHAuto_ToolTips.fr['autoPoVCollect'] = { version: "6.15.8", elementText: "Collecter", tooltip: "Permet de collecter les gains de la Voie de la Valeur."};
HHAuto_ToolTips.fr['autoPoVCollectAll'] = { version: "6.15.8", elementText: "Tout collecter", tooltip: "Si activé : Collect Automatiquement toutes les récompense avant la fin de la Voie de la Valeur (configuré avec le timer \"Tout collecter\")"};
HHAuto_ToolTips.fr['autoSeasonalEventCollect'] = { version: "5.7.0", elementText: "Collecter", tooltip: "Permet de collecter les gains des évènements saisoniers."};
HHAuto_ToolTips.fr['autoSeasonalEventCollectAll'] = { version: "6.15.8", elementText: "Tout collecter", tooltip: "Si activé : Collect Automatiquement toutes les récompense avant la fin de l'évenement saisonier (configuré avec le timer \"Tout collecter\")"};
HHAuto_ToolTips.fr['autoPoGCollect'] = { version: "6.15.8", elementText: "Collecter", tooltip: "Permet de collecter les gains de la Voie de la Gloire."};
HHAuto_ToolTips.fr['autoPoGCollectAll'] = { version: "6.15.8", elementText: "Tout collecter", tooltip: "Si activé : Collect Automatiquement toutes les récompense avant la fin de la Voie de la Gloire (configuré avec le timer \"Tout collecter\")"};
HHAuto_ToolTips.fr['autoPoACollect'] = { version: "6.16.0", elementText: "Collecter", tooltip: "Permet de collecter les gains de l'event chemin d'affection."};
HHAuto_ToolTips.fr['autoPoACollectAll'] = { version: "6.16.0", elementText: "Tout collecter", tooltip: "Si activé : Collect Automatiquement toutes les récompense avant la fin de l'event chemin d'affection (configuré avec le timer \"Tout collecter\")"};
HHAuto_ToolTips.fr['autoPantheon'] = { version: "5.6.24", elementText: "Activer", tooltip: "Si activé : combat automatiquement le Pantheon"};
HHAuto_ToolTips.fr['autoPantheonThreshold'] = { version: "5.6.24", elementText: "Réserve", tooltip: "Vénération minimum à garder<br>Max 10"};
HHAuto_ToolTips.fr['autoTrollMythicByPassParanoia'] = { version: "5.6.24", elementText: "Mythique annule paranoïa", tooltip: "Si activé : autorise le script à ne pas respecter le mode Parano lors d'un événement mythique.<br>Si la prochaine vague est pendant une phase de sommeil le script combattra quand même<br>tant que des combats et des fragments sont disponibles."};
HHAuto_ToolTips.fr['buyMythicCombat'] = { version: "5.6.24", elementText: "Achat comb. pour mythique", tooltip: "<p style='color:red'>/!\\ Dépense des Kobans /!\\<br>("+HHAuto_ToolTips.fr['spendKobans0'].elementText+" doit être activé)</p>Si activé : achète des points de combat (poings) pendant les X dernières heures de l'événement mythique (sans dépasser la limite de la banque de kobans), passera outre la réserve de combats si nécessaire."};
HHAuto_ToolTips.fr['buyMythicCombTimer'] = { version: "5.6.24", elementText: "Heures d'achat comb.", tooltip: "(Nombre entier)<br>X dernières heures de l'événement mythique"};
HHAuto_ToolTips.fr['mythicGirlNext'] = { version: "5.6.24", elementText: "Vague mythique"};
HHAuto_ToolTips.fr['PachinkoFillOrbs'] = {version: "5.6.134", elementText: 'Remplir orbes', tooltip: "Remplir le champs avec toutes les orbes disponibles."};
HHAuto_ToolTips.fr['collectAllTimer'] = {version: "6.15.8", elementText: "Timer Tout collecter (en heure)", tooltip: "Nombre d'heure avant la fin de l'evenement pour collecter toutes les récompenses (Faible temps peu entrainer un echec de collecte), Nécéssite une activation sur chaque évenement (POV, POG, season)"};