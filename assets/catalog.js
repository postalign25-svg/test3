(function(){
/* 자동 생성 파일: work/build_catalog.py. 직접 고치지 말고 카드·themes.json을 고친 뒤 다시 빌드한다. */
const CORE={
 "label": "논문들이 반복해서 묻는 것",
 "text": "현장에서 정신질환의 위험과 경과를 더 일찍, 더 적은 부담으로 가려내려면 어떤 지표가 필요하고, 임상에서 믿고 쓰려면 무엇을 갖춰야 할까요?"
};
const QUESTIONS=[
 {
  "id": "Q1",
  "kind": "core",
  "kind_label": "핵심 질문",
  "short": "일찍, 적은 부담으로, 선별로",
  "q": "심각한 정신질환을 증상이 굳기 전에, 환자에게 적은 부담으로 가려낼 수 있을까요?",
  "a": "대학생 정신증 위험 선별 도구의 한국어판 타당화(2018–2020)에서 걸음 수와 얼굴 영상 심박변이도를 이용한 우울 선별(2025–2026)까지, 이 논문들은 선별 도구를 확진이 아니라 더 정밀한 평가로 이어 주는 첫 관문으로 둡니다.",
  "ids": [
   "kpq16_validation_2018",
   "cape15_validation_2020",
   "dup_scz_kjsr_2020",
   "actigraphy_steps_jad_2025",
   "facial_video_hrv_2026",
   "llm_wearable_screening_scirep_2026"
  ]
 },
 {
  "id": "Q2",
  "kind": "shared",
  "kind_label": "함께한 질문",
  "short": "생물지표와 맥락",
  "q": "혈액 속 지표는 우울증 치료 결과를 얼마나 예측하고, 그 예측은 사람의 삶의 맥락에 따라 어떻게 달라질까요?",
  "a": "MAKE BETTER 우울증 코호트에서 연구실이 함께 물어 온 질문입니다. 인터루킨, BDNF, 세로토닌, 그렐린 같은 혈청 지표와 아동기 학대, 사회적 지지, 고용, 성격 같은 맥락이 함께 치료 반응을 설명하는지 살폈습니다.",
  "ids": [
   "childhood_abuse_il1b_suicide_2022",
   "tnf_functional_status_bjpo_2025",
   "il1b_neuroticism_scirep_2026",
   "ghrelin_social_support_pne_2025",
   "employment_biomarkers_fp_2025"
  ]
 },
 {
  "id": "Q3",
  "kind": "shared",
  "kind_label": "함께한 질문",
  "short": "실제 진료실의 근거",
  "q": "통제된 임상시험이 아니라 실제 진료실에서, 무엇이 우울증의 관해와 재발을 예측할까요?",
  "a": "실제 외래에서 단계적으로 약물치료를 받는 환자를 오래 따라간 자연주의적 전향 연구들입니다. 임상시험의 결론을 실제 진료에서 확인하고 넓히는 것을 목표로 합니다.",
  "ids": [
   "stepwise_outcomes_jad_2020",
   "relapse_predictors_jad_2021",
   "remission_predictors_cpn_2021",
   "multimodal_serum_bbi_2022",
   "actigraphy_steps_jad_2025"
  ]
 },
 {
  "id": "Q4",
  "kind": "core",
  "kind_label": "핵심 질문",
  "short": "취약한 사람, 몸과 사회",
  "q": "중증정신질환자와 사회적 취약집단이 몸과 사회에서 겪는 추가 부담은 무엇이고, 그중 고칠 수 있는 것은 무엇일까요?",
  "a": "항정신병약물을 복용하는 환자의 골밀도와 비만, 건강 지식, 우울증 환자가 겪는 차별, 코로나19 시기의 자살과 병원 이용을 살폈습니다. 정신질환을 의학적이면서 사회적인 문제로 보고, 교육과 지역사회 서비스, 정책으로 바꿀 수 있는 요인을 찾습니다.",
  "ids": [
   "bmd_antipsychotics_humpsy_2018",
   "discrimination_depression_jad_2021",
   "physical_health_literacy_2019",
   "social_psych_suicide_jkma_2019",
   "depression_covid_general_2021",
   "covid_stress_schizophrenia_2022",
   "covid_hospital_visits_scz_2022",
   "suicide_trends_covid_2022"
  ]
 },
 {
  "id": "Q5",
  "kind": "core",
  "kind_label": "핵심 질문",
  "short": "믿을 수 있는 AI",
  "q": "자기보고에 기대지 않는 디지털 신호로 우울을 살필 때, 임상에서 믿고 쓰려면 모델은 무엇을 갖춰야 할까요?",
  "a": "움직임, 심박, 목소리, 일상 언어에서 우울의 신호를 읽는 논문들은 성능과 함께 설명가능성, 신뢰도 표시, 다른 데이터에서의 검증, 개인정보를 지키는 기기 내 처리, 임상가의 판단을 돕는 역할을 반복해서 강조합니다.",
  "ids": [
   "ml_review_mental_dx_2023",
   "acma_depression_ieeeaccess_2024",
   "actigraphy_steps_jad_2025",
   "depressllm_jbhi_2026",
   "daily_language_ema_pi_2026",
   "llm_wearable_screening_scirep_2026",
   "onprem_llm_ijmi_2026"
  ]
 }
];
const PHASES=[
 {
  "id": "P1",
  "label_ko": "조기 정신증·중증정신질환 신체건강, 지역사회 정신보건·중독",
  "years": "2016-2019",
  "ids": [
   "bmd_antipsychotics_humpsy_2018",
   "hazardous_drinking_workers_jkna_2017",
   "iron_negative_symptoms_2018",
   "kpq16_validation_2018",
   "physical_health_literacy_2019",
   "physical_health_monitoring_kjsr_2019",
   "social_psych_suicide_jkma_2019",
   "statins_inflammation_2019",
   "vienna_omega3_fa_2016"
  ]
 },
 {
  "id": "P2",
  "label_ko": "코로나19 사회정신의학(연구실)과 자문조정·정신종양(전민 제1저자)",
  "years": "2020-2022",
  "ids": [
   "adolescent_dep_anx_covid_2022",
   "breast_cancer_dep_mortality_tcr_2020",
   "burnout_mhworkers_jksbtp_2021",
   "cape15_validation_2020",
   "covid_distress_regions_2020",
   "covid_hospital_visits_scz_2022",
   "covid_media_anxiety_jkms_2020",
   "covid_network_stress_2021",
   "covid_news_alerts_emotion_2021",
   "covid_stress_schizophrenia_2022",
   "covid_symptoms_distress_2021",
   "delirium_caregivers_2022",
   "depression_covid_general_2021",
   "ds2_kr_jkna_2022",
   "dup_scz_kjsr_2020",
   "food_cravings_fep_2020",
   "gratitude_nurses_covid_2021",
   "gwangju_suicidality_checklist_2022",
   "mask_wearing_inpatients_2021",
   "mindlink_eip_2021",
   "mindlink_kjsr_2022",
   "oseltamivir_mania_case_2021",
   "sat_moderna_case_2022",
   "suicide_attempt_correlates_jksbtp_2020",
   "suicide_trends_covid_2022"
  ]
 },
 {
  "id": "P3",
  "label_ko": "우울증 치료 코호트(MAKE BETTER): 임상 예측 → 바이오마커 주효과·상호작용",
  "years": "2020-2022, 2025-2026",
  "ids": [
   "stepwise_outcomes_jad_2020",
   "disc12k_standardization_2020",
   "discrimination_depression_jad_2021",
   "remission_predictors_cpn_2021",
   "relapse_predictors_jad_2021",
   "remission_by_step_pi_2022",
   "multimodal_serum_bbi_2022",
   "childhood_abuse_il1b_suicide_2022",
   "childhood_abuse_social_support_2022",
   "il1b_bdnf_euroneuro_2025",
   "il1b_il6_hscrp_jad_2025",
   "mdd_subtypes_biomarkers_jcp_2025",
   "mdd_subtypes_outcomes_cpn_2025",
   "multibiomarker_relapse_pnpbp_2025",
   "serotonin_bdnf_psychres_2025",
   "sex_specific_biomarkers_cpn_2025",
   "tnf_functional_status_bjpo_2025",
   "tnf_serotonin_pnpbp_2025",
   "employment_biomarkers_fp_2025",
   "ghrelin_social_support_pne_2025",
   "il6_ghrelin_ijnp_2026",
   "il1b_neuroticism_scirep_2026",
   "personality_serotonin_pne_2026",
   "childhood_abuse_bdnf_ecap_2026",
   "folate_social_support_2026",
   "inflammation_precision_med_dep"
  ]
 },
 {
  "id": "P4",
  "label_ko": "디지털 표현형·AI·LLM 우울 탐지 (+P4b 조현병 언어 하위 흐름)",
  "years": "2023-2026",
  "ids": [
   "ml_review_mental_dx_2023",
   "multimodal_transformer_iwfcv_2023",
   "actigraphy_classification_bibm_2023",
   "acma_depression_ieeeaccess_2024",
   "multimodal_actigraphy_hrv_bibm_2024",
   "llm_counseling_chatbots_bibm_2024",
   "actigraphy_steps_jad_2025",
   "lightweight_crossmodal_cbm_2025",
   "mdd_genomics_wearables_bibm_2025",
   "psg_sleep_ml_2025",
   "facial_video_hrv_2026",
   "depressllm_jbhi_2026",
   "daily_language_ema_pi_2026",
   "llm_wearable_screening_scirep_2026",
   "llm_wearable_harmonization_tce_2026",
   "onprem_llm_ijmi_2026",
   "v3gemma_scirep_2026",
   "fbsiam_eeg_sensors_2026",
   "lexical_profiles_scz_2026",
   "perplexity_scz_2026",
   "contextual_coherence_scz_2026"
  ]
 },
 {
  "id": "P_parallel",
  "label_ko": "병행 줄기(조기개입·자살정책·신체질환/외상/노년 지속)",
  "years": "2023-2026",
  "ids": [
   "5httlpr_crc_lymphocytes_2026",
   "centenarians_mood_2023",
   "circadian_lymphocytes_crc_2024",
   "dietary_habits_obesity_scz_2023",
   "elderly_living_alone_jksbtp_2024",
   "group_mct_cbt_2023",
   "hrv_ptsd_jpr_2025",
   "internet_addiction_nssi_2023",
   "smartphone_app_scz_2025",
   "suicide_policy_its_jkna_2024",
   "suicide_target_timeseries_jkms_2025",
   "vret_ptsd_cases_2023",
   "bpsd_iadl_mci_jksbtp"
  ]
 }
];
const TOPICS=[
 {
  "id": "T1",
  "name_ko": "조기 정신증·중증정신질환의 신체건강·지역사회 조기개입",
  "ids": [
   "vienna_omega3_fa_2016",
   "kpq16_validation_2018",
   "iron_negative_symptoms_2018",
   "bmd_antipsychotics_humpsy_2018",
   "physical_health_literacy_2019",
   "physical_health_monitoring_kjsr_2019",
   "statins_inflammation_2019",
   "cape15_validation_2020",
   "food_cravings_fep_2020",
   "dup_scz_kjsr_2020",
   "mindlink_eip_2021",
   "mindlink_kjsr_2022",
   "group_mct_cbt_2023",
   "dietary_habits_obesity_scz_2023",
   "smartphone_app_scz_2025"
  ]
 },
 {
  "id": "T2",
  "name_ko": "코로나19 사회정신의학",
  "ids": [
   "covid_distress_regions_2020",
   "covid_media_anxiety_jkms_2020",
   "covid_network_stress_2021",
   "covid_news_alerts_emotion_2021",
   "depression_covid_general_2021",
   "gratitude_nurses_covid_2021",
   "covid_symptoms_distress_2021",
   "mask_wearing_inpatients_2021",
   "adolescent_dep_anx_covid_2022",
   "covid_stress_schizophrenia_2022",
   "covid_hospital_visits_scz_2022"
  ]
 },
 {
  "id": "T3",
  "name_ko": "자살·중독·지역사회 정신보건 정책",
  "ids": [
   "hazardous_drinking_workers_jkna_2017",
   "social_psych_suicide_jkma_2019",
   "suicide_attempt_correlates_jksbtp_2020",
   "burnout_mhworkers_jksbtp_2021",
   "gwangju_suicidality_checklist_2022",
   "suicide_trends_covid_2022",
   "internet_addiction_nssi_2023",
   "suicide_policy_its_jkna_2024",
   "suicide_target_timeseries_jkms_2025"
  ]
 },
 {
  "id": "T4",
  "name_ko": "우울증 단계적 약물치료 코호트(MAKE BETTER)와 혈청 바이오마커×사회심리 상호작용",
  "ids": [
   "stepwise_outcomes_jad_2020",
   "disc12k_standardization_2020",
   "discrimination_depression_jad_2021",
   "remission_predictors_cpn_2021",
   "relapse_predictors_jad_2021",
   "remission_by_step_pi_2022",
   "multimodal_serum_bbi_2022",
   "childhood_abuse_il1b_suicide_2022",
   "childhood_abuse_social_support_2022",
   "il1b_bdnf_euroneuro_2025",
   "il1b_il6_hscrp_jad_2025",
   "mdd_subtypes_biomarkers_jcp_2025",
   "mdd_subtypes_outcomes_cpn_2025",
   "multibiomarker_relapse_pnpbp_2025",
   "serotonin_bdnf_psychres_2025",
   "sex_specific_biomarkers_cpn_2025",
   "tnf_functional_status_bjpo_2025",
   "tnf_serotonin_pnpbp_2025",
   "employment_biomarkers_fp_2025",
   "ghrelin_social_support_pne_2025",
   "il6_ghrelin_ijnp_2026",
   "il1b_neuroticism_scirep_2026",
   "personality_serotonin_pne_2026",
   "childhood_abuse_bdnf_ecap_2026",
   "folate_social_support_2026",
   "inflammation_precision_med_dep"
  ]
 },
 {
  "id": "T5",
  "name_ko": "디지털 표현형·AI·LLM 기반 우울 탐지",
  "ids": [
   "ml_review_mental_dx_2023",
   "multimodal_transformer_iwfcv_2023",
   "actigraphy_classification_bibm_2023",
   "acma_depression_ieeeaccess_2024",
   "multimodal_actigraphy_hrv_bibm_2024",
   "llm_counseling_chatbots_bibm_2024",
   "actigraphy_steps_jad_2025",
   "lightweight_crossmodal_cbm_2025",
   "mdd_genomics_wearables_bibm_2025",
   "psg_sleep_ml_2025",
   "facial_video_hrv_2026",
   "depressllm_jbhi_2026",
   "daily_language_ema_pi_2026",
   "llm_wearable_screening_scirep_2026",
   "llm_wearable_harmonization_tce_2026",
   "onprem_llm_ijmi_2026",
   "v3gemma_scirep_2026",
   "fbsiam_eeg_sensors_2026"
  ]
 },
 {
  "id": "T6",
  "name_ko": "조현병 언어의 계산적 분석(언어모델)",
  "ids": [
   "lexical_profiles_scz_2026",
   "perplexity_scz_2026",
   "contextual_coherence_scz_2026"
  ]
 },
 {
  "id": "T7",
  "name_ko": "신체질환·외상·노년의 정신건강(정신종양·자문조정·PTSD·노인·증례)",
  "ids": [
   "breast_cancer_dep_mortality_tcr_2020",
   "oseltamivir_mania_case_2021",
   "ds2_kr_jkna_2022",
   "delirium_caregivers_2022",
   "sat_moderna_case_2022",
   "centenarians_mood_2023",
   "vret_ptsd_cases_2023",
   "circadian_lymphocytes_crc_2024",
   "elderly_living_alone_jksbtp_2024",
   "hrv_ptsd_jpr_2025",
   "5httlpr_crc_lymphocytes_2026",
   "bpsd_iadl_mci_jksbtp"
  ]
 }
];
const METHODS=[
 {
  "id": "ml",
  "name_ko": "머신러닝과 언어모델"
 },
 {
  "id": "bio",
  "name_ko": "혈청과 생물 지표"
 },
 {
  "id": "stat",
  "name_ko": "회귀와 상호작용 분석"
 },
 {
  "id": "psy",
  "name_ko": "척도 개발과 타당화"
 },
 {
  "id": "survey",
  "name_ko": "설문 조사"
 },
 {
  "id": "ts",
  "name_ko": "시계열 분석"
 },
 {
  "id": "trial",
  "name_ko": "중재와 프로그램"
 },
 {
  "id": "case",
  "name_ko": "증례와 종설"
 }
];
const PAPERS=[
 {
  "id": "fbsiam_eeg_sensors_2026",
  "year": 2026,
  "title": "A frequency-band Siamese network with dual functional connectivity metrics for subject-independent EEG depression detection",
  "title_ko": "EEG 우울 탐지 주파수대역 샴 네트워크",
  "venue": "IEEE Sensors J",
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "childhood_abuse_bdnf_ecap_2026",
  "year": 2026,
  "title": "Childhood abuse moderates the impact of serum BDNF on short- and long-term antidepressant response",
  "title_ko": "아동기 학대·혈청 BDNF와 항우울제 관해",
  "venue": "Eur Child Adolesc Psychiatry",
  "doi": "10.1007/s00787-025-02944-x",
  "pmid": "41396295",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "35(4)",
  "pages": "1299-1307",
  "question": "아동기 학대 경험과 기저 혈청 BDNF가 우울장애 환자의 12주·12개월 관해를 예측하며 두 요인이 상호작용하는가?",
  "motivation": null,
  "conclusion_ko": "아동기 학대와 낮은 혈청 BDNF가 함께 있는 환자는 단기·장기 관해율이 낮아, 개인화된 우울증 치료에서 심리사회적·생물학적 요인을 통합해야 함을 보여준다. 아동기 외상 선별과 BDNF 평가를 결합하면 고위험 환자 식별에 도움이 될 수 있다.",
  "key_results": [
   {
    "label": "기저 평가 환자 수",
    "value": "1,086",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "낮은 sBDNF → 12개월 관해 불량 p",
    "value": "0.045",
    "ci": null,
    "comparator": {
     "label": "12주 p",
     "value": 0.72
    },
    "page": null
   },
   {
    "label": "아동기 학대 단독 효과 (보정)",
    "value": "all p > 0.05",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "학대 + 낮은 sBDNF 동반 시 관해율 저하 p (12주 / 12개월)",
    "value": "0.018 / 0.009",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "자연주의적 단계적 항우울제 치료 연구에 참여한 우울장애 환자",
   "n": "1,086명",
   "period": null
  },
  "design": "prospective naturalistic cohort",
  "methods": [
   "Nemesis Childhood Trauma Interview",
   "serum BDNF",
   "HAMD ≤7 remission",
   "logistic regression with interaction terms, covariate-adjusted"
  ],
  "validation": [
   "covariate-adjusted models",
   "12-week and 12-month outcomes"
  ],
  "cohort_or_program": "MAKE BETTER (inferred: same 1,086-patient naturalistic stepwise antidepressant cohort at Chonnam; program not named in abstract)",
  "source_basis": "abstract"
 },
 {
  "id": "facial_video_hrv_2026",
  "year": 2026,
  "title": "Contactless depression screening via facial video-derived heart rate variability",
  "title_ko": "얼굴 영상 기반 심박변이도로 비접촉 우울 선별",
  "venue": "Transl Psychiatry",
  "doi": "10.1038/s41398-026-03831-y",
  "pmid": "41605913",
  "type": "original",
  "tier": "A",
  "role": "co-first",
  "led": true,
  "questions": [
   "Q1"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 4,
  "methods_tag": [
   "ml",
   "stat"
  ],
  "authors": [
   "Jhon M",
   "Kim J-W",
   "Lee K",
   "Kim D",
   "Park S-H",
   "Kim C",
   "Lim B",
   "Kim S-Y",
   "Kim S-W",
   "Kim J-M",
   "Shin I-S",
   "Choi Y"
  ],
  "volume": "16",
  "pages": "49",
  "question": "얼굴 영상에서 비접촉으로 추출한 심박변이도(HRV)와 간단한 인구학적 정보로 우울 증상(PHQ-9 ≥5)이 있는 사람을 구별할 수 있는가?",
  "motivation": "우울증은 흔히 진단되지 않아 객관적이고 확장 가능한 선별 도구가 필요하며, HRV는 우울의 생리적 지표로 알려져 있다. 그러나 기존 HRV 기반 탐지 연구는 소표본·통제 환경이거나 웨어러블 신호의 잡음 문제로 성능이 제한되어, 대규모 자연주의 환경에서의 비접촉 측정 검증이 필요했다.",
  "conclusion_ko": "얼굴 영상 기반 비접촉 HRV 측정과 기본 인구학적 정보를 결합한 예비 우울 선별이 가능함을 보였다. 흡연·성별·동반질환이 가장 강한 예측인자였지만 HRV 추가가 분류 성능을 다소 개선했고, MCC 최적화 스태킹 모델은 폴드 간 일관된 균형 잡힌 판별을 보였다.",
  "key_results": [
   {
    "label": "스태킹 모델 최고 판별 AUROC",
    "value": 0.64,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "스태킹 모델 AUPRC",
    "value": 0.45,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "스태킹 모델 MCC",
    "value": 0.21,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "평균 심박수 1bpm 증가당 우울 증상 보정 OR",
    "value": 1.023,
    "ci": "1.010-1.036",
    "comparator": null,
    "page": 4
   },
   {
    "label": "SDNN 보정 OR",
    "value": 0.987,
    "ci": "0.977-0.997",
    "comparator": null,
    "page": 4
   },
   {
    "label": "LnLF 보정 OR",
    "value": 0.748,
    "ci": "0.630-0.888",
    "comparator": null,
    "page": 4
   },
   {
    "label": "평균 심박수(우울군 vs 비우울군, 중앙값 bpm)",
    "value": 75.4,
    "ci": null,
    "comparator": {
     "label": "비우울군",
     "value": 73.9
    },
    "page": 4
   },
   {
    "label": "비만군 하위집단 MCC",
    "value": 0.65,
    "ci": null,
    "comparator": {
     "label": "현재 흡연자 MCC",
     "value": 0.51
    },
    "page": 6
   },
   {
    "label": "비임상 하위집단(883명) 5겹 CV 평균 AUROC",
    "value": 0.63,
    "ci": null,
    "comparator": {
     "label": "원래 표본",
     "value": 0.58
    },
    "page": 7
   },
   {
    "label": "정규화 선형 분류기 민감도 분석 AUROC",
    "value": 0.6,
    "ci": null,
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": [
   "얼굴 영상 HRV는 조명 변화·참여자 움직임 등 환경적 인공물에 더 취약하다.",
   "우울 증상 분류가 자기보고 PHQ-9에 주로 의존해 임상 진단과 일치하지 않을 수 있다.",
   "표본이 주로 한국 임상 현장에서 모집되어 일반화가 제한된다.",
   "전체 예측 성능은 중등도 수준에 그친다."
  ],
  "data": {
   "source": "전남대병원·화순전남대병원 진단횡단적 다중모달 모 연구의 정신과 진단군 및 비진단군; 웹캠 얼굴 영상 기반 HRV(rPPG) 측정",
   "n": "선별 2,021명 중 1,453명 분석 (우울 증상군 559명, 비우울군 894명)",
   "period": "2021-08-02 ~ 2023-10-01"
  },
  "design": "cross-sectional; machine learning classification (stacking ensemble)",
  "methods": [
   "facial video-based remote photoplethysmography (CHROM algorithm, Butterworth bandpass 0.75-2.5 Hz)",
   "time- and frequency-domain HRV metrics",
   "PHQ-9 >= 5 binary outcome; HADS-D descriptive",
   "Mann-Whitney U and chi-square tests",
   "multivariable logistic regression adjusted for age, sex, smoking, medical comorbidity, BMI",
   "stacking ensemble (LR, GB, XGBoost, SVM base learners; SVM meta-learner)",
   "Optuna hyperparameter tuning (TPE, MCC objective)",
   "stratified 5-fold cross-validation",
   "SHAP (KernelExplainer)",
   "subgroup, threshold-sensitivity and non-clinical subset analyses",
   "regularized linear classifier sensitivity analysis"
  ],
  "validation": [
   "stratified 5-fold CV",
   "subgroup analysis",
   "threshold sensitivity",
   "non-clinical subset reanalysis"
  ],
  "cohort_or_program": "Transdiagnostic multimodal parent study at CNUH and CNUHH (IRB CNUH-2021-243, CNUH-2022-216, CNUHH-2021-117, CNUHH-2022-126); Korean patent 10-2150635 facial video HRV software",
  "source_basis": "full_text",
  "slug": "facial-video-hrv",
  "short": "얼굴 영상 심박변이도로 우울 선별",
  "post_title": "카메라에 비친 얼굴에서 심장 박동의 리듬을 읽어, 우울 증상을 가려낼 수 있을까요?",
  "sum": "전남대병원과 화순전남대병원에서 1,453명의 얼굴 영상으로 심박변이도를 비접촉으로 재고, 간단한 인구학 정보와 함께 우울 증상(PHQ-9 5점 이상)이 있는 사람을 가려내는 모델을 만들었습니다. 심박변이도만으로는 신호가 약했지만 인구학 정보에 더하면 분류가 조금 나아졌고, 스태킹 모델의 가장 좋은 판별은 AUROC 0.64였습니다.",
  "concl": "얼굴 영상으로 잰 비접촉 심박변이도와 기본 인구학 정보를 합치면 예비 우울 선별이 가능함을 보였습니다. 흡연, 성별, 동반 질환이 가장 강한 예측 요인이었지만 심박변이도를 더하면 분류 성능이 조금 나아졌고, MCC에 맞춰 최적화한 스태킹 모델은 검증 폴드 전반에서 일관되고 균형 잡힌 판별을 보였습니다.",
  "val": "0.64",
  "unit": "AUROC",
  "cap": "얼굴 영상 심박변이도와 인구학 정보를 합친 스태킹 모델의 가장 좋은 판별(5겹 교차검증, 1,453명)",
  "g": {
   "min": 0.5,
   "max": 1,
   "ticks": [
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1
   ],
   "pts": [
    {
     "v": 0.64,
     "label": "스태킹 모델의 가장 좋은 판별 AUROC 0.64"
    }
   ]
  },
  "need": {
   "scene": "학교나 직장의 정신건강 점검, 지역사회 검진 자리에서 수백 명을 만나야 합니다. 우울 증상이 있어도 낙인이 두렵거나 상담하는 사람을 믿지 못해 먼저 말하지 않는 사람이 많습니다. 한 사람에게 쓸 수 있는 시간은 몇 분뿐입니다.",
   "ask": "몸이 내는 신호로 첫 단서를 얻는다면, 무엇부터 써 보시겠어요?",
   "opts": [
    "손목 웨어러블을 나눠 주고 며칠 동안 심박을 잰다",
    "웹캠으로 얼굴 영상을 찍어 심박의 리듬을 읽는다",
    "설문지를 더 꼼꼼하게 만든다"
   ],
   "why": "논문은 우울증이 흔한데도 진단되지 않는 경우가 많고, 낮은 건강 정보 이해력, 낙인, 치료 관계에 대한 불신이 도움 요청을 막는다고 짚습니다. 심박변이도는 우울과 관련된 생리 지표로 알려져 있지만, 이전 연구는 표본이 작거나 통제된 환경이었고, 웨어러블 신호는 움직임 같은 실생활 잡음에 흔들렸습니다(웨어러블 심박변이도로 중등도 우울 증상을 가린 한 연구의 AUROC는 0.56). 그래서 이 연구는 카메라만으로 심박변이도를 재는 비접촉 방법을 1,400명이 넘는 실제 병원 자료로 확인했습니다."
  },
  "q": "Q1"
 },
 {
  "id": "daily_language_ema_pi_2026",
  "year": 2026,
  "title": "Daily Language as an Objective Indicator of Depressive Affective States: A Two-Week Ecological Momentary Assessment Study in Emotional Labor Workers",
  "title_ko": "감정노동자 일상 언어로 본 우울 정서(2주 EMA)",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2026.0035",
  "pmid": "42732773",
  "type": "original",
  "tier": "A",
  "role": "co-corresponding",
  "led": true,
  "questions": [
   "Q5"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Kim HH",
   "Kim SJ",
   "Kim D-K",
   "Jeon E-K",
   "Choi Y",
   "Kim J-M",
   "Kim S-W",
   "Lee S",
   "Jhon M",
   "Kim J-W"
  ],
  "volume": "23",
  "pages": "1096-1106",
  "question": "EMA로 2주간 수집한 일상 자연어의 종단 분석이 우울 정서 상태의 지표가 될 수 있으며, 자기보고 측정보다 시간적 민감도가 나은가?",
  "motivation": "감정노동자는 우울 위험이 높지만 기존 연구는 회상 편향이 있고 일상 변동을 놓치는 횡단적 자기보고 설문에 주로 의존했다. LLM 기반 연구도 단일 시점이나 소셜미디어·집계 일기 자료에 머물러, 실제 환경의 고빈도 시계열 언어 자료 분석이 필요했다.",
  "conclusion_ko": "일상 자연어는 우울 증상과 관련된 의미 있는 종단적 정서 변화를 포착하며, 실제 직업 환경에서 부담이 적고 확장 가능한 우울 정서 지표로서 기존 자기보고를 보완할 수 있다.",
  "key_results": [
   {
    "label": "LSTM 아침 감정점수 누적 최고 AUC (Day 10)",
    "value": "75.1%",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Day 10 macro F1",
    "value": 0.683,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "GPT 예측 신경증 OR (우울)",
    "value": 1.193,
    "ci": null,
    "comparator": {
     "label": "self-reported neuroticism OR",
     "value": 1.119
    },
    "page": null
   },
   {
    "label": "자기보고 신경증 OR",
    "value": 1.119,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "GPT 감정점수 혼합효과: 정상 vs 경도 (전체 시점)",
    "value": "β=-0.516, p<0.001",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "GPT 감정점수 혼합효과: 경도 vs 중등도-중증 (전체 시점)",
    "value": "β=-0.736, p<0.001",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "아침 감정점수 혼합효과",
    "value": "Normal vs Mild β=-0.551 (p=0.005); Mild vs Mod-Severe β=-0.933 (p<0.001)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "자기보고 아침 기분 혼합효과",
    "value": "Normal vs Mild β=-0.117 (p=0.494); Mild vs Mod-Severe β=-0.133 (p=0.5080)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "일일 응답 참여자 수 평균: 자기보고 기분 vs 음성",
    "value": "256 vs 289",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "GPT 감정점수–저녁 기분 상관",
    "value": "r=0.535",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "GPT 예측 신경증–BFI 상관(보정 후)",
    "value": "r=0.264",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "여성 비율",
    "value": "73.2% (n=293)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "평균 연령",
    "value": "42.5세 (SD 8.4)",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "비교적 단순한 프롬프트 전략을 사용했고 LLM 유래 감정·신경증 점수의 표준 심리측정 도구 대비 검증이 더 필요함",
   "고스트레스 직군 대상이라 다른 집단으로 일반화가 제한될 수 있음",
   "익명화에도 자연어 자료에 본인이나 지인이 알아볼 수 있는 맥락 정보가 남을 수 있음",
   "언어·문화·모델 맥락 전반에서 견고성 평가가 더 필요함",
   "LLM 신호가 정서 자체보다 언어·문화 패턴을 반영할 수 있고 환각 가능성을 배제할 수 없음"
  ],
  "data": {
   "source": "콜센터 3곳과 공공기관 1곳 감정노동자, 하루 3회 음성 EMA(앱) 2주",
   "n": "400명, 12,418건 (등록 480명, 14,733건)",
   "period": "2023-08-03 ~ 2024-01-25"
  },
  "design": "prospective two-week ecological momentary assessment study",
  "methods": [
   "voice EMA 3x/day (08:00, 13:00, 18:00)",
   "Vrew transcription",
   "LIWC with KNU Korean Sentiment Lexicon",
   "GPT-4o-mini, Qwen 2.5 (32B), Mistral Small (24B) zero-shot sentiment and neuroticism scoring",
   "PHQ-9",
   "BFI-K-10",
   "logistic regression",
   "linear mixed-effects models",
   "LSTM with cumulative monitoring days"
  ],
  "validation": [
   "80/20 stratified train-test split"
  ],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "depressllm_jbhi_2026",
  "year": 2026,
  "title": "DepressLLM: Interpretable Domain-Adapted Language Model for Depression Detection from Real-World Narratives",
  "title_ko": "자서전적 서사 기반 우울 탐지 LLM, DepressLLM",
  "venue": "IEEE J Biomed Health Inform",
  "doi": "10.1109/JBHI.2026.3711090",
  "pmid": "42424224",
  "type": "original",
  "tier": "A",
  "role": "co-corresponding",
  "led": true,
  "questions": [
   "Q5"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 6,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Moon S",
   "Lee A",
   "Kim JE",
   "Kang H-J",
   "Shin I-S",
   "Kim S-W",
   "Kim J-M",
   "Jhon M",
   "Kim J-W"
  ],
  "volume": null,
  "pages": null,
  "question": "실제 환자의 행복·고통 자서전적 서사로 미세조정한 LLM이 PHQ-9 기반 우울을 해석 가능하고 신뢰도 추정이 보정된 방식으로 탐지할 수 있는가?",
  "motivation": "LLM 기반 우울 예측 연구는 임상적으로 검증된 대규모 데이터가 부족하고, 소셜미디어에서 추론한 라벨에 의존해 잡음이 크다. 또한 LLM 우울 예측의 신뢰도 평가는 충분히 탐구되지 않아 신뢰도 인식형 우울 선별 시스템이 필요하다.",
  "conclusion_ko": "해석 가능한 AI인 DepressLLM은 자서전적 서사로부터 보정된 신뢰도와 설명을 함께 제공하며 우울의 조기 진단을 가능하게 할 수 있고, 정신의학에서 의료 AI의 잠재력을 보여준다.",
  "key_results": [
   {
    "label": "TREND-P 테스트 AUC, DepressLLM (GPT-4.1), PHQ-9 cutoff 5",
    "value": 0.789,
    "ci": "±0.003 (SD)",
    "comparator": {
     "label": "GPT-4.1 zero-shot score-based",
     "value": 0.709
    },
    "page": 5
   },
   {
    "label": "TREND-P 테스트 MCC, DepressLLM (GPT-4.1), cutoff 5",
    "value": 0.424,
    "ci": "±0.017 (SD)",
    "comparator": {
     "label": "GPT-4.1 zero-shot",
     "value": 0.32
    },
    "page": 5
   },
   {
    "label": "신뢰도 ≥0.95 표본에서 AUC",
    "value": 0.904,
    "ci": null,
    "comparator": {
     "label": "전체 표본",
     "value": 0.789
    },
    "page": 1
   },
   {
    "label": "신뢰도 임계값별 정확도 (0 / 0.5 / 0.95)",
    "value": "72.8% / 80.0% (67.7% 유지) / 92.9% (11.5% 유지)",
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "정신과 전문의 비교 MCC (n=200), cutoff 5",
    "value": 0.492,
    "ci": "±0.032 (SD)",
    "comparator": {
     "label": "Psychiatrist 1 / 2",
     "value": "0.355 / 0.270"
    },
    "page": 5
   },
   {
    "label": "정신과 전문의 비교 MCC (n=200), cutoff 10",
    "value": 0.455,
    "ci": "±0.026 (SD)",
    "comparator": {
     "label": "Psychiatrist 1 / 2",
     "value": "0.402 / 0.220"
    },
    "page": 5
   },
   {
    "label": "외부 VEMOD AUC (cutoff 5)",
    "value": 0.766,
    "ci": "±0.005 (SD)",
    "comparator": {
     "label": "GPT-4.1",
     "value": 0.732
    },
    "page": 6
   },
   {
    "label": "외부 DAIC-WOZ AUC (cutoff 5)",
    "value": 0.92,
    "ci": "±0.005 (SD)",
    "comparator": {
     "label": "GPT-4.1",
     "value": 0.894
    },
    "page": 6
   },
   {
    "label": "외부 E-DAIC AUC (cutoff 5)",
    "value": 0.894,
    "ci": "±0.016 (SD)",
    "comparator": {
     "label": "GPT-4.1",
     "value": 0.904
    },
    "page": 6
   },
   {
    "label": "외부 CMDC AUC",
    "value": 0.9988,
    "ci": "±0.0004 (SD)",
    "comparator": {
     "label": "GPT-4.1",
     "value": 0.9919
    },
    "page": 6
   },
   {
    "label": "외부 신뢰도 ≥0.95 AUC (VEMOD / DAIC-WOZ)",
    "value": "0.872 / 0.995",
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "고신뢰 오분류 16건 중 두 전문의 모두 모델 판단과 일치",
    "value": "12/16",
    "ci": null,
    "comparator": null,
    "page": 9
   },
   {
    "label": "구문 감성 vs 예측 확률 상관 (Spearman)",
    "value": -0.814,
    "ci": null,
    "comparator": null,
    "page": 10
   },
   {
    "label": "MentaLLaMA 분류 실패",
    "value": "303/740",
    "ci": null,
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": [
   "회고적 행복·고통 서사는 단기간 내 비슷한 응답이 나올 수 있어 시간적 민감도가 부족할 수 있다.",
   "PHQ-9 라벨은 자기보고로, 정서 인식 부족이나 사회적 바람직성 편향으로 실제 상태를 반영하지 못할 수 있다.",
   "모호한 사례에 높은 신뢰도를 부여해 불확실성 인식에 한계가 있다.",
   "OpenAI 모델은 API 기반이라 배포 유연성이 제한되고 개인정보 우려가 있다.",
   "전문의 검토에서 시간적 맥락 처리 미흡, 보호요인 간과, 정보가 적은 서사에서 불확실성 미표현이 지적되었다."
  ],
  "data": {
   "source": "TREND-P(전남대병원·화순전남대병원 자서전적 기억 음성 녹취 전사, 학습 80%/검증 20%) + VEMOD(고스트레스 직업군 EMA 음성, 외부) + 공개 DAIC-WOZ, E-DAIC, CMDC",
   "n": "TREND-P 3,699건 (테스트 740명); VEMOD 265명; DAIC-WOZ 189; E-DAIC 86; CMDC 78",
   "period": "TREND-P 2021-08-02 ~ 2025-01-20; VEMOD 2023-08-03 ~ 2024-01-25"
  },
  "design": "model development and benchmark (internal held-out test + external datasets) with psychiatrist review",
  "methods": [
   "fine-tuning GPT-4.1/GPT-4o/GPT-3.5 turbo (OpenAI API)",
   "LoRA/QLoRA fine-tuning of Phi-4 14B, Qwen3-32B, LLaMA-3.3 70B",
   "Score-guided Token Probability Summation (SToPS) confidence",
   "zero-shot baselines (GPT-4.5, o1-pro, o3-mini etc.)",
   "embedding + XGBoost, MentalBERT, MentalRoBERTa, MentaLLaMA baselines",
   "AUC and MCC",
   "psychiatrist comparison and error review",
   "Sentence-BERT + HDBSCAN phrase clustering, Twitter-RoBERTa sentiment"
  ],
  "validation": [
   "internal held-out 20% test (n=740)",
   "external datasets (VEMOD, DAIC-WOZ, E-DAIC, CMDC)",
   "3 seeds",
   "clinician comparison (n=200)",
   "psychiatrist review of high-confidence errors"
  ],
  "cohort_or_program": "TREND-P (transdiagnostic digital biomarker dataset, CNUH/CNUHH; CNUH-2021-243, CNUH-2022-216, CNUHH-2021-117, CNUHH-2022-126) and VEMOD (EMA, high-stress occupational group; CNUH-2023-156, CNUHH-2023-118)",
  "source_basis": "full_text"
 },
 {
  "id": "lexical_profiles_scz_2026",
  "year": 2026,
  "title": "Distinctive lexical profiles in Korean-speaking patients with schizophrenia: Analysis of verbal productivity, lexical diversity, and part-of-speech distributions",
  "title_ko": "한국어 조현병 환자의 어휘 특성",
  "venue": "Psychiatry Res",
  "doi": "10.1016/j.psychres.2026.117402",
  "pmid": "42632395",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T6"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Ryu S",
   "Kim J-W",
   "Jhon M",
   "Chung Y-C",
   "Kim SJ",
   "Lee S",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "365",
  "pages": "117402",
  "question": "한국어 사용 조현병 환자의 어휘적 특성(발화량, 어휘 다양성, 품사 분포)은 인도유럽어권에서 보고된 언어 결함과 같은 범언어적 특징인가?",
  "motivation": "언어 장애는 조현병의 핵심 특징이지만 대부분의 언어학적 연구는 인도유럽어에 국한되어 있다.",
  "conclusion_ko": "발화량 감소, 어휘 다양성 저하, 부사 수식어의 선택적 손상은 문법 유형과 무관한 조현병의 범언어적 표지로 보이며, 어휘 분석은 정밀정신의학을 위한 객관적이고 문화 간 적용 가능한 도구가 될 수 있다.",
  "key_results": [
   {
    "label": "환자/대조군 수",
    "value": "249 / 159",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "발화량 감소",
    "value": "all contexts",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "어휘 다양성 지표별 양상",
    "value": null,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "일반 부사 감소",
    "value": null,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "조현병 스펙트럼 장애 환자와 건강 대조군의 8개 과제 발화 샘플",
   "n": "환자 249명, 대조군 159명",
   "period": null
  },
  "design": "case-control",
  "methods": [
   "Korean morphological analyzer",
   "content-word count",
   "part-of-speech proportions",
   "MATTR",
   "MTLD",
   "HD-D",
   "Rank Analysis of Covariance"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "il6_ghrelin_ijnp_2026",
  "year": 2026,
  "title": "Divergent effects of interleukin-6 and ghrelin on remission and relapse in depression treatment",
  "title_ko": "IL-6와 그렐린이 관해·재발에 미치는 상이한 영향",
  "venue": "Int J Neuropsychopharmacol",
  "doi": "10.1093/ijnp/pyag032",
  "pmid": "42324769",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": null,
  "pages": null,
  "question": "혈청 그렐린 수준이 IL-6와 항우울제 치료 결과(12주 관해, 24개월 재발)의 관계를 조절하는가?",
  "motivation": null,
  "conclusion_ko": "IL-6와 그렐린의 복합적 상호작용은 관해와 재발에 서로 다른 영향을 주며, 여러 바이오마커를 예측 모델에 통합해 항우울제 전략을 맞춤화할 필요가 있다.",
  "key_results": [
   {
    "label": "분석 환자 수",
    "value": "1086",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "그렐린 독립 효과",
    "value": null,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "IL-6 × 그렐린 상호작용",
    "value": null,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "단계적 항우울제 치료 자연주의 연구에 등록된 우울장애 환자",
   "n": "1,086명",
   "period": "12주 치료 후 반응자 24개월 추적"
  },
  "design": "prospective naturalistic cohort (12-week treatment, 24-month follow-up)",
  "methods": [
   "baseline serum IL-6 and ghrelin",
   "HAMD remission ≤7 at 12 weeks",
   "relapse HAMD >14 quarterly over 24 months among responders (HAMD ≤14)",
   "logistic regression adjusted for sociodemographic and clinical factors",
   "interaction analysis"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "il1b_neuroticism_scirep_2026",
  "year": 2026,
  "title": "Interactive dynamic modulation of antidepressant treatment response by serum interleukin-1β and Neuroticism at 12 weeks",
  "title_ko": "IL-1β·신경증 성향과 12주 항우울제 관해",
  "venue": "Sci Rep",
  "doi": "10.1038/s41598-026-35097-1",
  "pmid": "41519909",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q2"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim Y-C",
   "Kang S-G",
   "Kim J-W",
   "Kang H-J",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "16(1)",
  "pages": "4972",
  "question": "기저 혈청 IL-1β와 신경증 성향이 상호작용하여 우울장애 환자의 12주 항우울제 관해에 영향을 미치는가?",
  "motivation": "IL-1β는 염증 연쇄반응의 상위 개시인자로 항우울제 저항과 관련된 경로에 관여하지만, 치료반응과의 연관 연구는 일관되지 않다. 신경증 성향 같은 심리적 특성이 IL-1β의 임상적 의미를 조절할 수 있으나 이 상호작용을 다룬 연구는 드물다.",
  "conclusion_ko": "12주 시점 항우울제 치료반응은 혈청 IL-1β와 신경증 성향의 상호작용에 의해 동적으로 조절되며, 바이오마커와 심리평가를 통합하면 더 개인화되고 효과적인 우울증 치료 전략으로 이어질 수 있다.",
  "key_results": [
   {
    "label": "선별 / 채혈 / 분석 표본",
    "value": "1,262 / 1,094 (86.7%) / 1,086 (86.1%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12주 관해",
    "value": "490 (45.1%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "sIL-1β 중앙값 / 신경증 절단점",
    "value": "1.11 pg/mL / 7/8",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "sIL-1β–신경증 상관 rho",
    "value": 0.099,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "연속형 상호작용 OR",
    "value": 0.93,
    "ci": "0.90–0.97",
    "comparator": null,
    "page": null
   },
   {
    "label": "이분형 상호작용 Wald",
    "value": 4.515,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "민감도: 자가면역·만성감염 27명 제외 (이분형) OR",
    "value": 0.61,
    "ci": "0.36–0.97",
    "comparator": null,
    "page": null
   },
   {
    "label": "민감도: 세로토닌계 단일요법 (n=327) 이분형 OR",
    "value": 0.57,
    "ci": "0.27–0.96",
    "comparator": null,
    "page": null
   },
   {
    "label": "민감도: 12주 완료자 (n=966) 이분형 OR",
    "value": 0.59,
    "ci": "0.33–0.95",
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "염증 바이오마커를 기저에서만 측정해 치료 중 변화의 영향을 볼 수 없다.",
   "전체 코호트에서 항염증·면역조절 약물 사용을 체계적으로 평가하지 않았다.",
   "신경증을 BFI-10의 두 문항만으로 측정했다.",
   "범불안장애·공황장애·PTSD 등 정신과 공존질환 정보를 수집하지 않았다.",
   "자연주의 관찰연구로 인과 해석이 불가하고 표준화된 치료 프로토콜이 없었다.",
   "단일기관 설계로 외적 타당도가 제한될 수 있다."
  ],
  "data": {
   "source": "전남대학교병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE BETTER), 단계적 자연주의 항우울제 치료",
   "n": "선별 1,262명, 분석 1,086명",
   "period": "2012-03 ~ 2017-04 모집, 12주 추적"
  },
  "design": "prospective naturalistic cohort",
  "methods": [
   "serum IL-1β (Millipore high-sensitivity magnetic bead panel)",
   "BFI-10 Neuroticism",
   "HAMD ≤7 remission at 12 weeks",
   "binary logistic regression with product interaction term",
   "Spearman correlation",
   "three sensitivity analyses"
  ],
  "validation": [
   "covariate-adjusted models",
   "categorical and continuous specifications",
   "sensitivity: excluding autoimmune/chronic infection",
   "sensitivity: serotonergic monotherapy",
   "sensitivity: 12-week completers"
  ],
  "cohort_or_program": "MAKE Biomarker Discovery for Enhancing Antidepressant Treatment Effect and Response (MAKE BETTER)",
  "source_basis": "full_text"
 },
 {
  "id": "llm_wearable_screening_scirep_2026",
  "year": 2026,
  "title": "Interpretable depressive symptoms screening via statistical reasoning-augmented large language models using wearable and environmental data",
  "title_ko": "OR 기반 미세조정 LLM 우울 선별",
  "venue": "Sci Rep",
  "doi": "10.1038/s41598-026-47312-0",
  "pmid": "42000866",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q1",
   "Q5"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 1,
  "methods_tag": [
   "ml",
   "stat"
  ],
  "authors": [
   "Kong S",
   "Kim Y",
   "Jeong I",
   "Park S",
   "Shon S",
   "Park J-H",
   "Kim B",
   "Jhon M",
   "Kim J-M",
   "Kim J-W",
   "Lee H"
  ],
  "volume": "16",
  "pages": null,
  "question": "웨어러블·임상·환경 데이터에 오즈비 기반 통계적 추론을 담아 미세조정한 LLM이 PHQ-9 기준 우울 증상 상승을 해석 가능하게 분류할 수 있으며, 웨어러블 특징이 임상 변수 이상의 예측 가치를 더하는가?",
  "motivation": "PHQ-9 같은 평가는 특정 시점의 회상 보고에 의존해 증상 변동을 포착하기 어렵고, 노모그램은 선형 관계 가정에 묶여 있다. LLM은 정형 웨어러블·임상 데이터에 적용된 예가 적고 해석 가능성·일관성 우려가 있어 통계적 추론과 결합한 하이브리드 틀이 필요하다.",
  "conclusion_ko": "통계 모형과 LLM을 결합한 하이브리드 CDSS로 PHQ-9 기준 우울 증상 상승을 추적 가능하게 분류했으며, 웨어러블 특징은 임상 변수 이상의 정보를 더했고 OR 기반 미세조정은 예측인자 추적성을 유지하며 성능을 높였다. 다만 임상 적용 전 전향적 외부 검증이 필요하다.",
  "key_results": [
   {
    "label": "분석 참여자 수",
    "value": 2437,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "PHQ-9 ≥10 상승 증상자 수 (13.01%)",
    "value": 317,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "평균 연령(세)",
    "value": 60.15,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "주중 노모그램 검증 AUC",
    "value": 0.738,
    "ci": [
     0.675,
     0.8
    ],
    "comparator": {
     "label": "학습 코호트 AUC",
     "value": 0.717
    },
    "page": null
   },
   {
    "label": "주말 노모그램 검증 AUC",
    "value": 0.728,
    "ci": [
     0.669,
     0.788
    ],
    "comparator": {
     "label": "학습 코호트 AUC",
     "value": 0.711
    },
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 균형정확도, 주중 (복합 특징)",
    "value": 0.7874,
    "ci": null,
    "comparator": {
     "label": "임상 변수만 / 웨어러블만",
     "value": "0.6351 / 0.7352"
    },
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 균형정확도, 주말 (복합 특징)",
    "value": 0.6795,
    "ci": null,
    "comparator": {
     "label": "임상 변수만 / 웨어러블만",
     "value": "0.5890 / 0.6468"
    },
    "page": null
   },
   {
    "label": "노모그램 연속 NRI (주중, 웨어러블 추가)",
    "value": 0.469,
    "ci": [
     0.228,
     0.703
    ],
    "comparator": null,
    "page": null
   },
   {
    "label": "노모그램 연속 NRI (주말, 웨어러블 추가)",
    "value": 0.372,
    "ci": [
     0.134,
     0.602
    ],
    "comparator": null,
    "page": null
   },
   {
    "label": "결합 vs 임상 모델 AUC 차이 DeLong p (주중)",
    "value": 0.079,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 정확도(%) 주중",
    "value": 90.31,
    "ci": null,
    "comparator": {
     "label": "라벨 기반 FT / 노모그램 정확도(%)",
     "value": "87.03 / 71.76"
    },
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 특이도(%) 주중",
    "value": 94.51,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 정확도(%) 주말",
    "value": 88.83,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 민감도(%) 주말",
    "value": 39.51,
    "ci": null,
    "comparator": {
     "label": "노모그램 민감도(%)",
     "value": 72.84
    },
    "page": null
   },
   {
    "label": "라벨 기반 FT 모델 민감도(%) 주중",
    "value": 13.58,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "제로샷 최고 정확도(%) 주중, Claude 3.5-sonnet",
    "value": 71.26,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "OR 기반 FT 모델 평균 추론 시간(초) 주중",
    "value": 3.79,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "PHQ-9는 지난 14일, 행동 특징은 이후 7일을 반영해 시간적 정렬이 맞지 않으므로 전향적 예측이 아닌 근동시적 선별로 해석해야 한다.",
   "결과 정의가 자기보고 PHQ-9 절단점이며 구조화 진단면담으로 확인하지 않았다.",
   "단일기관 3차병원 코호트(유병률 13.01%)로 PPV가 부풀려질 수 있어 외부 검증이 필요하다.",
   "미세조정은 인프라 제약으로 GPT-4o에만 적용했다.",
   "로지스틱 회귀는 비선형·상호작용 효과를 충분히 포착하지 못할 수 있다.",
   "환경 보정이 기온·강수에 한정되어 잔여 교란이 있을 수 있다.",
   "임상 현장에서의 기능적 해석 가능성(임상의 검토, 환자 이해)은 검증하지 않았다.",
   "체계적 환각(hallucination) 감사를 수행하지 않았다.",
   "결정곡선분석을 하지 않았고 고위험 상황 대응 등 거버넌스 장치를 구현하지 않았다."
  ],
  "data": {
   "source": "전남대병원·화순전남대병원 다중모달 AI 학습 모(母)연구, 7일 손목 액티그래피 + 기상자료",
   "n": "2,437명(모집 2,580명; 학습 1,828 / 검증 609)",
   "period": "2021년 8월-2023년 1월"
  },
  "design": "hospital-based cross-sectional cohort; model development with held-out validation",
  "methods": [
   "PHQ-9 (>=10)",
   "wrist actigraphy (wGT3X-BT)",
   "multivariable logistic regression",
   "nomogram",
   "zero-shot LLM benchmark (GPT-4o, o3-mini, Claude 3.5-sonnet, Gemini 2.0-flash, Llama 3.3)",
   "supervised fine-tuning of GPT-4o (label-based vs OR-based)",
   "NRI / IDI / DeLong",
   "chatbot CDSS"
  ],
  "validation": [
   "held-out validation set (25%)",
   "bootstrap calibration (1000 resamples)"
  ],
  "cohort_or_program": "Parent study on multimodal artificial intelligence learning at CNUH and CNUHH (transdiagnostic framework)",
  "source_basis": "full_text"
 },
 {
  "id": "llm_wearable_harmonization_tce_2026",
  "year": 2026,
  "title": "Large Language Model-Driven Feature Weighting for Cross-Device Harmonization of Wearable Data: A Generalizable Framework for Digital Health Models",
  "title_ko": "LLM 기반 웨어러블 기기 간 데이터 조화",
  "venue": "IEEE Trans Consum Electron",
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Lee T",
   "Ha S",
   "Kim J-W",
   "Jhon M",
   "Lee H-J",
   "Lee H"
  ],
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "onprem_llm_ijmi_2026",
  "year": 2026,
  "title": "On-premises open-source large language models for privacy-preserving multimodal depression screening",
  "title_ko": "온프레미스 오픈소스 LLM 다중모달 우울 선별",
  "venue": "Int J Med Inform",
  "doi": "10.1016/j.ijmedinf.2026.106577",
  "pmid": "42379124",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q5"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Kwon S",
   "Kim Y",
   "Jhon M",
   "Park J-H",
   "Lim B",
   "Jeon E",
   "Kim J-M",
   "Kim J-W",
   "Lee H"
  ],
  "volume": "220",
  "pages": "106577",
  "question": "임상변수·감정기억 서술 텍스트·음향 특징을 통합한 온프레미스 오픈소스 LLM이 개인정보를 보호하면서 우울을 선별할 수 있고, 외부 데이터에서도 유지되는가?",
  "motivation": "개인정보와 데이터 거버넌스 요구 때문에 임상에서 폐쇄형 모델 사용이 제한된다. 또한 기존 LLM 기반 접근은 주로 텍스트 중심이어서 음향 특징과 구조화된 임상변수의 다중모달 통합이 부족하다.",
  "conclusion_ko": "임상변수·서술 텍스트·음향 특징을 통합한 다중모달 오픈소스 LLM은 온프레미스 환경에서 개인정보를 보호하는 우울 선별을 지원할 수 있으며, 지도 미세조정이 가장 일관된 성능 향상을 보였고 외부검증으로 견고성이 뒷받침되었다.",
  "key_results": [
   {
    "label": "제로샷 최고 내부 F1 (Gemma-3-27B)",
    "value": 0.735,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "CoT 프롬프팅 Llama-3.3-70B F1",
    "value": 0.708,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "지도 미세조정 내부 정확도 (5개 모델 범위)",
    "value": "0.852-0.881",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "지도 미세조정 내부 F1 (5개 모델 범위)",
    "value": "0.818-0.865",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "미세조정의 F1 향상폭",
    "value": "0.12-0.30",
    "ci": null,
    "comparator": {
     "label": "prompting-only approaches",
     "value": null
    },
    "page": null
   },
   {
    "label": "외부검증 정확도 범위",
    "value": "0.764-0.822",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "외부검증 F1 범위",
    "value": "0.683-0.807",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "전남대병원 수집 참여자(사회인구·생활습관 변수, 행복/슬픈 기억 서술 한국어 전사, eGeMAPS 음향 특징); 외부검증 E-DAIC",
   "n": "3,536명 (외부검증 E-DAIC 275명)",
   "period": null
  },
  "design": "model development with external validation",
  "methods": [
   "Gemma-3-27B",
   "Qwen-3-32B",
   "Llama-3.3-70B",
   "Phi4-14B",
   "gpt-oss-20b",
   "zero-shot prompting",
   "Chain-of-Thought prompting",
   "supervised fine-tuning",
   "eGeMAPS acoustic features (88) with Mann-Whitney U feature selection on training split"
  ],
  "validation": [
   "internal split",
   "external dataset (E-DAIC)"
  ],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "perplexity_scz_2026",
  "year": 2026,
  "title": "Perplexity and pseudo-perplexity as objective measures of linguistic deficits in schizophrenia: Evidence from a Korean-Speaking cohort",
  "title_ko": "언어모델 퍼플렉서티로 본 조현병 언어 결함",
  "venue": "Schizophr Res",
  "doi": "10.1016/j.schres.2026.04.030",
  "pmid": "42092305",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T6"
  ],
  "phase": "P4",
  "cites": 1,
  "methods_tag": [
   "ml",
   "stat"
  ],
  "authors": [
   "Ryu S",
   "Kim J-W",
   "Jhon M",
   "Chung Y-C",
   "Kim SJ",
   "Lee S",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "294",
  "pages": "147-154",
  "question": "언어모델에서 얻은 퍼플렉서티(PPL)와 유사 퍼플렉서티(PPPL)가 한국어 사용 조현병 환자와 건강대조군을 구별하는 객관적 언어 지표가 될 수 있는가?",
  "motivation": "언어 결함은 조현병의 핵심 특징이다. 언어모델에서 도출한 PPL·PPPL은 문맥적 불확실성의 확률적 지표로서 객관적 표지자가 될 가능성이 있다.",
  "conclusion_ko": "PPL과 PPPL의 상승은 조현병의 언어 일탈을 잘 특징지으며, 언어모델이 언어 병리를 객관적으로 정량화하는 자동화·확장 가능한 도구가 될 수 있음을 지지한다.",
  "key_results": [
   {
    "label": "조현병 환자 수",
    "value": 249,
    "ci": null,
    "comparator": {
     "label": "건강대조군 수",
     "value": 159
    },
    "page": null
   },
   {
    "label": "발화 과제 수",
    "value": 8,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "한국어 사용 조현병 환자와 건강대조군의 8개 과제 발화 샘플",
   "n": "환자 249명, 대조군 159명",
   "period": null
  },
  "design": "case-control (cross-sectional)",
  "methods": [
   "perplexity (autoregressive LM)",
   "pseudo-perplexity (bidirectional LM)",
   "Rank ANCOVA",
   "correlation analysis",
   "PANSS",
   "CGI-SCH"
  ],
  "validation": [
   "consistency across model architectures"
  ],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "personality_serotonin_pne_2026",
  "year": 2026,
  "title": "Personality moderates the predictive value of serum serotonin for antidepressant remission in depressive disorders",
  "title_ko": "성격이 조절하는 세로토닌의 관해 예측력",
  "venue": "Psychoneuroendocrinology",
  "doi": "10.1016/j.psyneuen.2026.107752",
  "pmid": "41539173",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 1,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "186",
  "pages": "107752",
  "question": "성격 유형(회복탄력형/취약형)이 기저 혈청 세로토닌과 12주 항우울제 관해 사이의 관계를 조절하는가?",
  "motivation": "말초 세로토닌 같은 혈액 바이오마커는 항우울제 반응 예측에 유망하지만 결과가 일관되지 않다. 세로토닌 기능과 연결된 성격 특성이 이 관계를 조절할 수 있다.",
  "conclusion_ko": "성격이 말초 세로토닌과 항우울제 반응 사이 관계의 조절인자이며, 이 생물심리사회적 상호작용이 기존 결과의 불일치를 설명하고 개인화 치료에 예비적 시사점을 줄 수 있다.",
  "key_results": [
   {
    "label": "분석 환자 수",
    "value": 1086,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "개인화 치료에 대한 시사점은 예비적이며 추가 검증이 필요하다."
  ],
  "data": {
   "source": "우울장애 외래 환자 전향적 자연주의 연구",
   "n": "1,086명",
   "period": null
  },
  "design": "prospective naturalistic cohort",
  "methods": [
   "Big Five Inventory",
   "cluster analysis",
   "serum serotonin",
   "HAMD",
   "logistic regression with interaction"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "5httlpr_crc_lymphocytes_2026",
  "year": 2026,
  "title": "The Impact of 5-HTTLPR Polymorphism on Depression and Lymphocyte Changes in Colorectal Cancer Patients Undergoing FOLFOX Chemotherapy",
  "title_ko": "대장암 항암치료 중 우울·림프구와 5-HTTLPR",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2025.0267",
  "pmid": "41554600",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 0,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim S-Y",
   "Jhon M",
   "Kim S-W",
   "Ryu S",
   "Shin I-S",
   "Kang H-J",
   "Lee J-Y",
   "Shim H-J",
   "Hwang JE",
   "Bae WK",
   "Choi H-W",
   "Shin MG",
   "Kim J-M"
  ],
  "volume": "23(2)",
  "pages": "227-235",
  "question": "FOLFOX 항암치료 중인 대장암 환자에서 우울 증상 변화와 림프구 아형 비율 변화의 관계를 5-HTTLPR 다형성이 조절하는가?",
  "motivation": "대장암 환자의 우울은 삶의 질 저하, 사망 위험 증가와 관련되며 면역 조절 이상이 그 기전으로 제시되지만, 우울과 면역지표의 연관 연구 결과는 일관되지 않다. 유전요인의 조절 효과가 그 비일관성의 설명으로 주목받아, 유전-환경 상호작용 모델을 임상 암 표본에 적용하고자 했다.",
  "conclusion_ko": "FOLFOX 항암치료 중인 대장암 환자에서 우울에 따른 CD4+ T세포와 CD16/56+ NK세포 비율 변화는 5-HTTLPR 대립유전자에 의해 조절되어 뇌-신체 간 유전-환경 상호작용을 시사한다. 우울이 악화될 때 s 대립유전자는 CD4+ 비율 감소, NK세포 비율 증가와 관련되었다.",
  "key_results": [
   {
    "label": "등록률 / 최종 분석 표본",
    "value": "162명 (58.3%) 등록, 105명 추적 완료, 최종 104명",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "5-HTTLPR 유전형 s/s / s/l / l/l",
    "value": "69 (66.3%) / 29 (27.9%) / 6 (5.8%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "기저 HADS-D 평균(SD)",
    "value": 4.58,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "HADS-D 변화 평균(SD)",
    "value": -0.09,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "s 대립유전자 수와 림프구 변화 (CD4+ / CD19+) p",
    "value": "0.025 / 0.032",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "HADS-D 변화 × 5-HTTLPR 상호작용 → CD4+ 변화 B",
    "value": "-2.21 (p=0.002)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "HADS-D 변화 × 5-HTTLPR 상호작용 → CD16/56+ 변화 B",
    "value": "1.82 (p=0.016)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "상호작용 추가 설명분산 (CD4+ / CD16/56+)",
    "value": "8.0% / 5.7%",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "민감도 분석(우성 모델) CD4+ / CD16/56+ B",
    "value": "-2.42 (p=0.005) / 1.87 (p=0.039, FDR 보정 후 비유의)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "사후 검정력",
    "value": 0.54,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "FOLFOX 치료 중인 대장암 환자 대상이므로 일반 인구로 일반화할 수 없다.",
   "우울 증상이 평균적으로 경도~중등도이고 점수 변화가 작아 중증 우울 환자로 일반화할 수 없다.",
   "한국인에서 s 대립유전자 빈도가 높아 검정력에 영향을 줄 수 있다.",
   "작은 표본과 낮은 소수 대립유전자 빈도로 편향 위험이 있다.",
   "NK세포 세포독성 등 기능적 면역지표를 측정하지 않았다.",
   "사전 표본 크기 계산이 없었고 사후 검정력이 0.54로 탐색적 결과로 해석해야 한다.",
   "FOLFOX의 골수억제 효과가 림프구 아형 비율에 영향을 미쳤을 수 있다.",
   "측정되지 않은 교란이나 변수 누락에 의한 모형 오지정 가능성을 배제할 수 없다."
  ],
  "data": {
   "source": "화순전남대학교병원 FOLFOX 보조 항암치료 대장암(2기 고위험·3기) 환자 전향적 코호트",
   "n": "등록 162명, 최종 분석 104명",
   "period": "2012-12 ~ 2017-11 모집"
  },
  "design": "prospective longitudinal cohort",
  "methods": [
   "HADS-D change score",
   "flow cytometry lymphocyte subsets (CD4+, CD8+, CD19+, CD16/56+)",
   "5-HTTLPR genotyping (PCR, 3730XL)",
   "moderated hierarchical regression (additive model)",
   "dominant-model sensitivity analysis",
   "FDR correction",
   "multiple imputation for missing HADS-D items"
  ],
  "validation": [
   "dominant-model sensitivity analysis",
   "FDR-adjusted p-values"
  ],
  "cohort_or_program": "Chonnam National University Hwasun Hospital FOLFOX colorectal cancer cohort (2012-2017; IRB 2012-169; sleep/circadian results published separately)",
  "source_basis": "full_text"
 },
 {
  "id": "contextual_coherence_scz_2026",
  "year": 2026,
  "title": "Tracking the dynamic breakdown of contextual coherence in schizophrenia using language models",
  "title_ko": "언어모델로 본 조현병 담화 맥락 붕괴",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2026.1848956",
  "pmid": "42305844",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T6"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Ryu S",
   "Kim J-W",
   "Jhon M",
   "Chung Y-C",
   "Kim SJ",
   "Lee S",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "17",
  "pages": "1848956",
  "question": "자기회귀 언어모델의 토큰 단위 surprisal 궤적으로 조현병 환자의 발화에서 맥락 일관성이 언제, 어떻게 무너지는지 정량화할 수 있는가?",
  "motivation": "와해된 언어는 조현병의 핵심 증상이지만 기존 주관적 평가척도는 동적이고 미묘한 언어 이탈에 민감하지 않다. 기존 언어모델 연구도 문서 수준 평균에 의존해, 발화가 전개되는 시간적 흐름을 반영한 분석이 필요했다.",
  "conclusion_ko": "조현병의 언어 이상은 정적 결함이 아니라 몇 문장 안에서도 빠르게 전개되는 동적 현상이다. 환자는 국소 의존성으로 발화를 시작하지만 전체 맥락을 통합하는 능력이 빠르게 저하되며, 동적 자동 언어분석은 사고형식장애의 신경인지 기반을 밝히는 민감하고 확장 가능한 도구가 될 수 있다.",
  "key_results": [
   {
    "label": "분석 표본 (환자/대조군)",
    "value": "249 / 159",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Polyglot 모델 유의한 궤적 이탈 과제 수",
    "value": "7/8 (Picture 3 제외)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Polyglot 이탈 구간: Week / Day / TV",
    "value": "tokens 11–77 / 26–100 / 24–87",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Kanana 이탈 구간: Week / Day / TV",
    "value": "tokens 37–65 / 45–77 / 49–74",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "두 모델 공통 이탈이 강해지는 구간",
    "value": "tokens 50–70",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Polyglot 전체 평균 surprisal 차이 p (Week/Day/TV/Happy/Angry)",
    "value": "<0.001 / <0.001 / <0.001 / 0.001 / 0.014",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Kanana 전체 평균 surprisal 차이 p (Week/Day/TV/Happy/Picture 1)",
    "value": "0.008 / 0.014 / 0.005 / 0.023 / 0.047",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "교육연수 (환자 vs 대조군, 중앙값)",
    "value": "14.00 vs 16.00",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "궤적을 100토큰에서 잘라 장거리 담화 결함을 평가하지 못했다.",
   "총 토큰 수를 통제했으나 집단 간 발화량 차이는 여전히 방법론적 과제다.",
   "표준화 투사검사 대신 자체 과제 묶음을 사용해 기존 프로토콜과 직접 비교가 어렵다.",
   "표준화된 발화 프로토콜로 대화의 상호작용적 특성을 평가하지 못했다.",
   "결과가 특정 모델 구조에 의존한다.",
   "교육 수준 차이의 잔여 효과를 배제할 수 없고, 증상 심각도·항정신병약물 용량 등은 집단 간 분석에서 통제하지 못했다."
  ],
  "data": {
   "source": "지역사회 정신건강복지센터 및 정신과 외래에서 모집한 조현병 스펙트럼 환자와 건강대조군의 8개 과제 발화 녹음 전사본",
   "n": "환자 249명, 대조군 159명",
   "period": null
  },
  "design": "cross-sectional case-control (speech sample analysis)",
  "methods": [
   "token-level surprisal from Polyglot-ko-5.8b and Kanana-1.5-8b-base (FP16)",
   "generalized additive mixed models (fREML, k=15, factor-smooth random effects)",
   "difference smooths with 95% CI",
   "Mann-Whitney U / chi-square",
   "Vrew ASR transcription with manual review"
  ],
  "validation": [
   "two independent language models",
   "eight speech tasks"
  ],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "v3gemma_scirep_2026",
  "year": 2026,
  "title": "V3-Gemma: an on-device multimodal framework for depression screening through clinical-computational alignment",
  "title_ko": "V3-Gemma 온디바이스 우울 선별",
  "venue": "Sci Rep",
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "lightweight_crossmodal_cbm_2025",
  "year": 2025,
  "title": "A lightweight approach based on cross-modality for depression detection",
  "title_ko": "음성·텍스트 경량 교차모달 우울 탐지",
  "venue": "Comput Biol Med",
  "doi": "10.1016/j.compbiomed.2024.109618",
  "pmid": "39765105",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 27,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Lim E",
   "Jhon M",
   "Kim J-W",
   "Kim S-H",
   "Kim S",
   "Yang H-J"
  ],
  "volume": "186",
  "pages": "109618",
  "question": "음성(멜 스펙트로그램)과 텍스트(XLM-RoBERTa)를 교차주의로 융합한 경량 모델이 영어·중국어·한국어 우울 데이터셋에서 적은 파라미터로 우울을 정확히 탐지하고 언어를 넘어 일반화할 수 있는가?",
  "motivation": "우울은 이질적인 증후군이어서 면담·설문만으로는 정확한 진단이 어렵고, 일상에서 쉽게 수집되는 음성·텍스트를 생체지표로 활용할 필요가 있다. 그러나 멀티모달 모델은 파라미터와 계산 자원이 많이 들고 영어 외 언어에서의 효과 검증이 부족해, 경량이면서 다언어에 적용 가능한 모델을 제안하려 했다.",
  "conclusion_ko": "음성과 텍스트를 이용한 경량 멀티모달 우울 탐지 방법을 제안했으며, MLP-Mixer로 오디오 파라미터를 99.64% 줄이고 텍스트 단일모델보다 약 4배 빠른 추론을 보였다. 1초 이내 추론으로 일상에서 음성·텍스트로 우울을 실시간 선별할 수 있고, 임상의의 1차 선별 도구로 쓰일 수 있다.",
  "key_results": [
   {
    "label": "DAIC-WOZ 제안 교차모달 모델 F1",
    "value": 0.67,
    "ci": null,
    "comparator": {
     "label": "Trf+CNN-Full",
     "value": 0.67
    },
    "page": 8
   },
   {
    "label": "EATD-Corpus 제안 교차모달 모델 F1",
    "value": 0.81,
    "ci": null,
    "comparator": {
     "label": "Baseline model [24] (fusion)",
     "value": 0.71
    },
    "page": 8
   },
   {
    "label": "Korean Depression Dataset 제안 교차모달 모델 F1",
    "value": 0.61,
    "ci": null,
    "comparator": {
     "label": "Simple concatenation",
     "value": 0.56
    },
    "page": 9
   },
   {
    "label": "한국어 데이터셋 오디오 모델 파라미터 감소율 (MLP-Mixer vs Transformers)",
    "value": "99.64%",
    "ci": null,
    "comparator": {
     "label": "Transformers 559M vs MLP-Mixer",
     "value": "2M"
    },
    "page": 7
   },
   {
    "label": "DAIC-WOZ 추론시간 (교차모달, 초)",
    "value": 0.2265,
    "ci": null,
    "comparator": {
     "label": "텍스트 단일모달 모델",
     "value": 0.9242
    },
    "page": 7
   },
   {
    "label": "EATD 추론시간 (교차모달, 초)",
    "value": 0.2155,
    "ci": null,
    "comparator": {
     "label": "텍스트 단일모달 모델",
     "value": 0.2371
    },
    "page": 7
   },
   {
    "label": "교차언어 최고 재현율 (EATD 학습→EATD 평가)",
    "value": 0.82,
    "ci": null,
    "comparator": null,
    "page": 9
   },
   {
    "label": "10회 반복 평균 정확도",
    "value": "68.57%",
    "ci": null,
    "comparator": null,
    "page": 10
   },
   {
    "label": "DAIC-WOZ 10-fold 평균 F1 (%)",
    "value": 65.01,
    "ci": [
     61.46,
     68.56
    ],
    "comparator": null,
    "page": 10
   },
   {
    "label": "EATD-Corpus 10-fold 평균 F1 (%)",
    "value": 75.55,
    "ci": [
     71.95,
     79.15
    ],
    "comparator": null,
    "page": 10
   },
   {
    "label": "세 데이터셋 평균 F1",
    "value": "70%",
    "ci": null,
    "comparator": null,
    "page": 12
   }
  ],
  "limitations": [
   "음성과 텍스트에만 의존하며 얼굴 표정·생리신호 등 다른 양식은 포함하지 않았다.",
   "평균 F1 70%는 중간 수준으로, 우울 탐지 같은 고위험 용도에 적합한지 신중히 평가해야 하며 위음성 위험이 크다.",
   "중국어·한국어로 학습한 모델을 다른 언어에 적용할 때 성능이 다소 떨어졌다.",
   "경도-중등도 우울에서는 단어 선택이 비우울군과 비슷하고, 소음·불완전한 전사 등 데이터 품질 변동이 오분류의 주요 원인이었다.",
   "나이·성별·교육 등 인구학적 특성은 아직 반영하지 않았다."
  ],
  "data": {
   "source": "DAIC-WOZ (영어), EATD-Corpus (중국어), Korean Depression Dataset (AIHUB, 한국어)",
   "n": "DAIC-WOZ 189명, EATD-Corpus 162명, Korean Depression Dataset 1,800 샘플",
   "period": null
  },
  "design": "model development and benchmark on public datasets; cross-language evaluation",
  "methods": [
   "MLP-Mixer (audio, Mel spectrogram)",
   "Transformer encoder with XLM-RoBERTa embeddings (text)",
   "bidirectional cross-attention fusion",
   "class weighting",
   "stratified 10-fold cross-validation",
   "one-sample t-tests over 10 runs"
  ],
  "validation": [
   "held-out test split per dataset (subject independent)",
   "stratified 10-fold CV (DAIC-WOZ, EATD-Corpus)",
   "cross-language train/test",
   "10 repeated runs"
  ],
  "cohort_or_program": "DAIC-WOZ; EATD-Corpus; Korean Depression Dataset (AIHUB)",
  "source_basis": "full_text"
 },
 {
  "id": "mdd_genomics_wearables_bibm_2025",
  "year": 2025,
  "title": "A Multi-Modal Framework for Major Depressive Disorder Prediction Integrating Variant-Based Genomics, Wearables, and Clinical Data",
  "title_ko": "유전체·웨어러블·임상 통합 MDD 예측",
  "venue": "IEEE BIBM 2025",
  "doi": null,
  "pmid": null,
  "type": "conference full paper",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Lee T",
   "Ha S",
   "Kang K",
   "Kim J",
   "Jhon M",
   "Lee H"
  ],
  "volume": null,
  "pages": "IEEE Xplore document 11356566",
  "question": "변이 기반 유전체, 웨어러블 시계열, 임상 변수를 통합한 딥러닝 다중모달 모델이 주요우울장애를 더 객관적으로 예측할 수 있는가?",
  "motivation": "주요우울장애는 유전적·생리적 요인이 상호작용하여 발생하지만 진단은 여전히 주관적 평가에 크게 의존한다. 이에 객관적 데이터를 통합한 예측 틀이 필요하다.",
  "conclusion_ko": "세 가지 모달리티를 모두 쓰고 GCN 유전체 인코더·1D-CNN 활동·TCN 수면·조기 융합을 결합한 구성이 가장 좋은 성능을 보였으며, 저자들은 유전자-유전자 상호작용의 명시적 모델링이 성능 향상에 기여했다고 해석한다.",
  "key_results": [
   {
    "label": "Best configuration AUPRC (all three modalities)",
    "value": 0.45,
    "ci": "±0.057",
    "comparator": null,
    "page": null
   },
   {
    "label": "Best configuration AUROC (all three modalities)",
    "value": 0.786,
    "ci": "±0.042",
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "wearable time-series (activity, sleep), variant-based genomic profiles, routine clinical variables",
   "n": null,
   "period": null
  },
  "design": "exploratory multi-modal deep learning (model development)",
  "methods": [
   "LSTM",
   "TCN",
   "1D-CNN",
   "graph convolutional network (GCN)",
   "Transformer",
   "early fusion",
   "SHAP",
   "pathway analysis"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "web_abstract"
 },
 {
  "id": "actigraphy_steps_jad_2025",
  "year": 2025,
  "title": "Actigraphy-based step analysis for the detection of depressed mood: An explainable machine learning approach",
  "title_ko": "액티그래피 걸음 수로 우울 기분 탐지(설명가능 AI)",
  "venue": "J Affect Disord",
  "doi": "10.1016/j.jad.2025.120104",
  "pmid": "40850556",
  "type": "original",
  "tier": "A",
  "role": "co-corresponding",
  "led": true,
  "questions": [
   "Q1",
   "Q5",
   "Q3"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 6,
  "methods_tag": [
   "ml",
   "stat"
  ],
  "authors": [
   "Kim J-W",
   "Lee T",
   "Lim B",
   "Park S-H",
   "Park J-H",
   "Jeong I",
   "Park K",
   "Kang H-J",
   "Jeon E",
   "Kim S-W",
   "Jhon M",
   "Lee H",
   "Kim J-M"
  ],
  "volume": "392",
  "pages": "120104",
  "question": "1주간 손목 액티그래피로 측정한 걸음 수 기반 특징으로 우울 증상(경도, 중등도-중증)을 설명가능한 머신러닝 모델이 분류할 수 있는가?",
  "motivation": "우울증 진단은 회상 편향과 평가자 간 변이가 있는 주관적 척도에 의존해 객관적 도구가 필요하다. 기존 액티그래피 기반 탐지는 표본이 작거나 동질적이고 '블랙박스' 모델이라 임상 적용과 해석이 제한되어, 대규모 실제 자료와 SHAP 기반 해석 모델이 필요했다.",
  "conclusion_ko": "액티그래피에서 얻은 걸음 수 자료는 AI 기반 우울 증상 분류에 잠재력이 있으며, 절대 걸음 수와 시간적 패턴이 모두 분류에 기여하므로 개인화된 정신건강 선별을 위해 시간대를 고려한 설명가능 AI 접근이 필요하다.",
  "key_results": [
   {
    "label": "분석 대상자 수",
    "value": 3304,
    "ci": null,
    "comparator": {
     "label": "초기 등록",
     "value": 3592
    },
    "page": 4
   },
   {
    "label": "경도 우울 증상군 비율(%)",
    "value": 22.6,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "중등도-중증 우울 증상군 비율(%)",
    "value": 14.1,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "PHQ-9 점수와 걸음 수 상관(r)",
    "value": -0.21,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "경도 우울 증상 예측 CatBoost 평균 AUROC",
    "value": 0.679,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "중등도-중증 우울 증상 예측 XGBoost 평균 AUROC",
    "value": 0.715,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "65세 이상 남성 하위군 AUROC (경도)",
    "value": 0.756,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "65세 이상 남성 하위군 AUROC (중등도-중증)",
    "value": 0.833,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "최저 하위군 AUROC (40-64세 남성 경도 / 19-40세 여성 중등도-중증)",
    "value": 0.591,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "L5 시작 시각 평균",
    "value": "01:34",
    "ci": null,
    "comparator": null,
    "page": 7
   }
  ],
  "limitations": [
   "딥러닝 모델을 사용하지 않았다.",
   "액티그래피는 수영·자전거 등 일부 신체활동을 감지하지 못한다.",
   "측정 기간(6일)이 짧아 신체활동이 과대·과소 추정되었을 수 있고 질병 경과 예측이나 인과관계 확립에 제약이 있다."
  ],
  "data": {
   "source": "전남대병원·화순전남대병원 다중모달 AI 모회사 연구(진단횡단적 접근)의 정신과 외래 환자 및 정상 대조군; ActiGraph wGT3X-BT 1주 착용",
   "n": "3,304명 분석 (등록 3,592명; 외래 932명, 대조군 2,372명)",
   "period": "2021-08-02 ~ 2025-01-10 (자료 수집 진행 중)"
  },
  "design": "cross-sectional analysis within an ongoing multimodal cohort; machine learning classification",
  "methods": [
   "PHQ-9 cutoffs (>=5 mild, >=10 moderate-to-severe)",
   "3-hour interval step counts",
   "nonparametric rhythm metrics (M10, L5, IS, IV)",
   "cosinor analysis (MESOR, amplitude, acrophase)",
   "light exposure duration (500/1000 lx)",
   "XGBoost, Random Forest, SVM, MLP, LightGBM, CatBoost",
   "five-fold CV hyperparameter tuning, 10 random seeds, 80/20 split",
   "SHAP",
   "ANOVA, chi-square, Pearson correlation",
   "age-gender stratified subgroup models"
  ],
  "validation": [
   "80/20 train-test split",
   "internal 5-fold CV for tuning",
   "10 random seeds (mean±SD)"
  ],
  "cohort_or_program": "Multimodal AI learning parent study at CNUH and CNUHH (transdiagnostic approach; IRB CNUH-2021-243, CNUH-2022-216, CNUHH-2021-117, CNUHH-2022-126)",
  "source_basis": "full_text"
 },
 {
  "id": "hrv_ptsd_jpr_2025",
  "year": 2025,
  "title": "Associations of heart rate variability at early post-injury with later post-traumatic stress disorder over two years",
  "title_ko": "외상 직후 심박변이도와 2년간 PTSD 발생",
  "venue": "J Psychiatr Res",
  "doi": "10.1016/j.jpsychires.2025.05.032",
  "pmid": "40472419",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 3,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kim J-W",
   "Ju J-K",
   "Jhon M",
   "Kang H-J",
   "Lee J-Y",
   "Jang H",
   "Kim J-C",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "188",
  "pages": "276-283",
  "question": "신체 외상 직후 측정한 심박변이도(HRV)가 이후 2년간 PTSD 발생을 예측하는가?",
  "motivation": "기존 PTSD-HRV 연구는 대부분 횡단적이거나 전투 상황의 외상 전 HRV에 집중해 실제 외상 직후 생리 반응과 PTSD 발생의 관계를 밝히지 못했다. 외상 직후 HRV를 측정한 선행 전향 연구는 표본(N=35)과 추적 기간(6개월)이 짧아, 대규모·장기 추적 연구가 필요했다.",
  "conclusion_ko": "외상 직후 측정한 HRV(특히 낮은 RMSSD와 LF)는 신체 손상 후 PTSD, 특히 첫 6개월 이내 발생의 예측 바이오마커가 될 수 있다.",
  "key_results": [
   {
    "label": "2년간 PTSD 진단",
    "value": 10.8,
    "ci": null,
    "comparator": null,
    "page": 276
   },
   {
    "label": "3개월 PTSD 유병률",
    "value": 8.4,
    "ci": null,
    "comparator": {
     "label": "24개월",
     "value": 2.5
    },
    "page": 279
   },
   {
    "label": "RMSSD 보정 beta (2년 PTSD)",
    "value": -0.129,
    "ci": null,
    "comparator": null,
    "page": 281
   },
   {
    "label": "LF 보정 beta (2년 PTSD)",
    "value": -0.12,
    "ci": null,
    "comparator": null,
    "page": 281
   },
   {
    "label": "RMSSD의 PTSD PPV",
    "value": 55.8,
    "ci": null,
    "comparator": {
     "label": "LF PPV",
     "value": 57.6
    },
    "page": 279
   },
   {
    "label": "3개월 시점 RMSSD-PTSD 보정 P",
    "value": 0.003,
    "ci": null,
    "comparator": {
     "label": "6개월 P",
     "value": 0.009
    },
    "page": 281
   },
   {
    "label": "3개월 시점 LF-PTSD 보정 P",
    "value": 0.006,
    "ci": null,
    "comparator": {
     "label": "6개월 P",
     "value": 0.012
    },
    "page": 281
   }
  ],
  "limitations": [
   "신체 외상 환자만 대상으로 해 다른 형태의 외상에 일반화하기 어렵다.",
   "단일 외상센터에서 모집했다.",
   "HRV 평가 완료율이 51%였고 중증 손상 환자의 미완료로 연관성이 과소추정될 수 있다.",
   "기저 약물 사용을 체계적으로 평가하지 않아 잔여 교란 가능성이 있다.",
   "추적 기간 PTSD 발생자 수가 비교적 적다.",
   "전화 면담 기반 CAPS-5 평가와 평가자 간 신뢰도 미평가.",
   "추적 시점에 HRV를 재측정하지 않았다.",
   "입원 1개월 이내 측정이라 외상 직후 급성기 생리 상태를 충분히 포착하지 못했을 수 있다.",
   "HRV 기록 불량으로 45명(7.2%)이 제외되었다.",
   "경련 발생, 통증, 과거 외상 치료 여부 자료가 없다."
  ],
  "data": {
   "source": "전남대병원 외상센터 입원 신체 손상 환자 (BioPTS 연구); SA-6000 HRV 분석기 3분 측정",
   "n": "기저 1,142명 중 HRV 완료 580명, 분석 538명 (PTSD 58명)",
   "period": "2015-06 ~ 2021-01 모집, 3·6·12·24개월 CAPS-5 추적"
  },
  "design": "prospective cohort (2-year follow-up)",
  "methods": [
   "baseline HRV (SDNN, RMSSD, LF, HF, LF/HF) within one month of hospitalization",
   "CAPS-5 telephone interviews at 3, 6, 12, 24 months",
   "log transformation of HRV",
   "t-tests and chi-square tests",
   "linear regression adjusted for 11 covariates",
   "Bonferroni correction",
   "positive predictive value via ROC analysis"
  ],
  "validation": [
   "covariate adjustment",
   "Bonferroni correction"
  ],
  "cohort_or_program": "Biomarker-based Diagnostic Algorithm for Post-Traumatic Syndrome (BioPTS) study",
  "source_basis": "full_text"
 },
 {
  "id": "mdd_subtypes_outcomes_cpn_2025",
  "year": 2025,
  "title": "Clinical Outcomes and Treatment Intensification across Depression Subtypes in Patients Receiving Stepwise Pharmacotherapy over 24 Months",
  "title_ko": "우울증 아형별 24개월 치료 결과와 치료 강도",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.25.1283",
  "pmid": "41139592",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 2,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Kim H",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "23",
  "pages": "572-578",
  "question": "단계적 약물치료를 받는 주요우울장애 환자에서 멜랑콜리아형·비전형·비특정형 아형에 따라 24개월간 관해·재발률과 약물치료 강도가 다른가?",
  "motivation": "주요우울장애는 이질적이며 아형별 경과와 예후가 다를 수 있으나 전향적 연구 결과는 일관되지 않다. 항우울제 치료 후 아형별 관해와 재발을 체계적으로 살핀 연구는 드물다.",
  "conclusion_ko": "아형 간 관해·재발률은 비슷했지만 멜랑콜리아형과 비전형에서 더 강한 약물치료가 그 결과를 이루는 데 중요했으며, 아형 특성과 중증도에 맞춘 치료 계획이 필요하다.",
  "key_results": [
   {
    "label": "MDD 환자 수",
    "value": 1079,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "멜랑콜리아형 환자 수 (16.9%)",
    "value": 182,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "비전형 환자 수 (6.3%)",
    "value": 68,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "비특정형 환자 수 (76.8%)",
    "value": 829,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "기저 HAMD 평균 (멜랑콜리아형)",
    "value": 22.1,
    "ci": null,
    "comparator": {
     "label": "비전형 / 비특정형",
     "value": "20.2 / 21.0"
    },
    "page": null
   },
   {
    "label": "12주 관해율(%)",
    "value": 46.6,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12개월 관해율(%)",
    "value": 70.2,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "24개월 재발률(%)",
    "value": 42.1,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "Bonferroni 보정 유의수준",
    "value": 0.017,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "단일기관 연구라 일반화에 한계가 있다.",
   "자연주의적 설계로 통일된 치료 프로토콜이 없어 치료 결과에 변동이 생긴다.",
   "여러 항우울제를 사용해 아형이 치료 결과를 어떻게 예측하는지 정확히 파악하기 어렵다.",
   "기저 불안, 동반 정신질환, 복약순응도를 통제하지 않았다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE BETTER)",
   "n": "1,079명",
   "period": "2012년 3월-2017년 4월 등록, 24개월 추적"
  },
  "design": "prospective naturalistic cohort",
  "methods": [
   "HAMD",
   "DSM-IV subtype classification",
   "ANOVA",
   "chi-square test",
   "Bonferroni correction",
   "stepwise pharmacotherapy"
  ],
  "validation": [],
  "cohort_or_program": "MAKE BETTER (MAKE Biomarker Discovery for Enhancing Antidepressant Treatment Effect and Response) program",
  "source_basis": "full_text"
 },
 {
  "id": "mdd_subtypes_biomarkers_jcp_2025",
  "year": 2025,
  "title": "Differentiating Subtypes of Major Depressive Disorder Using Serum Biomarkers",
  "title_ko": "혈청 바이오마커로 본 주요우울장애 아형",
  "venue": "J Clin Psychiatry",
  "doi": "10.4088/JCP.25m15828",
  "pmid": "40608474",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 6,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Kim H",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "86(3)",
  "pages": "25m15828",
  "question": "14개 혈청 바이오마커(6개 기능계)로 주요우울장애의 멜랑콜리아형·비전형·비특정형 아형을 구별할 수 있는가?",
  "motivation": "멜랑콜리아형과 비전형 우울증은 증상과 병태생리가 다르다고 여겨지지만, 신경가소성·신경전달물질·대사·영양 계통 바이오마커와 아형의 연관은 일관되게 확인되지 않았다. 대규모 MDD 코호트에서 폭넓은 바이오마커 패널을 아형 간 비교해 감별진단과 맞춤 치료에 도움이 되는 프로파일을 찾고자 했다.",
  "conclusion_ko": "MDD 아형마다 뚜렷한 혈청 바이오마커 프로파일(멜랑콜리아형의 높은 코르티솔·낮은 세로토닌, 비전형의 높은 IL-1β·IL-4)이 있어 고유한 생물학적 기반을 시사하며, 표적 치료 접근을 제안한다. 향후 종단 연구와 유전체·단백체 바이오마커 탐색이 필요하다.",
  "key_results": [
   {
    "label": "분석 대상 MDD 환자 수",
    "value": 993,
    "ci": null,
    "comparator": {
     "label": "기저 참여자",
     "value": 1262
    },
    "page": 3
   },
   {
    "label": "멜랑콜리아형 비율(%)",
    "value": 16.8,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "코르티솔 중앙값 차이, 멜랑콜리아형 vs 비특정형 (μg/dL, 보정)",
    "value": 1.12,
    "ci": [
     0.16,
     2.15
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "세로토닌 차이, 멜랑콜리아형 vs 비특정형 (ng/mL, 보정)",
    "value": -11.2,
    "ci": [
     -16.67,
     -2.59
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "세로토닌 차이, 비전형 vs 멜랑콜리아형 (ng/mL, 보정)",
    "value": 18.2,
    "ci": [
     5.91,
     24.66
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "IL-1β 차이, 비전형 vs 비특정형 (pg/mL, 보정)",
    "value": 0.18,
    "ci": [
     0.07,
     0.28
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "IL-4 차이, 비전형 vs 비특정형 (pg/mL, 보정)",
    "value": 11.39,
    "ci": [
     6.21,
     18.53
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "IL-4 차이, 비전형 vs 멜랑콜리아형 (pg/mL, 보정)",
    "value": 13.27,
    "ci": [
     7.73,
     17.31
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "초록 보고 P값: 코르티솔(멜랑콜리아 vs 비특정)",
    "value": 0.009,
    "ci": null,
    "comparator": null,
    "page": 1
   }
  ],
  "limitations": [
   "단일 기관 연구로 일반화에 한계가 있다.",
   "분석한 바이오마커가 새롭지 않다.",
   "아형 진단의 평가자 간 신뢰도를 공식적으로 측정하지 않았다.",
   "머신러닝·잠재계층분석 같은 자료 기반 접근을 쓰지 않았다.",
   "횡단 설계로 바이오마커를 기저 시점에만 측정했다.",
   "비특정형이 표본 다수를 차지해 미확인 아형이 섞였을 수 있고, HAMD 14점 이상 기준으로 경증 환자가 포함되어 일반화에 영향이 있을 수 있다."
  ],
  "data": {
   "source": "MAKE BETTER 프로젝트 기저 자료; 전남대병원 정신건강의학과 외래",
   "n": "993명 MDD (멜랑콜리아형 157, 비전형 56, 비특정형 720)",
   "period": "2012-03 ~ 2017-04"
  },
  "design": "cross-sectional analysis of baseline data from a naturalistic prospective cohort",
  "methods": [
   "DSM-IV subtype classification by consensus of 3 psychiatrists",
   "14 serum biomarkers (hsCRP, TNF-α, IL-1β, IL-6, IL-4, IL-10, cortisol, BDNF, serotonin, leptin, total ghrelin, total cholesterol, folate, homocysteine)",
   "ANOVA / chi-square with Scheffe post hoc",
   "Kruskal-Wallis and Mann-Whitney U",
   "quantile regression adjusted for covariates"
  ],
  "validation": [],
  "cohort_or_program": "MAKE Biomarker Discovery for Enhancing Antidepressant Treatment Effect and Response (MAKE BETTER)",
  "source_basis": "full_text"
 },
 {
  "id": "employment_biomarkers_fp_2025",
  "year": 2025,
  "title": "Employment-dependent associations of serum biomarkers with short- and long-term antidepressant treatment outcomes",
  "title_ko": "고용 상태별 혈청 바이오마커와 항우울제 관해",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2025.1662993",
  "pmid": "41584756",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q2"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "16",
  "pages": "1662993",
  "question": "고용 상태가 기저 혈청 바이오마커와 12주·12개월 항우울제 관해 사이의 연관을 조절하는가?",
  "motivation": "고용 상태는 우울증의 주요 사회적 결정요인이며 염증·신경영양·대사·영양 바이오마커에도 영향을 미친다. 그러나 치료반응 예측 바이오마커 연구는 고용 같은 사회적 요인을 상호작용 변수로 고려하지 않아, 생물학적·사회적 요인을 통합한 접근이 필요했다.",
  "conclusion_ko": "기저 혈청 세로토닌, TNF-α, 렙틴, BDNF와 12주·12개월 관해의 연관은 고용 상태에 따라 달랐으며, 이는 회복 단계별로 바이오마커의 의미가 고용 상태에 따라 다름을 보여준다. 탐색적 결과로서 우울증 예후에서 사회경제적 요인의 중요성과 고용 맞춤형 바이오마커 기반 치료 전략의 잠재적 가치를 시사한다.",
  "key_results": [
   {
    "label": "12주 분석 표본 / 12개월 추적",
    "value": "1,086 / 884 (81.4%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "비고용자 비율",
    "value": "316 (29.1%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "관해율 12주 / 12개월",
    "value": "490 (45.1%) / 625 (70.7%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "엽산 중앙값 (고용 vs 비고용)",
    "value": "7.8 ng/mL",
    "ci": null,
    "comparator": {
     "label": "비고용",
     "value": "7.0 ng/mL"
    },
    "page": null
   },
   {
    "label": "호모시스테인 중앙값 (고용 vs 비고용)",
    "value": "10.7 μmol/L",
    "ci": null,
    "comparator": {
     "label": "비고용",
     "value": "11.7 μmol/L"
    },
    "page": null
   },
   {
    "label": "12개월 관해: 고용 × 바이오마커 상호작용 p (TNF-α / leptin / BDNF, 범주형)",
    "value": "0.027 / 0.023 / 0.039",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12주 관해: 범주형 상호작용",
    "value": "유의한 상호작용 없음",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12주 관해: 연속형 세로토닌 상호작용",
    "value": "고용자에서만 높은 세로토닌이 관해와 연관 (수치는 보충표)",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "다중비교 보정을 하지 않아 위양성 가능성이 커 예비 신호로 해석해야 한다.",
   "바이오마커를 중앙값으로 이분화해 변이와 용량-반응 양상이 가려질 수 있다.",
   "바이오마커를 기저에서만 측정했다.",
   "개별화된 약물치료 차이로 인한 잔여 교란을 배제할 수 없다.",
   "소득 기반 고용 분류가 시간제·은퇴·가사 등 다양한 상황을 반영하지 못하고, 역인과 가능성도 있다.",
   "한국 단일기관 코호트로 일반화가 제한된다.",
   "비고용자의 12개월 탈락률이 높아 차등 탈락에 의한 편향 가능성이 있다."
  ],
  "data": {
   "source": "전남대학교병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE BETTER)",
   "n": "1,086명 (12개월 분석 884명)",
   "period": "2012-03 ~ 2017-04 모집, 12개월 추적"
  },
  "design": "prospective naturalistic cohort (exploratory, hypothesis-generating)",
  "methods": [
   "14 serum biomarkers across immune, metabolic, neuroplastic, neurotransmitter, endocrine, nutritional domains",
   "income-based employment classification",
   "HAMD ≤7 remission at 12 weeks and 12 months",
   "logistic regression, stratified by employment, biomarker × employment interaction",
   "median-split and continuous biomarker analyses",
   "no multiplicity correction (exploratory)"
  ],
  "validation": [
   "categorical and continuous biomarker specifications",
   "covariate-adjusted models"
  ],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing Antidepressant Treatment Effect and Response (MAKE BETTER) program (CNUH 2012-014)",
  "source_basis": "full_text"
 },
 {
  "id": "il1b_il6_hscrp_jad_2025",
  "year": 2025,
  "title": "Enhancing predictive accuracy for antidepressant response in depressive disorders: The additive value of interleukin-1β and interleukin-6 alongside hsCRP",
  "title_ko": "hsCRP에 IL-1β·IL-6를 더한 항우울제 반응 예측",
  "venue": "J Affect Disord",
  "doi": "10.1016/j.jad.2024.12.091",
  "pmid": "39732400",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 3,
  "methods_tag": [
   "bio",
   "stat",
   "trial"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "373",
  "pages": "94-98",
  "question": "기저 혈청 hsCRP에 IL-1β와 IL-6 측정을 추가하면 우울장애 환자의 12주 항우울제 치료 관해 예측이 향상되는가?",
  "motivation": "hsCRP는 일상 검사로 측정되지만 IL-1β·IL-6는 정신과에서 잘 측정되지 않아 염증 상태를 보다 포괄적으로 반영할 가능성이 간과된다. 선행 연구에서 각 표지자와 관해의 개별 연관은 확인했으나 표지자 간 상호작용과 결합 예측력은 검토되지 않았다.",
  "conclusion_ko": "기저 hsCRP에 IL-1β와 IL-6를 함께 측정하면 항우울제 치료 반응 예측 정확도가 유의하게 향상되며, 개인 염증 프로파일에 기반한 맞춤 치료에 기여할 수 있다. 다양한 집단에서의 반복 연구와 무작위 대조시험이 필요하다.",
  "key_results": [
   {
    "label": "12주 관해율",
    "value": 45.1,
    "ci": null,
    "comparator": null,
    "page": 95
   },
   {
    "label": "hsCRP 높음 vs 낮음 관해 보정 OR",
    "value": 0.54,
    "ci": "0.42-0.70",
    "comparator": null,
    "page": 96
   },
   {
    "label": "IL-1β 높음 vs 낮음 관해 보정 OR",
    "value": 0.69,
    "ci": "0.54-0.89",
    "comparator": null,
    "page": 96
   },
   {
    "label": "IL-6 높음 vs 낮음 관해 보정 OR",
    "value": 0.76,
    "ci": "0.59-0.98",
    "comparator": null,
    "page": 96
   },
   {
    "label": "IL-1β 높은 군에서 hsCRP 높음 vs 낮음 관해 OR",
    "value": 0.33,
    "ci": "0.22-0.49",
    "comparator": {
     "label": "IL-6 높은 군",
     "value": 0.36
    },
    "page": 96
   },
   {
    "label": "hsCRP 단독 NNT",
    "value": 5.68,
    "ci": null,
    "comparator": null,
    "page": 96
   },
   {
    "label": "hsCRP + IL-1β NNT",
    "value": 4.46,
    "ci": null,
    "comparator": {
     "label": "hsCRP 단독",
     "value": 5.68
    },
    "page": 96
   },
   {
    "label": "hsCRP + IL-6 NNT",
    "value": 4.41,
    "ci": null,
    "comparator": {
     "label": "hsCRP 단독",
     "value": 5.68
    },
    "page": 96
   },
   {
    "label": "hsCRP×IL-1β 상호작용 Wald",
    "value": 8.593,
    "ci": null,
    "comparator": {
     "label": "hsCRP×IL-6 Wald",
     "value": 5.754
    },
    "page": 97
   }
  ],
  "limitations": [
   "염증 표지자를 기저 시점에만 측정해 치료 중 변화의 영향을 평가할 수 없다.",
   "단계적 약물치료에서 여러 항우울제를 사용해 표지자의 특이적 예측 효과 판단이 복잡해진다.",
   "예산 제약으로 IL-8을 포함하지 못했다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 (MAKE BETTER); Global Clinical Central Lab 혈청 분석",
   "n": "1,086명 (기저 1,262명 중 혈액 제공 1,094명)",
   "period": "2012-03 ~ 2017-04 모집, 12주 추적"
  },
  "design": "naturalistic prospective cohort (12-week stepwise pharmacotherapy); short communication",
  "methods": [
   "serum hsCRP (Tina-quant latex high sensitivity assay), IL-1β and IL-6 (Human High Sensitivity T Cell Magnetic Bead Panel)",
   "hsCRP threshold 1.0 mg/L; median split for IL-1β (1.11 pg/mL) and IL-6 (1.65 pg/mL)",
   "remission defined as HAMD <= 7 at 12 weeks",
   "t-tests and chi-square tests",
   "Spearman correlation",
   "binary and multinomial logistic regression with interaction terms (Wald)",
   "number needed to treat (NNT)"
  ],
  "validation": [
   "covariate adjustment"
  ],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing antidepressant Treatment Effect and Response (MAKE BETTER) initiative (cris.nih.go.kr KCT0001332)",
  "source_basis": "full_text"
 },
 {
  "id": "tnf_serotonin_pnpbp_2025",
  "year": 2025,
  "title": "Exploring the combined effects of serum tumor necrosis factor-alpha and serotonin on antidepressant efficacy in depression: A 12-week prospective analysis",
  "title_ko": "TNF-α와 세로토닌의 항우울제 효과 결합 영향",
  "venue": "Prog Neuropsychopharmacol Biol Psychiatry",
  "doi": "10.1016/j.pnpbp.2025.111328",
  "pmid": "40064282",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 1,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Kim H-Y",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "138",
  "pages": "111328",
  "question": "기저 혈청 TNF-α와 세로토닌 수준의 상호작용이 우울장애 환자의 12주 항우울제 치료 관해를 예측하는가?",
  "motivation": null,
  "conclusion_ko": "면역(TNF-α)과 세로토닌계 바이오마커를 함께 평가하면 항우울제 치료 결과 예측을 향상시킬 수 있으며, 이는 개인 맞춤 치료 전략에 기여할 수 있다.",
  "key_results": [
   {
    "label": "분석 대상 환자 수",
    "value": "1086",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "s5-HT 낮은 군에서 sTNF-α 상승과 비관해",
    "value": null,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "sTNF-α × s5-HT 상호작용",
    "value": null,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "단계적 항우울제 치료 자연주의 연구에 등록된 우울장애 환자",
   "n": "1,086명",
   "period": null
  },
  "design": "prospective naturalistic cohort (12-week stepwise antidepressant treatment)",
  "methods": [
   "baseline serum TNF-α and serotonin",
   "HAMD remission ≤7 at 12 weeks",
   "logistic regression adjusted for sociodemographic and clinical covariates",
   "interaction analysis"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "serotonin_bdnf_psychres_2025",
  "year": 2025,
  "title": "Exploring the combined influence of serum serotonin and brain-derived neurotrophic factor on depression remission: Short- and long-term responses",
  "title_ko": "세로토닌·BDNF 조합과 단기·장기 관해",
  "venue": "Psychiatry Res",
  "doi": "10.1016/j.psychres.2025.116741",
  "pmid": "41014653",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 1,
  "methods_tag": [
   "stat",
   "trial"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "353",
  "pages": "116741",
  "question": "기저 혈청 세로토닌과 BDNF가 각각 그리고 상호작용하여 12주·12개월 항우울제 관해를 예측하는가?",
  "motivation": null,
  "conclusion_ko": "기저 혈청 세로토닌과 BDNF가 모두 낮은 조합은 12개월 관해 감소를 강하게 예측하며, 장기 우울 결과 향상을 위한 개인화 임상 관리에 쓰일 가능성이 있다.",
  "key_results": [
   {
    "label": "분석 환자 수",
    "value": 1086,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "바이오마커 조합 시 NNT (장기 관해 불량 위험 식별)",
    "value": 6.8,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "단계적 항우울제 치료를 받은 우울장애 환자",
   "n": "1,086명",
   "period": null
  },
  "design": "prospective cohort (stepwise antidepressant pharmacotherapy)",
  "methods": [
   "serum serotonin",
   "serum BDNF",
   "HAMD",
   "logistic regression",
   "multinomial regression",
   "Number Needed to Treat"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "il1b_bdnf_euroneuro_2025",
  "year": 2025,
  "title": "Exploring the prospective association of serum interleukin-1β and brain-derived neurotrophic factor with antidepressant treatment response",
  "title_ko": "혈청 IL-1β·BDNF와 항우울제 치료 반응",
  "venue": "Eur Neuropsychopharmacol",
  "doi": "10.1016/j.euroneuro.2025.03.004",
  "pmid": "40222150",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 7,
  "methods_tag": [
   "bio",
   "stat",
   "trial"
  ],
  "authors": [
   "Cho C-Y",
   "Jeon JH",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "95",
  "pages": "33-39",
  "question": "기저 혈청 IL-1β와 BDNF 수준(및 그 상호작용)이 우울장애 환자의 12주 항우울제 치료 관해를 예측하는가?",
  "motivation": "우울증 환자 중 급성기 치료에서 관해에 이르는 비율은 약 3분의 1에 불과해 치료 반응을 예측할 바이오마커가 필요하다. IL-1β와 BDNF 각각의 예측력에 대한 기존 결과는 엇갈리며, 염증성 사이토카인과 신경가소성 표지자의 상호작용을 항우울제 반응 맥락에서 직접 본 연구는 드물다.",
  "conclusion_ko": "기저 혈청 IL-1β가 높고 BDNF가 낮은 조합은 12주 관해율 저하와 유의하게 연관되었으며, 이는 염증계와 신경가소성계의 상호작용이 항우울제 치료 결과에 영향을 미침을 시사한다. 이러한 바이오마커를 임상에 통합하면 치료 반응 평가를 개선할 수 있다.",
  "key_results": [
   {
    "label": "분석 대상자 수",
    "value": 1086,
    "ci": null,
    "comparator": null,
    "page": 35
   },
   {
    "label": "12주 관해 도달",
    "value": "490 (45.1%)",
    "ci": null,
    "comparator": null,
    "page": 35
   },
   {
    "label": "기저 sIL-1β–sBDNF 상관 (Spearman rho)",
    "value": -0.011,
    "ci": null,
    "comparator": null,
    "page": 35
   },
   {
    "label": "고 sIL-1β(이분형) 관해 OR, 보정",
    "value": 0.68,
    "ci": "0.53–0.87",
    "comparator": {
     "label": "unadjusted OR",
     "value": 0.63
    },
    "page": 37
   },
   {
    "label": "관해율: 고 sIL-1β vs 저 sIL-1β",
    "value": "39.5%",
    "ci": null,
    "comparator": {
     "label": "lower sIL-1β",
     "value": "50.8%"
    },
    "page": 37
   },
   {
    "label": "sIL-1β(연속형) 관해 OR, 보정",
    "value": 0.8,
    "ci": "0.69–0.93",
    "comparator": {
     "label": "unadjusted OR",
     "value": 0.78
    },
    "page": 37
   },
   {
    "label": "저 sBDNF(이분형) 관해 OR, 보정 (비유의)",
    "value": 1.09,
    "ci": "0.85–1.40",
    "comparator": {
     "label": "unadjusted OR",
     "value": 0.96
    },
    "page": 37
   },
   {
    "label": "저 sBDNF 하위군에서 고 sIL-1β 관해 OR (보정)",
    "value": 0.51,
    "ci": "0.35–0.73",
    "comparator": {
     "label": "고 sBDNF 하위군 OR",
     "value": 0.86
    },
    "page": 37
   },
   {
    "label": "12주 관해율 (sBDNF ≤23.3: 저 vs 고 sIL-1β)",
    "value": "36.2%",
    "ci": null,
    "comparator": {
     "label": "lower sIL-1β in lower sBDNF",
     "value": "53.4%"
    },
    "page": 37
   },
   {
    "label": "sIL-1β × sBDNF 상호작용 (연속형, Wald)",
    "value": 3.915,
    "ci": null,
    "comparator": null,
    "page": 36
   },
   {
    "label": "민감도 분석(알레르기·면역질환 18명 제외) 상호작용 Wald",
    "value": "4.005 (binary) / 4.032 (continuous)",
    "ci": null,
    "comparator": null,
    "page": 36
   }
  ],
  "limitations": [
   "염증 바이오마커를 기저 시점에만 측정해 치료 중 변화를 볼 수 없다.",
   "자연주의적 설계로 표준화된 치료 프로토콜이 없고, 단계적 약물치료에서 다양한 항우울제 사용이 바이오마커-반응 연관 해석을 복잡하게 한다.",
   "단일기관 연구로 일반화에 한계가 있다.",
   "항염증제 복용 여부를 체계적으로 평가하지 않았다.",
   "혈청 측정치는 중추신경계 활동의 간접 지표로, 중추신경계 효과는 가설적이다."
  ],
  "data": {
   "source": "전남대학교병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE BETTER), 단계적 항우울제 치료",
   "n": "1,086명 (기저 1,262명 중 혈액 제공 1,094명)",
   "period": "2012-03 ~ 2017-04 모집, 12주 추적"
  },
  "design": "prospective naturalistic cohort (12-week stepwise antidepressant pharmacotherapy)",
  "methods": [
   "serum IL-1β (Human High Sensitivity T Cell Magnetic Bead Panel, EMD Millipore)",
   "serum BDNF (Quantikine ELISA, R&D Systems; mature BDNF)",
   "median split (sIL-1β 1.11 pg/mL; sBDNF 23.3 ng/mL)",
   "HAMD ≤7 remission at 12 weeks",
   "logistic regression (unadjusted/adjusted)",
   "multinomial logistic regression for interaction",
   "Spearman correlation",
   "sensitivity analysis excluding allergic/immune disease"
  ],
  "validation": [
   "covariate-adjusted models",
   "sensitivity analysis (excluding allergic/immune diseases)",
   "binary and continuous biomarker specifications"
  ],
  "cohort_or_program": "MAKE Biomarker Discovery for Enhancing Antidepressant Treatment Effect and Response (MAKE BETTER) program (KCT0001332; CNUH 2012-014)",
  "source_basis": "full_text"
 },
 {
  "id": "tnf_functional_status_bjpo_2025",
  "year": 2025,
  "title": "Functional status modifies the impact of tumor necrosis factor-alpha on depression treatment response",
  "title_ko": "기능 수준이 조절하는 TNF-α와 항우울제 관해",
  "venue": "BJPsych Open",
  "doi": "10.1192/bjo.2025.10837",
  "pmid": "40955462",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q2"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 1,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Kim H-Y",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "11",
  "pages": "e215",
  "question": "기저 혈청 TNF-α 수준이 12주 항우울제 치료 관해에 미치는 영향을 사회·직업적 기능 수준(SOFAS)이 조절하는가?",
  "motivation": "TNF-α가 항우울제 반응을 예측하는지에 대한 선행 연구와 메타분석 결과가 일관되지 않아, 이 관계를 설명할 조절 요인을 찾을 필요가 있다. 기능 수준은 염증 표지자의 부정적 영향을 완충할 수 있다고 제안되었으나 TNF-α와 치료 결과의 관계에서 그 조절 효과는 충분히 연구되지 않았다.",
  "conclusion_ko": "기능 수준은 TNF-α와 직접 상관이 없음에도 TNF-α와 항우울제 치료 반응의 관계를 유의하게 조절하며, 기능 수준을 함께 고려하면 TNF-α의 치료 결과 예측력이 높아질 수 있다.",
  "key_results": [
   {
    "label": "12주 관해율",
    "value": "490/1086 (45.1%)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "sTNF-α 높은 군(이진) 12주 관해 OR, 보정",
    "value": "0.77",
    "ci": "0.60–0.99",
    "comparator": {
     "label": "sTNF-α 낮은 군 (reference)",
     "value": null
    },
    "page": null
   },
   {
    "label": "sTNF-α(연속) 12주 관해 OR, 보정",
    "value": "0.75",
    "ci": "0.57–0.98",
    "comparator": null,
    "page": null
   },
   {
    "label": "SOFAS ≤60 군 12주 관해 OR, 보정",
    "value": "0.70",
    "ci": "0.53–0.92",
    "comparator": {
     "label": "SOFAS >60 (reference)",
     "value": null
    },
    "page": null
   },
   {
    "label": "sTNF-α × SOFAS 연속변수 상호작용",
    "value": "Wald = 4.266, p = 0.045",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "sTNF-α와 SOFAS 상관",
    "value": "rho = −0.048 (p = 0.110)",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "sTNF-α 중앙값",
    "value": "0.593 pg/mL",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "sTNF-α의 종단적 측정 자료가 없어 치료 변화와의 연관을 평가하지 못함",
   "자연주의적 설계로 치료 내용에 변이가 있을 수 있음",
   "주분석에서 기저 우울 중증도(HRSD)를 직접 보정하지 않음",
   "SOFAS가 회복탄력성 외에 만성도·성격·스트레스 등 여러 요인을 반영할 수 있고 잔여 교란 가능",
   "염증에 영향을 주는 동반 질환이나 약물을 체계적으로 평가하지 않음"
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE BETTER), 단계적 항우울제 치료",
   "n": "1,086명 (초기 평가 1,262명, sTNF-α 측정 1,094명)",
   "period": "2012-03 ~ 2017-04 모집"
  },
  "design": "prospective naturalistic cohort (12-week stepwise antidepressant treatment)",
  "methods": [
   "serum TNF-α (Quantikine HS ELISA), median split and continuous",
   "SOFAS (>60 vs ≤60, continuous)",
   "HRSD remission ≤7 at 12 weeks",
   "logistic regression (unadjusted/adjusted)",
   "multinomial logistic regression for interaction",
   "gender-stratified analyses",
   "Spearman correlation"
  ],
  "validation": [],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing antidepressant Treatment Effect and Response (MAKE BETTER); registry KCT0001332",
  "source_basis": "full_text"
 },
 {
  "id": "ghrelin_social_support_pne_2025",
  "year": 2025,
  "title": "Interaction between ghrelin and social support predicts antidepressant treatment outcomes in patients with depression",
  "title_ko": "그렐린·사회적 지지와 항우울제 치료결과",
  "venue": "Psychoneuroendocrinology",
  "doi": "10.1016/j.psyneuen.2025.107609",
  "pmid": "40974806",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q2"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Kim H",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "181",
  "pages": "107609",
  "question": "기저 사회적 지지와 혈청 그렐린이 우울장애 환자의 12주 관해와 24개월 재발에 상호작용적으로 영향을 미치는가?",
  "motivation": null,
  "conclusion_ko": "항우울제 치료결과 예측에서 생물심리사회적 상호작용을 고려해야 하며, 사회적 지지와 그렐린을 함께 평가하면 위험 층화와 개인화 개입에 도움이 될 수 있다.",
  "key_results": [
   {
    "label": "12주 치료 표본",
    "value": "N = 1086",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "24개월 재발 추적 표본",
    "value": "N = 710",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "사회적 지지·그렐린 단독 효과",
    "value": "유의하지 않음",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "상호작용",
    "value": "낮은 사회적 지지군에서만 낮은 그렐린이 불량 결과와 연관",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "일상 진료 조건에서 치료받은 우울장애 환자 전향적 자연주의 코호트",
   "n": "12주 1,086명, 24개월 재발 추적 710명",
   "period": null
  },
  "design": "prospective naturalistic cohort",
  "methods": [
   "Multidimensional Scale of Perceived Social Support",
   "serum ghrelin",
   "logistic regression with interaction analysis, covariate-adjusted"
  ],
  "validation": [
   "covariate-adjusted models",
   "short-term (12-week) and long-term (24-month) outcomes"
  ],
  "cohort_or_program": "MAKE BETTER (inferred: same 1,086-patient naturalistic antidepressant cohort at Chonnam; program not named in abstract)",
  "source_basis": "abstract"
 },
 {
  "id": "suicide_target_timeseries_jkms_2025",
  "year": 2025,
  "title": "Practicability of Suicide Reduction Target in Korean Suicide Prevention Policy: Insights From Time Series Analysis",
  "title_ko": "자살예방정책 감소 목표의 실현 가능성",
  "venue": "J Korean Med Sci",
  "doi": "10.3346/jkms.2025.40.e59",
  "pmid": "40390581",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P_parallel",
  "cites": 8,
  "methods_tag": [
   "ts"
  ],
  "authors": [
   "Ryu S",
   "Baek S-H",
   "Jhon M",
   "Kim H",
   "Lee J-Y",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "40",
  "pages": "e59",
  "question": "제5차 자살예방기본계획(2023-2027)의 2027년 자살률 18.2명/10만 명 목표가 과거 정책 효과와 현재 추세에 비추어 달성 가능한가?",
  "motivation": "한국의 자살예방정책은 매번 감소 목표에 미달했으며, 목표 설정에 객관적 근거가 부족하다는 비판이 있었다. 이에 직전 정책(NAPSP)의 효과를 추정하고 이를 반영해 2027년 자살률을 예측함으로써 현 정책 목표의 실현 가능성을 평가하고자 했다.",
  "conclusion_ko": "현재 추세와 과거 정책의 제한된 효과를 고려할 때 2027년 자살률 18.2명/10만 명 목표는 달성되기 어려워 보인다. 자살예방정책의 목표는 근거 기반이며 달성 가능하고 책임을 물을 수 있어야 하며, 정부는 정책 효과를 평가해 목표를 더 현실적인 수준으로 조정해야 한다.",
  "key_results": [
   {
    "label": "NAPSP 기간 실제-반사실 월평균 자살자 차이 (베이지안)",
    "value": 155.9,
    "ci": [
     133.9,
     177.9
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "NAPSP 기간 총 초과 자살자 수 (베이지안)",
    "value": 9354.6,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "반사실 대비 차이 비율 평균 (베이지안, %)",
    "value": 16.8,
    "ci": [
     14.3,
     19.4
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "NAPSP 기간 월평균 차이 (ARIMA)",
    "value": 127.3,
    "ci": [
     108.6,
     146.1
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "반사실 대비 차이 비율 평균 (ARIMA, %)",
    "value": 13.1,
    "ci": [
     11.1,
     15.2
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "2027년 예측 자살률 (베이지안, /10만)",
    "value": 23.5,
    "ci": null,
    "comparator": {
     "label": "정책 목표",
     "value": 18.2
    },
    "page": 4
   },
   {
    "label": "2027년 예측 자살률 (ARIMA, /10만)",
    "value": 23.9,
    "ci": null,
    "comparator": {
     "label": "정책 목표",
     "value": 18.2
    },
    "page": 4
   },
   {
    "label": "목표(18.2) 미만에 도달한 2027 시뮬레이션 수 (베이지안, 1,000회 중)",
    "value": 5,
    "ci": null,
    "comparator": {
     "label": "ARIMA 시뮬레이션",
     "value": 0
    },
    "page": 4
   },
   {
    "label": "2023년 잠정 자살률 (/10만)",
    "value": 26.9,
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "과거 자살 자료에 기반한 통계 모형이므로 확정적 결과로 볼 수 없고, 자료 기간과 모형 방법에 따라 결과가 달라질 수 있다.",
   "제5차 계획의 효과가 직전 정책(NAPSP)과 같다고 가정했으며, 현 정책이 더 큰 효과를 낼 가능성도 있다.",
   "자살률에 영향을 줄 수 있는 사회경제적 변화를 고려하지 않았다."
  ],
  "data": {
   "source": "통계청 KOSIS 월별 자살 사망자 수(2011-2022 확정, 2023 잠정) 및 연앙·추계 인구",
   "n": "월별 국가 자살 통계 (2011-2023)",
   "period": "2011-2023 (예측 2023-2027)"
  },
  "design": "interrupted time series analysis and forecasting (national statistics)",
  "methods": [
   "interrupted time series",
   "Bayesian negative binomial regression (brms)",
   "ARIMA (auto.arima)",
   "1,000 simulations per model",
   "point prediction"
  ],
  "validation": [],
  "cohort_or_program": "Korean Statistical Information Service (KOSIS) national monthly suicide statistics; Fifth Master Plan for Suicide Prevention (2023-2027)",
  "source_basis": "full_text"
 },
 {
  "id": "psg_sleep_ml_2025",
  "year": 2025,
  "title": "Predicting polysomnography-derived sleep efficiency and total sleep time using clinical questionnaires: a machine learning approach",
  "title_ko": "설문으로 수면다원검사 지표 예측",
  "venue": null,
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 1,
  "methods_tag": [],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "multibiomarker_relapse_pnpbp_2025",
  "year": 2025,
  "title": "Serum multi-biomarkers for predicting relapse in patients with depressive disorders under psychopharmacotherapy",
  "title_ko": "혈청 다중 바이오마커로 우울증 재발 예측",
  "venue": "Prog Neuropsychopharmacol Biol Psychiatry",
  "doi": "10.1016/j.pnpbp.2025.111360",
  "pmid": "40199415",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 1,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Kim M-G",
   "Shin I-S"
  ],
  "volume": "138",
  "pages": "111360",
  "question": "기저 혈청 다중 바이오마커 패널이 약물치료 중인 우울장애 외래환자의 24개월 내 재발을 예측하는가?",
  "motivation": "우울증 재발을 효과적으로 예측하는 바이오마커는 아직 확립되지 않았다.",
  "conclusion_ko": "다중 혈청 바이오마커 패널을 결합하면 우울증 재발 예측력을 유의하게 높일 수 있으며, 다양한 집단에서의 추가 검증이 필요하다.",
  "key_results": [
   {
    "label": "기저 평가 환자 수",
    "value": "1094",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12주 반응자 수",
    "value": "823",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "24개월 재발 추적 대상",
    "value": "710",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "4개 바이오마커(코르티솔, hs-CRP, TNF-α, BDNF) 합산점수와 재발 연관",
    "value": "P < 0.001",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "다양한 집단과 환경에서의 추가 검증이 필요함"
  ],
  "data": {
   "source": "한국 대학병원 외래 우울장애 환자",
   "n": "기저 1,094명; 12주 반응자 823명; 재발 추적 710명",
   "period": "2012-03 ~ 2017-04 모집, 24개월 추적"
  },
  "design": "prospective naturalistic cohort (24-month follow-up)",
  "methods": [
   "14 serum biomarkers at baseline",
   "HAMD response ≤14 at 12 weeks, relapse HAMD >14 every 3 months",
   "logistic regression adjusted for covariates",
   "combined biomarker score"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "sex_specific_biomarkers_cpn_2025",
  "year": 2025,
  "title": "Sex-specific Serum Biomarker Associations with Antidepressant Treatment Outcomes in Depressive Disorders",
  "title_ko": "성별에 따른 혈청 바이오마커와 관해",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.25.1331",
  "pmid": "41582473",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 1,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Kim M-G",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "24",
  "pages": "106-117",
  "question": "14개 기저 혈청 바이오마커가 12주·12개월 항우울제 관해를 성별에 따라 다르게 예측하는가?",
  "motivation": "우울증의 생물학적 기전은 성별에 따라 다르다는 근거가 쌓이고 있으나, 성별 특이 바이오마커 연구는 대부분 면역 지표에 집중되었다. 대사·신경영양·신경전달·내분비·영양 체계에서 성별-바이오마커 상호작용을 살핀 연구는 적다.",
  "conclusion_ko": "세로토닌·렙틴·코르티솔·엽산의 기저 혈청 수준이 12주·12개월 관해와 성별 특이적 연관을 보여, 성별과 치료 단계에 맞춘 바이오마커 기반 개인화 치료 가능성을 시사하나 탐색적 결과로 반복 검증이 필요하다.",
  "key_results": [
   {
    "label": "기저 평가 환자 수",
    "value": 1262,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "분석 환자 수",
    "value": 1086,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "여성 비율(%)",
    "value": 68.6,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12주 관해율(%)",
    "value": 45.1,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12개월 관해율(%)",
    "value": 70.7,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "보정 공변량 수",
    "value": 9,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "자연주의적 설계로 개별 항우울제 효과를 평가할 수 없었다.",
   "다중비교 보정을 하지 않아 1종 오류 가능성이 있다.",
   "바이오마커를 기저 시점에만 측정했다.",
   "성호르몬 자료(월경주기, 폐경 상태)를 수집하지 않았다.",
   "MDD 외 진단을 포함해 진단적 이질성이 있다.",
   "치료 요법이 다양해 약물군별 반응과 바이오마커 효과를 분리하기 어렵다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE program)",
   "n": "1,086명(12개월 분석 884명)",
   "period": "2012년 3월-2017년 4월 등록"
  },
  "design": "prospective naturalistic cohort",
  "methods": [
   "14 serum biomarkers (hsCRP, TNF-α, IL-1β, IL-6, IL-4, IL-10, leptin, ghrelin, total cholesterol, BDNF, serotonin, cortisol, folate, homocysteine)",
   "HAMD",
   "binary logistic regression",
   "multinomial logistic regression (sex interaction)",
   "sex-stratified analysis",
   "Mann-Whitney U"
  ],
  "validation": [],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing Antidepressant Treatment Effect and Response (MAKE BETTER) program",
  "source_basis": "full_text"
 },
 {
  "id": "speech_depression_ijnp_abs_2025",
  "year": 2025,
  "title": "Toward effective speech-based depression recognition: data balance and depressive symptom severity in AI approaches",
  "title_ko": null,
  "venue": "Int J Neuropsychopharmacol",
  "doi": null,
  "pmid": null,
  "type": "conference abstract",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [],
  "phase": null,
  "cites": 0,
  "methods_tag": [],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "smartphone_app_scz_2025",
  "year": 2025,
  "title": "Validity of a smartphone application for self-monitoring psychiatric symptoms in patients with schizophrenia",
  "title_ko": "조현병 환자 증상 자가기록 스마트폰 앱의 타당도",
  "venue": "Digit Health",
  "doi": "10.1177/20552076251317556",
  "pmid": "39896266",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P_parallel",
  "cites": 5,
  "methods_tag": [
   "psy"
  ],
  "authors": [
   "Kim S-W",
   "Kim J-K",
   "Jhon M",
   "Kim J-W",
   "Ryu S",
   "Lee J-Y",
   "Kim J-M"
  ],
  "volume": "11",
  "pages": "20552076251317556",
  "question": "조현병 범주 장애 청년 환자가 스마트폰 앱으로 자가 평정한 핵심 증상과 스트레스 점수가 신뢰롭고 타당한가?",
  "motivation": "조현병은 재발이 잦아 증상 악화의 조기 발견이 중요하지만 기존 모니터링은 주기적 진료 평가에 의존해 진료 사이의 변화를 놓칠 수 있다. 많은 앱이 있어도 조현병 환자의 자가 모니터링 앱에 대한 신뢰도·타당도 근거는 부족했다.",
  "conclusion_ko": "스마트폰 앱으로 핵심 증상과 스트레스를 자가 모니터링하는 것은 조현병 환자에서 타당하고 신뢰할 만하며, 증상 관리 향상과 재발 조기 발견에 쓰일 잠재력이 있다.",
  "key_results": [
   {
    "label": "참여 환자 수",
    "value": 53,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "16주 추적 평가 완료 n(%)",
    "value": "46 (86.8)",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "검사-재검사 ICC 범위(5개 영역, 초록)",
    "value": "0.741-0.876",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "환청 ICC",
    "value": 0.876,
    "ci": [
     0.782,
     0.929
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "우울 ICC",
    "value": 0.74,
    "ci": [
     0.544,
     0.851
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "앱 불안 평정-GAD-7 Spearman rho (기저/8주/16주)",
    "value": "0.770 / 0.679 / 0.646",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "앱 망상 평정-ESI Spearman rho (기저/8주/16주)",
    "value": "0.418 / 0.508 / 0.311",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "앱 우울 평정-BDI Spearman rho (기저/8주/16주)",
    "value": "0.546 / 0.479 / 0.610",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "앱 우울 단일문항의 BDI≥16 판별 AUC",
    "value": 0.829,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "절단점 5의 민감도/특이도(%)",
    "value": "69.2 / 85.0",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "절단점 5의 NPV/PPV(%)",
    "value": "89.5 / 60.0",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "BDI 기준 임상적 우울 n(%)",
    "value": "12 (23.5)",
    "ci": null,
    "comparator": null,
    "page": 3
   }
  ],
  "limitations": [
   "표본이 비교적 작고 청년 조현병 범주 장애 환자로 한정되어 고령·만성 환자 등으로 일반화하기 어렵다.",
   "16주 추적은 장기적 변화나 악화를 보기에 충분하지 않을 수 있다.",
   "치료 순응도를 직접 모니터링하지 않았다."
  ],
  "data": {
   "source": "Mindlink(광주 북구 지역사회 청년 조기개입센터) 앱 'Heal Your Mind' 증상 기록 모듈 사용자",
   "n": "53명",
   "period": "2017년 6월-2022년 3월"
  },
  "design": "prospective observational study (brief communication)",
  "methods": [
   "11-point Likert single-item app self-ratings",
   "ICC (test-retest)",
   "Spearman correlation",
   "ROC/AUC",
   "ESI",
   "HPSVQ",
   "BDI",
   "GAD-7",
   "PSS",
   "CRDPSS",
   "PANSS G2"
  ],
  "validation": [
   "test-retest reliability (baseline vs 1 week)",
   "concurrent validity at baseline, 8 and 16 weeks",
   "ROC against BDI≥16"
  ],
  "cohort_or_program": "Mindlink (Gwangju Bukgu community-based early intervention centre) - Heal Your Mind (HYM) app",
  "source_basis": "full_text"
 },
 {
  "id": "acma_depression_ieeeaccess_2024",
  "year": 2024,
  "title": "Additive Cross-Modal Attention Network (ACMA) for Depression Detection Based on Audio and Textual Features",
  "title_ko": "음성·텍스트 결합 우울 탐지 ACMA 모델",
  "venue": "IEEE Access",
  "doi": "10.1109/ACCESS.2024.3362233",
  "pmid": null,
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q5"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 80,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Iyortsuun NK",
   "Kim S-H",
   "Yang H-J",
   "Kim S-W",
   "Jhon M"
  ],
  "volume": "12",
  "pages": "20479-20489",
  "question": "정해진 설문 문항 없이 환자 발화의 음성과 텍스트를 결합해 우울증 여부와 PHQ-8 점수를 추정할 수 있는가?",
  "motivation": "PHQ-8/9 같은 설문은 환자가 솔직하게 답하지 않으면 오진이 생길 수 있어, 미리 정한 질문 없이 우울을 탐지할 방법이 필요하다. 또 표본이 작고 여러 데이터 출처를 결합하는 효과에 대한 연구가 더 필요하다.",
  "conclusion_ko": "제안한 ACMA 모델은 다른 연구와 비교할 만한 결과를 보였고, 미리 정한 설문 없이 텍스트·음성 단일 모드와 다중 모드 모두에서 우울 환자를 효과적으로 탐지할 수 있다고 저자들은 판단한다.",
  "key_results": [
   {
    "label": "DAIC-WOZ 분류 F1 (ACMA, 음성+텍스트)",
    "value": 0.82,
    "ci": null,
    "comparator": {
     "label": "Al Hanai et al. [18] A/T",
     "value": 0.77
    },
    "page": 7
   },
   {
    "label": "DAIC-WOZ 분류 Recall (ACMA)",
    "value": 0.86,
    "ci": null,
    "comparator": {
     "label": "Al Hanai et al. [18] A/T",
     "value": 0.71
    },
    "page": 7
   },
   {
    "label": "DAIC-WOZ 텍스트 BiLSTM+Attn F1",
    "value": 0.78,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "DAIC-WOZ 음성 BiLSTM+Attn F1",
    "value": 0.73,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "DAIC-WOZ 정확도 (텍스트/음성/결합, %)",
    "value": "72.7 / 69.7 / 75.8",
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "PHQ-8 회귀 MAE (텍스트)",
    "value": 3.96,
    "ci": null,
    "comparator": null,
    "page": 8
   },
   {
    "label": "PHQ-8 회귀 MAE (ACMA)",
    "value": 4.65,
    "ci": null,
    "comparator": {
     "label": "Al Hanai et al. [18] A/T",
     "value": 5.1
    },
    "page": 8
   },
   {
    "label": "PHQ-8 회귀 MAE (음성)",
    "value": 5.08,
    "ci": null,
    "comparator": null,
    "page": 8
   },
   {
    "label": "EATD-Corpus ACMA F1",
    "value": 0.7,
    "ci": null,
    "comparator": {
     "label": "Shen et al. [35]",
     "value": 0.71
    },
    "page": 10
   },
   {
    "label": "EATD-Corpus ACMA 정확도 (%)",
    "value": 57.6,
    "ci": null,
    "comparator": null,
    "page": 10
   },
   {
    "label": "Attention 유무 비교 ACMA F1 (WA vs WoA)",
    "value": 0.8,
    "ci": null,
    "comparator": {
     "label": "without attention",
     "value": 0.78
    },
    "page": 8
   }
  ],
  "limitations": [
   "DAIC-WOZ는 우울 56명 대 비우울 133명으로 불균형하고 라벨 오류가 있으며 규모가 작다.",
   "EATD-Corpus도 클래스 불균형이 심해 성능에 영향을 준다.",
   "DAIC-WOZ 테스트셋 라벨이 공개되지 않아 개발셋으로 평가했다.",
   "향후 과제로 데이터 불균형 해결(SMOTE, ADASYN)을 남겼다."
  ],
  "data": {
   "source": "DAIC-WOZ (주 데이터), EATD-Corpus (외부 평가)",
   "n": "DAIC-WOZ 189 sessions; EATD-Corpus 162 students",
   "period": null
  },
  "design": "benchmark (model development on public datasets)",
  "methods": [
   "BiLSTM with attention",
   "additive cross-modal attention",
   "Universal Sentence Encoder",
   "Mel spectrogram",
   "resampling for imbalance"
  ],
  "validation": [
   "DAIC-WOZ development set",
   "secondary dataset (EATD-Corpus) stratified 3-fold CV"
  ],
  "cohort_or_program": "DAIC-WOZ; EATD-Corpus",
  "source_basis": "full_text"
 },
 {
  "id": "suicide_policy_its_jkna_2024",
  "year": 2024,
  "title": "Changes in Suicide Rate Trend after Implementation of Suicide Prevention Policy: Interrupted Time Series on the Fifth Master Plan",
  "title_ko": "제5차 자살예방 기본계획 후 자살률 추세",
  "venue": "J Korean Neuropsychiatr Assoc",
  "doi": "10.4306/jknpa.2024.63.4.237",
  "pmid": null,
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P_parallel",
  "cites": 1,
  "methods_tag": [
   "ts"
  ],
  "authors": [
   "Yoo S-H",
   "Baek S-H",
   "Jhon M",
   "Kim H",
   "Lee J-Y",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "63(4)",
  "pages": "237-245",
  "question": "제5차 자살예방 기본계획 시행 초기에 한국의 자살 추세가 정책 이전 추세에 비해 달라졌는가?",
  "motivation": "제5차 자살예방 기본계획은 2027년까지 자살률을 인구 10만 명당 18.2명으로 30% 낮추는 목표를 세웠다. 정책 시행 초기 효과를 시계열 자료로 점검할 필요가 있다.",
  "conclusion_ko": "제5차 자살예방 기본계획의 초기 효과는 특히 남성에서 증가하는 자살 추세를 억제하기에 불충분했으며, 남성에 초점을 둔 시의적절한 정책 대응이 필요하다.",
  "key_results": [
   {
    "label": "정책기간 남성 월평균 초과 자살 (하한)",
    "value": 86,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "정책기간 남성 월평균 초과 자살 (상한)",
    "value": 92,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "한국 월별 자살 사망 통계",
   "n": null,
   "period": "2011-01 ~ 2024-04 (정책기간 2023-01 ~ 2024-04)"
  },
  "design": "interrupted time series",
  "methods": [
   "quasi-Poisson regression",
   "ARIMA",
   "Prophet"
  ],
  "validation": [],
  "cohort_or_program": "Fifth Master Plan for Suicide Prevention (제5차 자살예방 기본계획)",
  "source_basis": "web_abstract"
 },
 {
  "id": "llm_counseling_chatbots_bibm_2024",
  "year": 2024,
  "title": "Comparative Study on the Performance of LLM-based Psychological Counseling Chatbots via Prompt Engineering Techniques",
  "title_ko": "프롬프트 기법별 LLM 상담 챗봇 성능 비교",
  "venue": "2024 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
  "doi": "10.1109/BIBM62325.2024.10822158",
  "pmid": null,
  "type": "conference full paper",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 13,
  "methods_tag": [
   "ml"
  ],
  "authors": [
   "Lee A",
   "Moon S",
   "Jhon M",
   "Kim J-W",
   "Kim D-K",
   "Kim JE",
   "Park K",
   "Jeon E"
  ],
  "volume": null,
  "pages": "7080-7082",
  "question": "제로샷·퓨샷·메타러닝·사고의 사슬(CoT)·새로 제안한 공감 메타체인(EMC) 등 프롬프트 엔지니어링 기법에 따라 GPT-4 기반 심리상담 챗봇의 상담 품질이 어떻게 달라지는가?",
  "motivation": "기존 상담 챗봇(Woebot, Tess, Wysa 등)은 정형화된 대화 스크립트와 의사결정 트리에 의존해 미리 정해진 응답만 제공한다. LLM 기반 챗봇은 개인화된 대화가 가능하므로, 프롬프트 엔지니어링으로 상담 기능을 개선하고 기법별 성능을 비교하고자 했다.",
  "conclusion_ko": "메타러닝과 CoT에 공감적 상담 전략을 통합한 EMC 방식이 주요 지표 전반에서 가장 우수했으며, LLM 기반 상담 챗봇이 개인화되고 자연스러운 상호작용을 제공할 수 있음을 보여준다. 다만 전문 상담에 쓰이려면 내담자의 자기성찰을 이끄는 개방형 질문 능력을 보강해야 한다.",
  "key_results": [
   {
    "label": "공감(Empathy) 점수: EMC vs 제로샷",
    "value": "4.8±0.45",
    "ci": null,
    "comparator": {
     "label": "zero-shot",
     "value": "3.2±0.84"
    },
    "page": 3
   },
   {
    "label": "평균 점수: EMC vs 퓨샷·메타러닝·CoT·제로샷",
    "value": 4.72,
    "ci": null,
    "comparator": {
     "label": "few-shot / meta-learning / CoT / zero-shot",
     "value": "4.40 / 4.36 / 3.80 / 3.56"
    },
    "page": 3
   },
   {
    "label": "평균 평가자 간 일치도(IAA, Krippendorff α): EMC",
    "value": 0.96,
    "ci": null,
    "comparator": {
     "label": "zero-shot / CoT",
     "value": "0.87 / 0.88"
    },
    "page": 2
   },
   {
    "label": "상호작용 지속성(Interaction Continuity): EMC vs 제로샷",
    "value": "4.6±0.55",
    "ci": null,
    "comparator": {
     "label": "zero-shot",
     "value": "2.8±1.10"
    },
    "page": 3
   },
   {
    "label": "유창성(Fluency): EMC",
    "value": "5.0±0.00",
    "ci": null,
    "comparator": {
     "label": "zero-shot / few-shot / CoT / meta-learning",
     "value": "4.0±1.00 / 4.6±0.55 / 4.0±1.41 / 4.6±0.55"
    },
    "page": 3
   },
   {
    "label": "평가 패널 구성",
    "value": "5명",
    "ci": null,
    "comparator": null,
    "page": 2
   }
  ],
  "limitations": [
   "EMC 챗봇의 대화 흐름이 내담자보다 챗봇 자신의 응답과 방향에 의해 주도되는 경향이 전문가에 의해 지적됨.",
   "점수는 다섯 기법 간 상대적 성능을 반영할 뿐 절대적 기술 우위의 지표로 해석해서는 안 됨.",
   "전문 상담에서는 자기성찰을 심화시키는 적절한 질문이 핵심이므로, 개방형 질문 능력 향상과 방향성 편향 감소가 향후 과제로 제시됨."
  ],
  "data": {
   "source": "OpenAI GPT-4.0에 기법별 기본 프롬프트를 설정한 뒤 단일 질문('Why does work never seem to end no matter how much I do it?')으로 상담 대화를 시작해 생성한 응답; 전문가 5인(1급 임상심리전문가 3명, 정신건강의학과 교수 2명) 평가",
   "n": "5개 프롬프트 기법 × 평가자 5명",
   "period": null
  },
  "design": "benchmark (expert human evaluation of prompt engineering methods)",
  "methods": [
   "GPT-4.0",
   "zero-shot prompting",
   "few-shot prompting",
   "meta-learning (role) prompting",
   "Chain of Thought",
   "Empathetic Meta-Chain (EMC)",
   "5-point expert rating",
   "Krippendorff's alpha"
  ],
  "validation": [
   "expert panel rating (5 raters)",
   "inter-annotator agreement (Krippendorff's alpha)"
  ],
  "cohort_or_program": "ETRI Honam region ICT convergence project (24ZK1100); MSIT WEIS System project for emotional workers' job stress management (24HK1600)",
  "source_basis": "full_text"
 },
 {
  "id": "multimodal_actigraphy_hrv_bibm_2024",
  "year": 2024,
  "title": "Evaluating the Effectiveness of Multi-Modal Data in Classifying Depressive Symptoms: Insights from Actigraphy, HRV, and Demographic Data",
  "title_ko": "액티그래피·HRV·인구학 자료 다중모달 우울 분류",
  "venue": "IEEE BIBM 2024",
  "doi": null,
  "pmid": null,
  "type": "conference full paper",
  "tier": "B",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 0,
  "methods_tag": [
   "ml"
  ],
  "authors": null,
  "volume": null,
  "pages": "IEEE Xplore document 10821744",
  "question": "액티그래피, 심박변이도(HRV), 인구학적 자료를 통합하면 우울 증상 분류 성능이 향상되는가?",
  "motivation": null,
  "conclusion_ko": "액티그래피·HRV·인구학 자료를 통합하면 성능이 약간 향상되었으며 특히 쉬운 과제(PHQ-9 ≥10 대 <5)에서 그러했으나, 어려운 과제(PHQ-9 <5 대 ≥5)에서는 여전히 성능 한계가 있었다.",
  "key_results": null,
  "limitations": [
   "더 어려운 과제(경계 기준 PHQ-9 5점)에서 성능 한계가 남아 있음"
  ],
  "data": {
   "source": "TREND-P dataset, Chonnam National University Hospital (actigraphy, demographic, HRV)",
   "n": "3,313",
   "period": "2021-2023"
  },
  "design": "cross-sectional classification (machine learning)",
  "methods": [
   "PHQ-9 threshold classification",
   "multimodal integration"
  ],
  "validation": [],
  "cohort_or_program": "TREND-P (Chonnam National University Hospital)",
  "source_basis": "web_abstract"
 },
 {
  "id": "elderly_living_alone_jksbtp_2024",
  "year": 2024,
  "title": "Factors associated with depression among elderly living alone and those living with a spouse in an urban area",
  "title_ko": "도시 독거·배우자 동거 노인의 우울 관련 요인",
  "venue": "J Korean Soc Biol Ther Psychiatry",
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "B",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 0,
  "methods_tag": [
   "stat"
  ],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": "도시 지역 독거노인과 배우자와 동거하는 노인에서 우울과 관련된 요인은 각각 무엇인가?",
  "motivation": null,
  "conclusion_ko": "독거노인에서는 심장질환이 우울의 위험요인, 종교가 보호요인이었고, KQOL-AD 점수가 높을수록 두 집단 모두에서 우울에 대한 보호요인이었다.",
  "key_results": null,
  "limitations": null,
  "data": {
   "source": "community-based cross-sectional survey, urban area, adults aged 60+ (per web search summary; unverified)",
   "n": null,
   "period": null
  },
  "design": "cross-sectional (community-based)",
  "methods": [
   "KQOL-AD"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "web_abstract"
 },
 {
  "id": "circadian_lymphocytes_crc_2024",
  "year": 2024,
  "title": "The moderating role of circadian gene polymorphisms in the relationship between sleep disturbance and circulating lymphocyte subsets in colorectal cancer patients",
  "title_ko": "대장암 환자 수면장애·림프구와 일주기 유전자",
  "venue": "J Psychosom Res",
  "doi": "10.1016/j.jpsychores.2023.111562",
  "pmid": "38113795",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 1,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim S-Y",
   "Ryu S",
   "Jhon M",
   "Kang H-J",
   "Lee J-Y",
   "Kim J-M",
   "Shin I-S",
   "Shim H-J",
   "Hwang JE",
   "Bae WK",
   "Choi H-W",
   "Shin MG",
   "Kim S-W"
  ],
  "volume": "177",
  "pages": "111562",
  "question": "FOLFOX 항암치료 중인 대장암 환자에서 수면장애와 림프구 아형 변화의 관계를 일주기 유전자 다형성이 조절하는가?",
  "motivation": null,
  "conclusion_ko": "특정 일주기 유전자 대립형을 가진 환자는 수면장애 시 면역 조절 이상에 더 취약할 수 있으며, FOLFOX 치료 중인 대장암 환자에서 수면장애 관리를 우선해야 한다.",
  "key_results": [
   {
    "label": "분석 환자 수",
    "value": "104",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "유의한 유전자×수면 상호작용 수",
    "value": "5",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "상호작용 추가 시 설명 분산 증가",
    "value": "5.7-10.7%",
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "FOLFOX 항암치료를 받는 대장암 환자(첫·마지막 주기 전날 채혈)",
   "n": "104명",
   "period": null
  },
  "design": "prospective longitudinal",
  "methods": [
   "PSQI global score",
   "SNPs rs2278749, rs3749474, rs2291738, rs17031614, rs2287161",
   "CD4+, CD8+, CD19+, CD16/56+ lymphocyte percentages",
   "moderated regression analysis",
   "FDR correction"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "abstract"
 },
 {
  "id": "vret_ptsd_cases_2023",
  "year": 2024,
  "title": "Two Cases of Posttraumatic Stress Disorder Caused by a Motor Vehicle Accident Treated with Virtual Reality Exposure Therapy",
  "title_ko": "교통사고 PTSD 가상현실 노출치료 2례",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.22.1036",
  "pmid": "38247426",
  "type": "case report",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 7,
  "methods_tag": [
   "trial",
   "case"
  ],
  "authors": [
   "Kim J-W",
   "Jhon M",
   "Kang H-J",
   "Kim S-W",
   "Kim J-M"
  ],
  "volume": "22(1)",
  "pages": "194-199",
  "question": "교통사고 후 PTSD 환자를 위해 개발한 6주 가상현실 노출치료(VRET) 프로토콜을 적용했을 때 증상이 어떻게 변하는가?",
  "motivation": "노출치료는 PTSD의 1차 치료지만 병원에서 교통사고 상황에 노출시킬 수 없어 상상 노출에 의존하며, 많은 환자가 외상 사건을 자세히 떠올리기 어렵거나 사고를 기억하지 못한다. VRET의 치료 효과에 대한 경험적 문헌이 부족해 VRET를 다듬고 사례를 통해 효과를 논의할 필요가 있다.",
  "conclusion_ko": "6주 VRET 후 두 환자 모두 PTSD 증상뿐 아니라 우울, 불안, 불면 증상도 호전되었다. 교통사고 PTSD에 대한 VRET의 향후 연구는 다수의 교란요인을 고려하기 위해 무작위 대조 설계를 사용해야 한다.",
  "key_results": [
   {
    "label": "Case A CAPS-5 총점 (치료 전→후)",
    "value": "20 → 3",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "Case B CAPS-5 총점 (치료 전→후)",
    "value": "19 → 3",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "Case A IES-R 총점 (전→후)",
    "value": "27 → 1",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "Case B IES-R 총점 (전→후)",
    "value": "25 → 4",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "Case A ISI (전→후)",
    "value": "17 → 1",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "Case B ISI (전→후)",
    "value": "13 → 9",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "HADS-D (A: 전→후 / B: 전→후)",
    "value": "A 6 → 4; B 8 → 3",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "HADS-A (A: 전→후 / B: 전→후)",
    "value": "A 6 → 5; B 5 → 1",
    "ci": null,
    "comparator": null,
    "page": 197
   },
   {
    "label": "회기당 VR 노출 시간",
    "value": "90초/회기 (전체 약 5분)",
    "ci": null,
    "comparator": null,
    "page": 196
   },
   {
    "label": "회기 길이",
    "value": "20-30분",
    "ci": null,
    "comparator": null,
    "page": 196
   }
  ],
  "limitations": [
   "사례연구 설계로 결과를 일반화할 수 없으며 개입의 '어떻게'를 충분히 다루지 못할 수 있다.",
   "두 환자 모두 PTSD 중증도가 비교적 경미하고 젊었다.",
   "VR 노출치료의 적응증과 금기가 확립되지 않아 환자와의 지속적 대화가 필요하다.",
   "각 환자의 사고 경험이 고유해 VR 자극이 모든 상황을 대표하지 못한다.",
   "치료 동기가 높은 환자를 모집했다(저자들은 강점으로 기술)."
  ],
  "data": {
   "source": "전남대학교병원 교통사고 후 PTSD 환자 2명 (사고 기억 없음 1명, 기억 있음 1명)",
   "n": "2명",
   "period": null
  },
  "design": "case report (2 cases, pre-post)",
  "methods": [
   "VRET combined with prolonged exposure (head-mounted display driving simulator, 360° 3D video)",
   "6-week manualized program (psychoeducation, cognitive therapy, stabilization technique, VR exposure)",
   "CAPS-5",
   "IES-R (Korean version)",
   "HADS-A/HADS-D",
   "ISI",
   "SUD scores",
   "sertraline 50→100 mg (Case A)"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "ml_review_mental_dx_2023",
  "year": 2023,
  "title": "A Review of Machine Learning and Deep Learning Approaches on Mental Health Diagnosis",
  "title_ko": "정신질환 진단의 머신러닝·딥러닝 접근 리뷰",
  "venue": "Healthcare (Basel)",
  "doi": "10.3390/healthcare11030285",
  "pmid": "36766860",
  "type": "review",
  "tier": "A",
  "role": "co-corresponding",
  "led": true,
  "questions": [
   "Q5"
  ],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 406,
  "methods_tag": [
   "case"
  ],
  "authors": [
   "Iyortsuun NK",
   "Kim S-H",
   "Jhon M",
   "Yang H-J",
   "Pant S"
  ],
  "volume": "11",
  "pages": "285",
  "question": "지난 10년간 조현병·우울·불안·양극성장애·PTSD·신경성 식욕부진증·ADHD 진단에 어떤 머신러닝·딥러닝 방법과 데이터셋이 쓰였고, 어떤 어려움이 있는가?",
  "motivation": "정신질환 진단과 치료 결과 예측에 머신러닝·딥러닝 활용이 늘고 있어, 향후 연구 방향을 잡으려면 기존 연구를 정리할 필요가 있다. 연구자들이 쓴 방법·데이터셋·한계를 한데 모아 실무자와 연구자에게 요약을 제공하고자 했다.",
  "conclusion_ko": "여러 연구에서 머신러닝과 딥러닝이 정신질환 진단에 우수한 결과를 보였으며, 성능 향상을 위해 고품질 데이터 확보와 더 설명 가능한 딥러닝 모델 개발이 필요하다.",
  "key_results": [
   {
    "label": "검토에 포함된 논문 수",
    "value": 33,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "데이터베이스 검색 초기 기록 수",
    "value": 361,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "적격성 평가 보고서 수 / 제외 수",
    "value": 180,
    "ci": null,
    "comparator": {
     "label": "제외",
     "value": 147
    },
    "page": 7
   },
   {
    "label": "불안/우울 논문 비율 (%)",
    "value": 31,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "ML만 사용한 논문 수",
    "value": 20,
    "ci": null,
    "comparator": {
     "label": "DL만 사용",
     "value": 8
    },
    "page": 22
   },
   {
    "label": "ADHD-200 활용 ML+DL 결합 연구 성능 범위 (%)",
    "value": "70-90",
    "ci": null,
    "comparator": null,
    "page": 22
   }
  ],
  "limitations": [
   "4개 검색 데이터베이스만 사용했고 영어 논문만 포함했다.",
   "7개 질환으로 범위를 한정해 자폐스펙트럼장애 등은 다루지 않았다.",
   "ML·DL의 치료 적용 연구는 포함하지 않았다."
  ],
  "data": {
   "source": "Google Scholar, PubMed, Scopus, Web of Science 검색 문헌",
   "n": "33편",
   "period": "2013-2022"
  },
  "design": "systematic review (PRISMA-guided narrative review)",
  "methods": [
   "PRISMA literature selection",
   "narrative synthesis",
   "dataset catalogue"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "actigraphy_classification_bibm_2023",
  "year": 2023,
  "title": "Challenge in classification of depressive symptoms using actigraphy data",
  "title_ko": "액티그래피 기반 우울 증상 분류의 어려움",
  "venue": "IEEE BIBM 2023",
  "doi": null,
  "pmid": null,
  "type": "conference full paper",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 2,
  "methods_tag": [],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "group_mct_cbt_2023",
  "year": 2023,
  "title": "Effectiveness of group metacognitive training and cognitive–behavioural therapy in a transdiagnostic manner for young patients with psychotic and non-psychotic disorders",
  "title_ko": "청년 정신질환 대상 초진단적 집단 MCT/CBT 효과",
  "venue": "Early Interv Psychiatry",
  "doi": "10.1111/eip.13288",
  "pmid": "35338567",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P_parallel",
  "cites": 15,
  "methods_tag": [
   "trial"
  ],
  "authors": [
   "Kim S-W",
   "Hyun S",
   "Kim J-K",
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Park C",
   "Lee J-Y",
   "Kim J-M"
  ],
  "volume": "17(1)",
  "pages": "29-38",
  "question": "원래 정신증을 위해 개발된 집단 메타인지훈련/인지행동치료(MCT/CBT)를 다양한 정신질환의 청년에게 초진단적으로 적용했을 때 삶의 질, 증상, 우울, 자존감, 스트레스, 사회기능, 사회인지가 개선되는가?",
  "motivation": "주요 정신질환은 청년기에 시작되고 초기 단계 증상은 진단 경계를 넘어 겹치므로 조기중재센터는 초진단적 접근이 필요하다. 지역사회에서 집단 MCT/CBT가 조현병 외 다양한 진단에 쓰이고 있으나 그 효과를 전향적으로 검증한 연구가 부족했다.",
  "conclusion_ko": "스트레스 관리를 포함한 집단 MCT/CBT는 조기중재센터에서 조현병을 포함한 다양한 정신질환 청년에게 초진단적으로 효과적으로 쓰일 수 있으며, 주관적 안녕감 개선은 자존감·회복탄력성 증가와 우울·스트레스 감소와 연관되었다. 대조군을 둔 다기관 전향 연구가 필요하다.",
  "key_results": [
   {
    "label": "등록/완료 인원",
    "value": 82,
    "ci": null,
    "comparator": {
     "label": "enrolled",
     "value": 110
    },
    "page": 1
   },
   {
    "label": "정신증 진단자 수",
    "value": 82,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "비정신증 진단자 수",
    "value": 28,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "참여 세션 수 중앙값",
    "value": 13,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "PANSS 총점 (전체, 종료 시)",
    "value": 47.3,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 58.4
    },
    "page": 5
   },
   {
    "label": "SWN-K (전체, 종료 시)",
    "value": 78.6,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 71.5
    },
    "page": 5
   },
   {
    "label": "BDI (전체, 종료 시)",
    "value": 8.5,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 13.3
    },
    "page": 5
   },
   {
    "label": "PSP (전체, 종료 시)",
    "value": 68.0,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 63.6
    },
    "page": 5
   },
   {
    "label": "RSES (전체, 종료 시)",
    "value": 25.5,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 23.4
    },
    "page": 5
   },
   {
    "label": "PSS (전체, 종료 시; 비유의)",
    "value": 17.7,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 18.7
    },
    "page": 5
   },
   {
    "label": "ERT (전체, 종료 시)",
    "value": 49.8,
    "ci": null,
    "comparator": {
     "label": "baseline",
     "value": 47.8
    },
    "page": 5
   },
   {
    "label": "SWN-K 변화와 BDI 변화 상관 r",
    "value": -0.612,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "SWN-K 변화와 PSS 변화 상관 r",
    "value": -0.614,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "SWN-K 변화와 RSE 변화 상관 r",
    "value": 0.623,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "SWN-K 변화와 BRS 변화 상관 r",
    "value": 0.446,
    "ci": null,
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": [
   "대조군이 없어 시간 효과와 인지 검사의 연습 효과를 고려해야 한다.",
   "비정신증 장애 참여자 수가 상대적으로 적었다.",
   "단일 기관에서 수행되었다."
  ],
  "data": {
   "source": "광주 지역사회 기반 조기중재센터 마인드링크(Mindlink) 이용 청년",
   "n": "110명 등록, 82명(74.5%) 완료 (15-35세)",
   "period": "2016-09 ~ 2020-01"
  },
  "design": "prospective single-arm pre-post study (no control group)",
  "methods": [
   "group MCT/CBT (15 sessions)",
   "paired t-test",
   "repeated-measures ANOVA (time x diagnosis group)",
   "Wilcoxon signed-rank test",
   "Pearson correlation",
   "PANSS",
   "PSP",
   "SWN-K",
   "BDI",
   "RSES",
   "BRS",
   "PSS",
   "AIHQ",
   "EQ-5D",
   "CPT",
   "emotional recognition test"
  ],
  "validation": [],
  "cohort_or_program": "Mindlink (community-based early intervention centre, Gwangju)",
  "source_basis": "full_text"
 },
 {
  "id": "dietary_habits_obesity_scz_2023",
  "year": 2023,
  "title": "Effects of Dietary Habits on General and Abdominal Obesity in Community-dwelling Patients with Schizophrenia",
  "title_ko": "지역사회 조현병 환자의 식습관과 비만",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.2023.21.1.68",
  "pmid": "36700313",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P_parallel",
  "cites": 12,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim M",
   "Yang SJ",
   "Kim HH",
   "Jo A",
   "Jhon M",
   "Lee J-Y",
   "Ryu S-H",
   "Kim J-M",
   "Kweon Y-R",
   "Kim S-W"
  ],
  "volume": "21(1)",
  "pages": "68-76",
  "question": "지역사회에 거주하는 조현병 스펙트럼 장애 환자에서 식습관(규칙적·균형적·건강한 식습관)이 전반적 비만(BMI)과 복부비만(허리둘레)에 미치는 영향은 성별에 따라 어떻게 다른가?",
  "motivation": "조현병 환자의 비만은 대사증후군·심혈관질환 위험과 약물 순응도 저하로 이어지지만, 항정신병약물 외의 비약물적 요인인 식습관과 비만의 관계를 확인한 연구는 부족하다. 또한 식습관과 비만 유병률이 성별에 따라 다르고 기존 연구는 대부분 BMI만 사용했기에 복부비만을 포함해 성별로 분석할 필요가 있었다.",
  "conclusion_ko": "조현병 환자에서 규칙적인 식습관은 남성의, 건강한 식습관은 여성의 비만 위험을 낮출 수 있으며, 지역사회 조현병 환자의 비만 예방을 위해 영양교육이 제공되어야 한다.",
  "key_results": [
   {
    "label": "남성 전반적 비만 / 복부비만 유병률",
    "value": "17.0% / 37.3%",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "여성 전반적 비만 / 복부비만 유병률",
    "value": "23.1% / 38.5%",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "건강한 식습관 점수: 남성 vs 여성",
    "value": "32.6 ± 6.8",
    "ci": null,
    "comparator": {
     "label": "여성",
     "value": "34.6 ± 6.2"
    },
    "page": 3
   },
   {
    "label": "남성: 규칙적 식습관과 전반적 비만 (조정 OR)",
    "value": 0.8,
    "ci": "0.7-0.9",
    "comparator": null,
    "page": 4
   },
   {
    "label": "남성: 규칙적 식습관과 복부비만 (조정 OR)",
    "value": 0.9,
    "ci": "0.8-0.9",
    "comparator": null,
    "page": 5
   },
   {
    "label": "여성: 건강한 식습관과 전반적 비만 / 복부비만 (조정 OR)",
    "value": "0.8 / 0.9",
    "ci": "0.8-0.9 / 0.8-0.9",
    "comparator": null,
    "page": 4
   },
   {
    "label": "남성 전반적 비만: 항정신병약물 용량 (조정 OR)",
    "value": 1.1,
    "ci": "1.0-1.3",
    "comparator": null,
    "page": 5
   }
  ],
  "limitations": [
   "정신건강복지센터·사회복귀시설을 이용하는 만성 환자 위주여서 젊은 환자나 초기 환자로 일반화하기 어려움.",
   "식습관 척도가 자기보고에 기반하여 객관적 식행동·영양상태 평가가 필요함.",
   "횡단적 설계로 항정신병약물의 평생 누적 복용량을 반영하지 못함.",
   "조사 시점의 항정신병약물만 포함해 이전 약물의 누적 효과가 반영되지 않았고, 비만 환자에게 체중 중립적 약물이 처방되었을 가능성도 있음."
  ],
  "data": {
   "source": "광주광역시정신건강복지사업지원단 정신건강기관 등록회원 신체건강검진 사업(광주 5개 구 정신건강복지센터·중독관리통합지원센터·사회복귀시설); 국민건강보험공단 건강검진 결과 및 자기보고 설문",
   "n": "270명 (남 153, 여 117)",
   "period": "2015년(1차), 2018년(2차) 조사"
  },
  "design": "cross-sectional",
  "methods": [
   "Korean Ministry of Health and Welfare dietary guideline questionnaire",
   "BMI ≥30 kg/m2",
   "waist circumference (≥90 cm men, ≥85 cm women)",
   "CGI",
   "risperidone-equivalent dose",
   "t test",
   "chi-squared/Fisher's exact test",
   "logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju Mental Health and Welfare Commission physical health examination project for registered members of mental health institutions (2015, 2018); NRF-2017R1A2B4010830",
  "source_basis": "full_text"
 },
 {
  "id": "multimodal_transformer_iwfcv_2023",
  "year": 2023,
  "title": "Multimodal transformer for automatic depression estimation system",
  "title_ko": "멀티모달 트랜스포머 기반 우울 자동 추정",
  "venue": "IW-FCV 2023",
  "doi": null,
  "pmid": null,
  "type": "conference full paper",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T5"
  ],
  "phase": "P4",
  "cites": 6,
  "methods_tag": [
   "ml"
  ],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "internet_addiction_nssi_2023",
  "year": 2023,
  "title": "Suicide and Non-Suicidal Self-Injury From Internet Addiction Among Korean Adolescents",
  "title_ko": "청소년 인터넷 중독과 자살·비자살적 자해",
  "venue": "J Korean Acad Child Adolesc Psychiatry",
  "doi": "10.5765/jkacap.230015",
  "pmid": "37426833",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P_parallel",
  "cites": 33,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Ryu S",
   "Kim S-Y",
   "Kim S-W",
   "Kim J-M",
   "Shin I-S",
   "Lee J-Y"
  ],
  "volume": "34(3)",
  "pages": "152-158",
  "question": "한국 고등학생에서 인터넷 중독은 고위험 자살 사고 및 비자살적 자해(NSSI)와 어떤 관련이 있는가?",
  "motivation": "자살은 지난 10년간 한국 청소년 사망원인 1위이고 NSSI는 이후 자살행동의 주요 위험요인이며, 청소년은 인터넷 중독에 특히 취약하다. 그러나 한국 청소년에서 인터넷 중독과 자살·NSSI 위험의 관계를 함께 본 연구는 없었다.",
  "conclusion_ko": "인터넷 중독은 한국 청소년의 자살 및 NSSI 위험과 유의하게 관련되므로, 정부는 인터넷 중독 청소년의 정신건강에 더 관심을 기울여야 한다. 인터넷 사용 모니터링과 예방교육, 인터넷 중독 청소년의 자살·NSSI 선별과 적절한 개입이 필요하다.",
  "key_results": [
   {
    "label": "고위험 자살 유병률 (%)",
    "value": 11.8,
    "ci": null,
    "comparator": {
     "label": "NSSI 유병률 (%)",
     "value": 28.3
    },
    "page": 4
   },
   {
    "label": "인터넷 중독 고위험군 비율 (%)",
    "value": 0.8,
    "ci": null,
    "comparator": {
     "label": "잠재위험군 (%)",
     "value": 1.4
    },
    "page": 3
   },
   {
    "label": "인터넷 중독 고위험군의 고위험 자살 비율 (%)",
    "value": 69.2,
    "ci": null,
    "comparator": {
     "label": "일반군 (%)",
     "value": 10.8
    },
    "page": 3
   },
   {
    "label": "고위험 자살 aOR: 인터넷 중독 고위험군",
    "value": 18.838,
    "ci": [
     5.564,
     63.776
    ],
    "comparator": null,
    "page": 5
   },
   {
    "label": "고위험 자살 aOR: 인터넷 중독 잠재위험군",
    "value": 7.308,
    "ci": [
     3.136,
     17.031
    ],
    "comparator": null,
    "page": 5
   },
   {
    "label": "고위험 자살 aOR: 여성",
    "value": 2.047,
    "ci": [
     1.506,
     2.782
    ],
    "comparator": null,
    "page": 5
   },
   {
    "label": "고위험 자살 aOR: 학업 스트레스",
    "value": 2.214,
    "ci": [
     1.148,
     4.271
    ],
    "comparator": null,
    "page": 5
   },
   {
    "label": "NSSI aOR: 인터넷 중독 고위험군",
    "value": 6.276,
    "ci": [
     1.914,
     20.577
    ],
    "comparator": null,
    "page": 5
   },
   {
    "label": "NSSI aOR: 남성",
    "value": 1.385,
    "ci": [
     1.101,
     1.741
    ],
    "comparator": null,
    "page": 5
   }
  ],
  "limitations": [
   "인터넷 중독과 동반되어 자살행동·NSSI와 관련될 수 있는 정신건강 문제를 조사하지 않았다.",
   "전문가 면담 없이 자기보고 척도만 사용했다.",
   "한 도시의 청소년만 대상으로 해 일반화가 제한된다.",
   "단면 설계로 인과 추론이 불가능하다.",
   "자원 참여자만 포함해 자살사고·NSSI 청소년이 과소보고됐을 수 있다."
  ],
  "data": {
   "source": "광주광역시 고등학생 학교기반 자기보고 설문",
   "n": "1694명 조사, 1674명 분석",
   "period": "2016-07 ~ 2016-09"
  },
  "design": "cross-sectional survey",
  "methods": [
   "Suicidal Ideation Questionnaire (SIQ, cutoff ≥41)",
   "Deliberate Self-Harm Inventory (DSHI)",
   "Internet Addiction Scale for Adolescents (KS-II)",
   "chi-square / linear-by-linear association",
   "univariate and multivariable binary logistic regression"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "centenarians_mood_2023",
  "year": 2023,
  "title": "The relationship between depressive mood and subjective health in centenarians and near-centenarians: a cross-sectional study from Korean centenarian cohort",
  "title_ko": "백세인의 우울감과 주관적 건강",
  "venue": "Aging Male",
  "doi": "10.1080/13685538.2023.2257302",
  "pmid": "37812685",
  "type": "original",
  "tier": "B",
  "role": "first",
  "led": true,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 4,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Jhon M",
   "Shin M-H",
   "Yoon KC",
   "Kim J-S",
   "Lee J",
   "Park K",
   "Park SC"
  ],
  "volume": "26",
  "pages": "2257302",
  "question": "한국 농촌 장수벨트에 사는 95세 이상 백세인·준백세인에서 주관적 건강과 관련된 요인은 무엇인가?",
  "motivation": "수명이 늘면서 백세인을 포함한 초고령자의 전반적 건강에 대한 임상적 관심이 커지고 있다. 주관적 건강은 노인의 사망과 신체기능 저하를 예측하므로 그 관련 요인을 밝힐 필요가 있다.",
  "conclusion_ko": "초고령에서 정신건강이 중요하며, 우울감이 주관적 건강과 음의 상관을 보이므로 백세인을 포함한 초고령자의 기분 증상 예방과 관리에 더 관심이 필요하다.",
  "key_results": [
   {
    "label": "등록 참여자 수",
    "value": 101,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "주관적으로 건강하다고 응답한 참여자 수 (비율 59.6%)",
    "value": 56,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "회귀모형이 설명한 주관적 건강 분산(%)",
    "value": 39,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "한국 장수벨트 4개 지역(구례·곡성·순창·담양) 백세인 코호트",
   "n": "101명",
   "period": null
  },
  "design": "cross-sectional",
  "methods": [
   "logistic regression",
   "blood tests",
   "physical and mental health assessment"
  ],
  "validation": [],
  "cohort_or_program": "Korean centenarian cohort (Longevity Belt: Gurye, Gokseong, Sunchang, Damyang)",
  "source_basis": "abstract"
 },
 {
  "id": "childhood_abuse_social_support_2022",
  "year": 2022,
  "title": "Childhood Abuse, Social Support, and Long-Term Pharmacological Treatment Outcomes in Patients With Depressive Disorders",
  "title_ko": "아동기 학대·사회적 지지와 우울증 장기 약물치료 결과",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2022.803639",
  "pmid": "35185652",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 6,
  "methods_tag": [
   "stat",
   "trial"
  ],
  "authors": [
   "Lee J-Y",
   "Stewart R",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "13",
  "pages": "803639",
  "question": "아동기 학대와 지각된 사회적 지지가 우울장애 외래 환자의 단기(12주)·장기(12개월) 약물치료 관해를 예측하고 서로 상호작용하는가?",
  "motivation": "아동기 학대는 성인 우울증의 약물치료 반응 저하와 관련되지만 연구마다 치료 기간이 달랐고 12주 단기 연구에서는 연관이 없었다. 사회적 지지가 학대의 영향을 완충한다는 근거는 있으나, 항우울제 치료 결과에서 학대의 조절인자로서 사회적 지지를 본 연구는 없었다.",
  "conclusion_ko": "장기 약물치료 동안 아동기 학대와 사회적 지지 수준이 치료 결과에 상호작용 효과를 보였으므로, 아동기 학대력이 있는 우울증 환자는 장기 치료 결과를 높이기 위해 사회적 지지를 포함한 특화된 임상적 접근이 필요할 수 있다.",
  "key_results": [
   {
    "label": "12주 관해율(%)",
    "value": 43.3,
    "ci": null,
    "comparator": {
     "label": "12개월 관해율(%)",
     "value": 70.4
    },
    "page": 4
   },
   {
    "label": "12개월 관해: 학대 없음 vs 있음 보정 OR (any abuse)",
    "value": 1.56,
    "ci": [
     1.04,
     2.33
    ],
    "comparator": null,
    "page": 7
   },
   {
    "label": "12개월 관해: 정서적 학대 없음 보정 OR",
    "value": 1.6,
    "ci": [
     1.01,
     2.54
    ],
    "comparator": null,
    "page": 7
   },
   {
    "label": "12개월 관해: 신체적 학대 없음 보정 OR",
    "value": 1.84,
    "ci": [
     1.16,
     2.93
    ],
    "comparator": null,
    "page": 7
   },
   {
    "label": "12개월 관해: 성적 학대 없음 보정 OR",
    "value": 4.28,
    "ci": [
     1.89,
     9.73
    ],
    "comparator": null,
    "page": 7
   },
   {
    "label": "12주 관해: 높은 사회적 지지 보정 OR",
    "value": 1.21,
    "ci": [
     0.95,
     1.52
    ],
    "comparator": null,
    "page": 7
   },
   {
    "label": "12개월 관해 상호작용 p (any abuse × 사회적 지지)",
    "value": 0.02,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "12개월 관해 상호작용 p (성적 학대 × 사회적 지지)",
    "value": 0.301,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "12개월 관해율: 학대 있음 + 낮은 사회적 지지(%)",
    "value": 52.8,
    "ci": null,
    "comparator": {
     "label": "학대 있음 + 높은 사회적 지지(%)",
     "value": 70.2
    },
    "page": 9
   }
  ],
  "limitations": [
   "아동기 학대를 후향적으로 보고해 회상과 기분의 영향을 받을 수 있다.",
   "성적 학대 경험자 수가 적어 사회적 지지와의 상호작용 검정력이 부족했을 수 있다.",
   "장기 치료의 추적률이 급성기보다 낮았다.",
   "자연주의적 설계로 치료가 환자 선호와 의사 판단에 따라 정해져 의사 간 변이가 영향을 주었을 수 있다.",
   "학대의 특정 시기를 평가하지 않았다."
  ],
  "data": {
   "source": "MAKE BETTER 프로그램; 대학병원 정신과 외래 단계적 약물치료 자연주의적 전향 연구",
   "n": "급성기 1,246명 / 12개월 1,015명 (기저 1,262명)",
   "period": "2012-03 ~ 2017-04 (모집)"
  },
  "design": "naturalistic prospective cohort (1-year stepwise pharmacotherapy)",
  "methods": [
   "Nemesis Childhood Trauma Interview (emotional, physical, sexual abuse before age 16)",
   "MSPSS dichotomized at median",
   "HAMD remission (<=7)",
   "logistic regression (unadjusted/adjusted)",
   "multinomial logistic regression for interaction terms"
  ],
  "validation": [],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER) (cris.nih.go.kr KCT0001332)",
  "source_basis": "full_text"
 },
 {
  "id": "covid_hospital_visits_scz_2022",
  "year": 2022,
  "title": "Decline in Hospital Visits by Patients with Schizophrenia Early in the COVID-19 Outbreak in Korea",
  "title_ko": "코로나19 초기 조현병 환자 병원 이용 감소",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.2022.20.1.185",
  "pmid": "35078961",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 22,
  "methods_tag": [
   "ts"
  ],
  "authors": [
   "Ryu S",
   "Nam HJ",
   "Baek S-H",
   "Jhon M",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "20(1)",
  "pages": "185-189",
  "question": "코로나19 1차 유행 초기에 한국 조현병 환자의 외래·입원 병원 이용이 예측치보다 감소했는가?",
  "motivation": "조현병 환자의 재발 예방과 회복에는 지속적인 치료와 접근 가능한 정신건강 서비스가 필수적이다. 코로나19 유행 중 감염 공포와 사회적 거리두기로 환자들이 병원 방문을 꺼리거나 예정된 진료에 오지 않았을 것이라는 우려가 있어, 건강보험 청구자료로 이를 검증했다.",
  "conclusion_ko": "한국에서 코로나19 초기 조현병 환자의 병원 이용이 예측치보다 빠르게 감소했으며, 이는 많은 환자가 적절한 치료를 받지 못했음을 시사한다. 정신건강 전문가는 팬데믹 동안 조현병 환자의 치료 지속을 면밀히 모니터링하고 지역사회 정신건강 서비스를 강화해야 한다.",
  "key_results": [
   {
    "label": "예측치 대비 실제 월 환자 수 최대 감소율",
    "value": "3.6%",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "단절적 시계열: 전체 환자",
    "value": "F = 8.961, p = 0.010",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "단절적 시계열: 외래 / 입원",
    "value": "F = 6.339, p = 0.025 / F = 6.538, p = 0.023",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "2020년 4월 전체 환자 수 (실제 vs 예측)",
    "value": 91691,
    "ci": "예측 95% 불확실성 구간 92,984-96,999",
    "comparator": {
     "label": "Predicted",
     "value": 95136
    },
    "page": 3
   },
   {
    "label": "2020년 5월 전체 환자 수 (실제 vs 예측)",
    "value": 92105,
    "ci": "예측 95% 불확실성 구간 93,432-97,576",
    "comparator": {
     "label": "Predicted",
     "value": 95548
    },
    "page": 3
   },
   {
    "label": "2020년 4월 입원 환자 수 (실제 vs 예측)",
    "value": 10718,
    "ci": "예측 95% 불확실성 구간 11,362-11,853",
    "comparator": {
     "label": "Predicted",
     "value": 11618
    },
    "page": 3
   },
   {
    "label": "2020년 6월 회복",
    "value": "실제 93,341 vs 예측 95% 구간 92,365-96,373",
    "ci": null,
    "comparator": null,
    "page": 3
   }
  ],
  "limitations": [
   "의료급여 환자를 포함하지 않았다(연간 국민건강보험 대상 환자의 60% 가까이 해당).",
   "진단 코드 범위가 넓어 실제 조현병이 아닌 환자가 포함되었을 수 있다.",
   "예측 기법으로 Prophet 하나만 사용했으며 ARIMA 등 다른 기법으로 추가 분석이 필요하다."
  ],
  "data": {
   "source": "건강보험심사평가원 보건의료빅데이터개방시스템 월별 환자 수 (F20, F21, F22, F23, F25, F28, F29 주진단; 국민건강보험 가입자만)",
   "n": "월별 환자 수 시계열 (2010-01 ~ 2020-07; 예측모형은 2010-2019년 120개 관측치)",
   "period": "2010-01 ~ 2020-07"
  },
  "design": "retrospective nationwide claims-based time-series analysis",
  "methods": [
   "Facebook Prophet forecasting with yearly seasonality and Korean holiday regressors",
   "interrupted time series analysis (its.analysis, Type II Sum Squares ANCOVA lagged dependent variable model)",
   "R 4.0.3"
  ],
  "validation": [],
  "cohort_or_program": "HIRA Healthcare Bigdata Hub (National Health Insurance claims, 2010-2020)",
  "source_basis": "full_text"
 },
 {
  "id": "delirium_caregivers_2022",
  "year": 2022,
  "title": "Depressed mood, associated factors, and understanding of delirium among caregivers of patients with delirium",
  "title_ko": "섬망 환자 보호자의 우울과 섬망 이해",
  "venue": "Int J Psychiatry Med",
  "doi": "10.1177/0091217421989146",
  "pmid": "33653170",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P2",
  "cites": 6,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Kim S-Y",
   "Jhon M",
   "Kang H-J",
   "Lee J-Y",
   "Kim S-W",
   "Kim J-M",
   "Shin I-S"
  ],
  "volume": "57(2)",
  "pages": "153-164",
  "question": "일반 병동 섬망 환자 보호자의 우울 기분은 얼마나 흔하고 어떤 요인과 연관되며, 보호자는 섬망과 비약물적 관리를 얼마나 이해하고 있는가?",
  "motivation": "섬망은 환자뿐 아니라 보호자에게도 큰 고통이지만 보호자는 거의 주목받지 못했다. 기존 연구는 주로 완화의료·중환자실에서 이루어졌고 일반 병동 보호자의 우울 관련 요인을 본 연구는 적고 표본이 작았다.",
  "conclusion_ko": "섬망 환자 보호자의 정신건강에 더 많은 관심이 필요하며, 보호자에게 섬망에 대한 정보와 교육을 권해야 하고, 임상의는 보호자가 이해하기 쉬운 섬망 용어를 찾아야 한다.",
  "key_results": [
   {
    "label": "보호자 HADS-D 중앙값",
    "value": 8.0,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "HADS-D 8점 이상 보호자 비율(%)",
    "value": 54.9,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "섬망을 '불안'으로 오인한 비율(%)",
    "value": 25.9,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "섬망을 정확히 섬망으로 답한 비율(%)",
    "value": 13.4,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "비약물적 섬망 관리 정보를 받은 적 없는 보호자 비율(%)",
    "value": 74,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "낮에 각성을 격려하지 않는 보호자 비율(%)",
    "value": 42.4,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "환자 나이 회귀계수 β",
    "value": -0.21,
    "ci": [
     -7.65,
     -1.71
    ],
    "comparator": null,
    "page": 8
   },
   {
    "label": "환자 우울 과거력 β",
    "value": 0.19,
    "ci": [
     1.35,
     6.52
    ],
    "comparator": null,
    "page": 8
   },
   {
    "label": "섬망 발견~자문 기간 β",
    "value": 0.16,
    "ci": [
     0.19,
     1.62
    ],
    "comparator": null,
    "page": 8
   },
   {
    "label": "배우자 관계 β",
    "value": 0.18,
    "ci": [
     0.43,
     2.64
    ],
    "comparator": null,
    "page": 8
   },
   {
    "label": "섬망을 치매로 해석 β",
    "value": 0.16,
    "ci": [
     0.29,
     2.83
    ],
    "comparator": null,
    "page": 8
   }
  ],
  "limitations": [
   "자문조정 정신과에 의뢰된 쌍만 포함해 의뢰되지 않은(특히 저활동성) 섬망 쌍이 누락되었다.",
   "환자 신체질환 대부분이 암이어서 보호자 우울이 암이나 긴 신체질환 경과 때문일 수 있다.",
   "보호자 우울이 환자의 신체 상태 때문인지 섬망 자체 때문인지 불분명하다.",
   "수면-각성 주기 외 다른 비약물적 관리에 대한 지식은 조사하지 않았다.",
   "섬망과 간성뇌증을 별개 선택지로 제시해 응답자가 혼동했을 수 있다."
  ],
  "data": {
   "source": "종합병원 자문조정 정신과 의뢰 섬망 환자-보호자 쌍(일반 병동; ICU·완화병동 제외)",
   "n": "보호자 224명 (적격 382쌍 중 58.6% 동의)",
   "period": "2011-07 ~ 2013-05"
  },
  "design": "cross-sectional",
  "methods": [
   "HADS-D",
   "Confusion Assessment Method",
   "DRS-R98-K",
   "Delirium Motor Subtype Scale",
   "ECOG-PS",
   "multiple choice questionnaire on delirium understanding",
   "Mann-Whitney U / Kruskal-Wallis / Spearman",
   "multivariate linear regression"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "gwangju_suicidality_checklist_2022",
  "year": 2022,
  "title": "Development of a Checklist for Predicting Suicidality Based on Risk and Protective Factors: The Gwangju Checklist for Evaluation of Suicidality",
  "title_ko": "광주 자살위험 평가 체크리스트(G-CES) 개발",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2022.0063",
  "pmid": "35753686",
  "type": "other",
  "tier": "C",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P2",
  "cites": 5,
  "methods_tag": [
   "psy"
  ],
  "authors": [
   "Kim S-W",
   "Park W-Y",
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Kim S-Y",
   "Ryu S",
   "Lee J-Y",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "19",
  "pages": "470-479",
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "mindlink_kjsr_2022",
  "year": 2022,
  "title": "Early Intervention Model for Mental Health in Korean Youth: Mindlink",
  "title_ko": "한국의 청년 정신건강 조기중재 모형: 마인드링크",
  "venue": "Korean J Schizophr Res",
  "doi": "10.16946/kjsr.2022.25.1.1",
  "pmid": null,
  "type": "review",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P2",
  "cites": 2,
  "methods_tag": [
   "case"
  ],
  "authors": [
   "Kim S-W",
   "Kim J-K",
   "Park C",
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Yoo S-H",
   "Lee J-Y",
   "Kim J-M"
  ],
  "volume": "25",
  "pages": "1-9",
  "question": "한국 최초의 지역사회 기반 청년 정신건강 조기중재 센터인 마인드링크는 어떤 모형으로 운영되는가?",
  "motivation": "청년기는 정신질환이 시작되는 시기이지만 낙인 등으로 서비스 접근이 어렵다. 다학제 협력 기반 청년 친화적 조기중재 모형을 소개하고 확산 근거를 제시하려 했다.",
  "conclusion_ko": "청년 정신건강과 서비스 전달 체계에 대한 투자가 낙인 등 서비스 이용 장벽을 넘는 데 도움이 될 수 있다(검색 요약 기준, 원문 인용 미확보).",
  "key_results": null,
  "limitations": null,
  "data": {
   "source": "마인드링크(광주 북구) 서비스 모형 기술",
   "n": null,
   "period": "2012- (시범사업), 2016 센터 개소"
  },
  "design": "program description / review",
  "methods": [
   "service model description"
  ],
  "validation": [],
  "cohort_or_program": "Mindlink",
  "source_basis": "web_abstract"
 },
 {
  "id": "covid_stress_schizophrenia_2022",
  "year": 2022,
  "title": "Effects of COVID-19-related stress and fear on depression in schizophrenia patients and the general population",
  "title_ko": "조현병 환자와 일반인의 코로나19 스트레스·공포와 우울",
  "venue": "Schizophrenia (Heidelb)",
  "doi": "10.1038/s41537-022-00213-3",
  "pmid": "35249110",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 24,
  "methods_tag": [
   "stat",
   "psy",
   "survey"
  ],
  "authors": [
   "Lee Y-R",
   "Chung Y-C",
   "Kim JJ",
   "Kang SH",
   "Lee BJ",
   "Lee S-H",
   "Lee J",
   "Jung H-R",
   "Hyun J",
   "Jhon M",
   "Kim J-W",
   "Ryu S",
   "Lee J-Y",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "8",
  "pages": "15",
  "question": "코로나19 관련 스트레스와 감염 공포가 외로움을 거쳐 우울로 이어지는 경로가 조현병 환자와 일반 인구에서 어떻게 다른가?",
  "motivation": "조현병 환자는 코로나19 감염·사망 위험이 높고 사회적 거리두기와 서비스 축소로 고립될 수 있으나, 코로나19 관련 심리사회적 스트레스와 우울 연구는 주로 일반 인구에서 이뤄졌다. 두 집단의 우울 발생 경로 차이를 밝혀 조현병 환자를 위한 특화된 개입 전략의 기초 자료를 얻고자 했다.",
  "conclusion_ko": "코로나19 관련 스트레스와 감염 공포에 따른 외로움은 우울에 영향을 미치는 중요한 요인이었고, 그 영향은 일반 인구보다 조현병 환자에서 더 컸다. 장기화된 팬데믹 동안 조현병 환자의 외로움과 이에 따른 우울을 예방하기 위해 사회적 지지와 정신건강 서비스 제공이 필요하다.",
  "key_results": [
   {
    "label": "참여자 수 (환자 / 일반 인구)",
    "value": "1340 / 2000",
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "잠재평균 차이: 코로나19 공포 (환자, 일반=0)",
    "value": "-0.506 (Cohen's d 0.60)",
    "ci": null,
    "comparator": {
     "label": "General population latent mean",
     "value": 0
    },
    "page": 3
   },
   {
    "label": "잠재평균 차이: 코로나19 스트레스 (환자, 일반=0)",
    "value": "-0.793 (Cohen's d 0.97)",
    "ci": null,
    "comparator": {
     "label": "General population latent mean",
     "value": 0
    },
    "page": 3
   },
   {
    "label": "잠재평균 차이: 외로움 (환자, 일반=0)",
    "value": "0.371 (Cohen's d 0.57)",
    "ci": null,
    "comparator": {
     "label": "General population latent mean",
     "value": 0
    },
    "page": 3
   },
   {
    "label": "잠재평균 차이: 우울 (환자, 일반=0)",
    "value": "0.264 (Cohen's d 0.29)",
    "ci": null,
    "comparator": {
     "label": "General population latent mean",
     "value": 0
    },
    "page": 3
   },
   {
    "label": "공포→외로움→우울 매개효과 (환자)",
    "value": 0.143,
    "ci": "0.085-0.197",
    "comparator": {
     "label": "일반 인구 β (p=0.420)",
     "value": 0.02
    },
    "page": 2
   },
   {
    "label": "스트레스→외로움→우울 매개효과 (환자 / 일반)",
    "value": "0.144 / 0.158",
    "ci": "환자 0.093-0.208; 일반 0.121-0.201",
    "comparator": null,
    "page": 3
   },
   {
    "label": "외로움→우울 표준화 계수 β (환자 / 일반)",
    "value": "0.656 / 0.578",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "공포→우울 표준화 계수 β (환자 / 일반)",
    "value": "0.021 (C.R. 0.657, ns) / 0.070 (C.R. 2.621*)",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "공포→외로움 표준화 계수 β (환자 / 일반)",
    "value": "0.218 (C.R. 5.382***) / 0.035 (C.R. 1.086)",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "모형 적합도 (환자 / 일반): TLI, CFI, RMSEA",
    "value": "0.923, 0.931, 0.062 / 0.905, 0.915, 0.059",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "척도 Cronbach α (PHQ-9 / UCLA 외로움 / 공포 / 스트레스)",
    "value": "0.897 / 0.837 / 0.838 / 0.921",
    "ci": null,
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": [
   "매개효과와 잠재평균 분석이 외로움에만 초점을 두어, 전반적 건강상태·정신병리 심각도 등 다른 요인으로 확장할 필요가 있다.",
   "환자는 지필, 일반 인구는 온라인으로 조사해 조사 방식 차이가 응답에 영향을 줄 수 있다.",
   "한국 대부분 지역은 봉쇄를 겪지 않아 다른 나라에 적용 시 주의가 필요하다.",
   "팬데믹 첫해의 단면 연구로, 조현병 환자는 팬데믹이 없어도 더 외롭고 우울할 수 있어 종단 연구가 필요하다."
  ],
  "data": {
   "source": "조현병 스펙트럼 장애 환자 대면(주로 지필) 설문 (지역사회 정신건강센터·정신과 외래) + 일반 인구 온라인 패널 설문(Macromill Embrain, 할당표집; 1,500명 + 500명)",
   "n": "환자 1,340명, 일반 인구 2,000명",
   "period": "환자 2020-04 ~ 2020-07; 일반 인구 2020-04 ~ 2020-05 및 2020-07"
  },
  "design": "cross-sectional two-group survey; structural equation modeling",
  "methods": [
   "PHQ-9 (depression)",
   "three-item UCLA Loneliness Scale",
   "author-developed COVID-19 fear (7 items) and stress (6 items) questionnaire",
   "measurement invariance testing (configural, metric, scalar, factor variance)",
   "latent mean analysis with Cohen's d",
   "structural equation modeling (AMOS 20.0) with sociodemographic controls",
   "bootstrapped mediation (bias-corrected 95% CI)"
  ],
  "validation": [
   "measurement invariance across groups",
   "bootstrap mediation CIs"
  ],
  "cohort_or_program": "Korean COVID-19 psychosocial survey of patients with psychosis (community mental health centers/outpatient clinics) and general-population online survey (Macromill Embrain; CNUH-2020-092); PACEN grant HI19C0481, HC19C0316",
  "source_basis": "full_text"
 },
 {
  "id": "adolescent_dep_anx_covid_2022",
  "year": 2022,
  "title": "Factors Associated With Depression and Anxiety in Korean Adolescents During the COVID-19 Pandemic",
  "title_ko": "코로나19 시기 청소년 우울·불안 요인",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2021.0365",
  "pmid": "35903057",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 19,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Ryu S",
   "Kim J-M",
   "Lee J-Y",
   "Kim S-W"
  ],
  "volume": "19",
  "pages": "551-561 (issue 7)",
  "question": "코로나19 유행 중 한국 청소년의 우울·불안 유병률은 어느 정도이며, 어떤 사회인구학적·심리사회적 요인이 이와 관련되는가?",
  "motivation": "청소년은 재난에 취약한 발달 시기이며 코로나19로 등교 연기·온라인 수업 등 일상이 크게 바뀌었지만, 한국 청소년 정신건강과 관련 요인을 다룬 연구는 없었다. 특히 감사(gratitude) 같은 보호요인을 평가한 연구가 적어 위험·보호요인을 함께 확인하고자 했다.",
  "conclusion_ko": "코로나19 유행 중 한국 청소년의 우울·불안은 흔했고 감염 공포와 관련되었다. 정확한 코로나19 정보 제공, 학업 스트레스 관리와 일상 유지 지원, 감사 성향을 키우는 개입이 청소년 우울·불안 예방에 중요하다.",
  "key_results": [
   {
    "label": "우울 증상 유병률 (PHQ-9≥10)",
    "value": "13.8%",
    "ci": null,
    "comparator": {
     "label": "불안 증상 유병률 (GAD-7≥10)",
     "value": "21.0%"
    },
    "page": 1
   },
   {
    "label": "여학생 vs 남학생 우울률",
    "value": "17.0%",
    "ci": null,
    "comparator": {
     "label": "남학생",
     "value": "11.3%"
    },
    "page": 3
   },
   {
    "label": "우울 다변량: 코로나19 감염 공포 OR",
    "value": 1.799,
    "ci": "1.515–2.136",
    "comparator": null,
    "page": 6
   },
   {
    "label": "우울 다변량: 감사(K-GQ-6) 점수 OR",
    "value": 0.962,
    "ci": "0.936–0.989",
    "comparator": null,
    "page": 6
   },
   {
    "label": "우울 다변량: 여성 OR",
    "value": 1.386,
    "ci": "1.012–1.897",
    "comparator": null,
    "page": 6
   },
   {
    "label": "불안 다변량: 코로나19 감염 공포 OR",
    "value": 1.829,
    "ci": "1.595–2.098",
    "comparator": null,
    "page": 6
   },
   {
    "label": "불안 다변량: TV 시청시간 증가 OR",
    "value": 1.394,
    "ci": "1.059–1.836",
    "comparator": null,
    "page": 6
   },
   {
    "label": "불안 다변량: 학업 관련 스트레스 OR",
    "value": 1.135,
    "ci": "1.019–1.265",
    "comparator": null,
    "page": 6
   },
   {
    "label": "우울+불안 동반: 여성 OR",
    "value": 1.666,
    "ci": "1.186–2.340",
    "comparator": null,
    "page": 5
   },
   {
    "label": "코로나19 스트레스 설문 요인분석 누적 설명분산",
    "value": "68.05%",
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "한 도시 청소년만 대상으로 해 다른 집단에 일반화하기 어렵다.",
   "단면 설계로 인과관계를 추론할 수 없다.",
   "자발적 참여자만 등록되어 증상이 심한 청소년은 참여하지 못했을 수 있다."
  ],
  "data": {
   "source": "광주광역시 중·고등학생 설문조사",
   "n": "1,898명 모집, 1,783명 분석",
   "period": "2020년 4월-7월"
  },
  "design": "cross-sectional survey",
  "methods": [
   "PHQ-9 (≥10)",
   "GAD-7 (≥10)",
   "Gratitude Questionnaire-6",
   "PSS-10",
   "UCLA Loneliness Scale-3",
   "COVID-19 psychosocial stress questionnaire (exploratory factor analysis)",
   "chi-square test",
   "univariate and multivariable binary logistic regression"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "childhood_abuse_il1b_suicide_2022",
  "year": 2022,
  "title": "Interaction effect between childhood abuse and interleukin-1β levels on suicidality in depressed patients",
  "title_ko": "아동기 학대·IL-1β 상호작용과 우울증 자살행동",
  "venue": "Eur Arch Psychiatry Clin Neurosci",
  "doi": "10.1007/s00406-022-01408-6",
  "pmid": "35467148",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q2"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 7,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Lee J-Y",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Kim S-W",
   "Shin I-S",
   "Cho HJ",
   "Chun BJ",
   "Kim J-M"
  ],
  "volume": "272(8)",
  "pages": "1535-1546",
  "question": "아동기 학대 경험과 혈중 IL-1β 수준이 우울장애 환자의 약물치료 전후 자살행동에 각각 그리고 상호작용적으로 영향을 미치는가?",
  "motivation": "아동기 학대는 주요우울장애 환자의 자살행동 위험요인이지만 학대 경험자 대부분은 자살을 시도하지 않아 다른 매개요인을 고려할 필요가 있다. 자살행동과 IL-1β의 연관에 대한 기존 결과가 엇갈려, 아동기 학대와 IL-1β의 주효과 및 상호작용을 전향적으로 살펴보고자 했다.",
  "conclusion_ko": "아동기 학대와 IL-1β는 단독으로는 효과가 없었으나 우울장애 환자의 약물치료 전후 자살행동에 상호작용 효과를 보였다. IL-1β를 아동기 학대와 함께 고려하면 자살행동 바이오마커로서의 유용성이 크게 높아질 수 있다.",
  "key_results": [
   {
    "label": "혈액 제공 기저 표본",
    "value": "1,094 (86.7%) / 1,262",
    "ci": null,
    "comparator": null,
    "page": 1538
   },
   {
    "label": "1년 추적 완료",
    "value": "884 (80.8%)",
    "ci": null,
    "comparator": null,
    "page": 1538
   },
   {
    "label": "아동기 학대 보고",
    "value": "149 (13.6%)",
    "ci": null,
    "comparator": null,
    "page": 1538
   },
   {
    "label": "IL-1β 중앙값(IQR)",
    "value": "1.1 (1.2) ng/mL",
    "ci": null,
    "comparator": null,
    "page": 1538
   },
   {
    "label": "과거 자살시도 / 높은 기저 자살사고",
    "value": "96 (8.8%) / 362 (33.1%)",
    "ci": null,
    "comparator": null,
    "page": 1538
   },
   {
    "label": "추적 중 자살사고 증가 / 치명적·비치명적 자살시도",
    "value": "155 (17.5%) / 38 (4.3%; 32 non-fatal, 6 fatal)",
    "ci": null,
    "comparator": null,
    "page": 1540
   },
   {
    "label": "아동기 학대 → 과거 자살시도 OR (보정)",
    "value": 2.72,
    "ci": "1.62–4.56",
    "comparator": {
     "label": "unadjusted OR",
     "value": 4.7
    },
    "page": 1540
   },
   {
    "label": "고 IL-1β → 과거 자살시도 OR (보정, 비유의)",
    "value": 1.4,
    "ci": "0.87–2.25",
    "comparator": {
     "label": "unadjusted OR",
     "value": 2.11
    },
    "page": 1540
   },
   {
    "label": "상호작용: 과거 자살시도",
    "value": 11.26,
    "ci": "1.30–9.72",
    "comparator": null,
    "page": 1541
   },
   {
    "label": "과거 자살시도 비율 (고 IL-1β: 학대 있음 vs 없음)",
    "value": "29.2%",
    "ci": null,
    "comparator": {
     "label": "고 IL-1β, 학대 없음",
     "value": "6.7%"
    },
    "page": 1541
   },
   {
    "label": "상호작용: 높은 기저 자살사고",
    "value": 3.34,
    "ci": "1.12–9.94",
    "comparator": null,
    "page": 1541
   },
   {
    "label": "상호작용: 추적 중 자살사고 증가 (비유의)",
    "value": 1.65,
    "ci": "0.42–6.58",
    "comparator": null,
    "page": 1541
   },
   {
    "label": "상호작용: 추적 중 치명적/비치명적 자살시도",
    "value": 2.65,
    "ci": "1.32–5.30",
    "comparator": null,
    "page": 1541
   },
   {
    "label": "추적 중 자살시도 비율 (고 IL-1β: 학대 있음 vs 없음)",
    "value": "11.5%",
    "ci": null,
    "comparator": {
     "label": "고 IL-1β, 학대 없음",
     "value": "1.5%"
    },
    "page": 1541
   }
  ],
  "limitations": [
   "중추가 아닌 말초 IL-1β를 측정했으며, 말초 수준이 중추 수준을 반영하지 않을 수 있다.",
   "단일기관 모집으로 일반화에 한계가 있다.",
   "자연주의적 연구로 치료가 정해진 프로토콜이 아닌 환자와 의사의 결정에 따라 이루어져 의사 간 변이가 결과에 영향을 줄 수 있다."
  ],
  "data": {
   "source": "전남대학교병원 정신건강의학과 외래 우울장애 환자 전향적 코호트(MAKE BETTER), 단계적 항우울제 치료 1년 추적",
   "n": "기저 1,094명 (혈액 제공), 1년 추적 884명",
   "period": "2012-03 ~ 2017-04 모집, 1년 추적"
  },
  "design": "prospective naturalistic cohort (baseline cross-sectional + 1-year prospective)",
  "methods": [
   "NEMESIS Childhood Trauma Interview (emotional/physical/sexual abuse before age 16)",
   "plasma IL-1β (Quantikine ELISA, R&D Systems), median split",
   "BPRS suicidality item",
   "logistic regression (unadjusted/adjusted)",
   "multinomial logistic regression for interaction",
   "stepwise antidepressant pharmacotherapy"
  ],
  "validation": [
   "covariate-adjusted models",
   "abuse-type and abuse-count secondary analyses"
  ],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER) program (KCT0001332; CNUH 2012-014)",
  "source_basis": "full_text"
 },
 {
  "id": "remission_by_step_pi_2022",
  "year": 2022,
  "title": "Prediction of 12-Week Remission by Psychopharmacological Treatment Step in Patients With Depressive Disorders",
  "title_ko": "치료 단계별 12주 관해 예측인자",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2022.0160",
  "pmid": "36327967",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 2,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Jin Y-T",
   "Kim H-Y",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "19",
  "pages": "866-871",
  "question": "12주 단계적 약물치료를 받는 우울장애 외래 환자에서 치료 단계(1-4단계)별로 관해를 예측하는 기저 요인은 무엇인가?",
  "motivation": "8-12주 항우울제 시험에서 관해율은 3분의 1 미만이며, 조기 치료 결정이 결과를 높일 수 있다. 개인화 치료를 위해 치료 단계별 관해 예측인자를 밝힐 필요가 있으나 아직 연구되지 않았다.",
  "conclusion_ko": "증상·기능과 치료 단계 사이에 서로 다른 연관이 나타나, 기저의 다면적 평가로 치료 단계별 관해를 예측할 수 있으며 이는 우울증 개인화 치료의 근거가 될 수 있다.",
  "key_results": [
   {
    "label": "기저 평가 환자 수",
    "value": 1262,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "분석 대상 환자 수",
    "value": 1246,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "12주 관해율(%)",
    "value": 43.3,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "치료 단계별 환자 수 (Step 1/2/3/4)",
    "value": "534 / 412 / 226 / 74",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "치료 단계별 관해율(%) (Step 1/2/3/4)",
    "value": "35.0 / 47.3 / 51.8 / 55.4",
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "자살성 심각도가 관해를 예측한 환자 비율(%) (Step 1-3)",
    "value": 94,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "자연주의적 설계와 단일기관 평가라는 한계가 있다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자(MAKE BETTER)",
   "n": "1,262명 기저 평가, 1,246명 분석",
   "period": "2012년 3월-2017년 4월"
  },
  "design": "prospective naturalistic cohort (secondary analysis)",
  "methods": [
   "HAMD",
   "HADS-A",
   "EQ-5D",
   "SOFAS",
   "LES",
   "PSS",
   "CDRS",
   "MSPSS",
   "BPRS suicidality item",
   "t-test / chi-square",
   "multiple logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "MAKE BETTER (MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response) project; CRIS KCT0001332",
  "source_basis": "full_text"
 },
 {
  "id": "multimodal_serum_bbi_2022",
  "year": 2022,
  "title": "Prospective associations of multimodal serum biomarkers with 12-week and 12-month remission in patients with depressive disorders receiving stepwise psychopharmacotherapy",
  "title_ko": "다중 혈청 바이오마커와 우울증 관해",
  "venue": "Brain Behav Immun",
  "doi": "10.1016/j.bbi.2022.05.012",
  "pmid": "35618226",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q3"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 18,
  "methods_tag": [
   "bio",
   "stat",
   "psy",
   "trial"
  ],
  "authors": [
   "Kim J-M",
   "Kang H-J",
   "Kim J-W",
   "Jhon M",
   "Choi W",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim M-G",
   "Stewart R"
  ],
  "volume": "104",
  "pages": "65-73",
  "question": "여러 기능계를 아우르는 다중 혈청 바이오마커 조합이 단계적 약물치료를 받는 우울장애 외래환자의 12주 및 12개월 관해를 전향적으로 예측하는가?",
  "motivation": "개별 혈액 바이오마커의 예측력은 불충분하고, 대부분의 연구가 일반화가 제한된 RCT 표본과 단기 반응에 국한되었다. 여러 기능계 바이오마커를 동시에 평가하면 실제 임상의 단계적 약물치료에서 급성기·지속기 결과 예측과 개인맞춤 치료 결정에 도움이 될 것이라는 가설을 검증하고자 했다.",
  "conclusion_ko": "세 가지 염증 바이오마커와 렙틴(급성기) 또는 BDNF(지속기)의 조합은 우울장애 약물치료 결과 예측력을 상당히 높일 수 있다. 다만 바이오마커의 절대 차이가 작아 임상에서는 대체가 아닌 보조 수단으로 신중히 적용해야 하며, 불리한 바이오마커를 가진 환자는 초기부터 대안적 약물요법이 필요할 수 있다.",
  "key_results": [
   {
    "label": "12주 관해율 (HAMD≤7)",
    "value": "45.1%",
    "ci": null,
    "comparator": {
     "label": "12개월 관해율",
     "value": "70.7%"
    },
    "page": 1
   },
   {
    "label": "12주 관해: 유리한 바이오마커 4개 vs 0개 OR",
    "value": 7.47,
    "ci": "4.05–13.66 (표 3) / 4.14–13.68 (본문)",
    "comparator": {
     "label": "0개 (reference)",
     "value": 1
    },
    "page": 6
   },
   {
    "label": "12개월 관해: 유리한 바이오마커 4개 vs 0개 OR",
    "value": 6.03,
    "ci": "2.88–12.96",
    "comparator": {
     "label": "0개 (reference)",
     "value": 1
    },
    "page": 5
   },
   {
    "label": "12주 관해: 다중 바이오마커 점수 최고 vs 최저 사분위 OR",
    "value": 3.45,
    "ci": "2.38–4.95 (표 3); 본문 3.42 (2.34–4.95)",
    "comparator": {
     "label": "최저 사분위",
     "value": 1
    },
    "page": 6
   },
   {
    "label": "12개월 관해: 다중 바이오마커 점수 최고 vs 최저 사분위 OR",
    "value": 3.33,
    "ci": "2.19–5.04 (표 3); 본문 2.25–5.04",
    "comparator": {
     "label": "최저 사분위",
     "value": 1
    },
    "page": 6
   },
   {
    "label": "12주 관해 AUROC: 기존 모델 → 바이오마커 추가",
    "value": "64.2% / 64.5%",
    "ci": null,
    "comparator": {
     "label": "기존 모델(공변량만)",
     "value": "57.6%"
    },
    "page": 5
   },
   {
    "label": "12개월 관해 AUROC: 기존 모델 → 바이오마커 추가",
    "value": "65.6% / 66.6%",
    "ci": null,
    "comparator": {
     "label": "기존 모델",
     "value": "58.5%"
    },
    "page": 5
   },
   {
    "label": "12주 관해: hsCRP <0.61 mg/dL OR",
    "value": 2.07,
    "ci": "1.62–2.70",
    "comparator": null,
    "page": 6
   },
   {
    "label": "12개월 관해: BDNF >21.15 ng/mL OR",
    "value": 1.62,
    "ci": "1.20–2.16",
    "comparator": null,
    "page": 6
   },
   {
    "label": "치료단계별 12주: 바이오마커 1개 증가당 OR (Step 1 vs Step 4+)",
    "value": "1.68 (1.44–1.98)",
    "ci": null,
    "comparator": {
     "label": "Step 4+",
     "value": "1.20 (0.66–2.22), p=0.537"
    },
    "page": 6
   }
  ],
  "limitations": [
   "자연관찰 설계로 항우울제·병용약물별 결과를 비교하지 않았다(다중비교로 1종 오류 증가 우려).",
   "새로운 바이오마커가 아니라 자주 연구된 기존 바이오마커를 평가했다.",
   "바이오마커를 기저시점에만 측정했다.",
   "관해군과 비관해군 간 바이오마커 수치 차이가 매우 작았다.",
   "유전 요인을 고려하지 않았다.",
   "특정 우울 증상이 아닌 전반적 치료결과만 평가했다.",
   "활성형(acyl) 그렐린이 아닌 총 그렐린을 측정했다.",
   "MDD 외 기분부전장애·NOS 우울장애도 포함했다.",
   "신체활동을 공변량으로 고려하지 않았다.",
   "12개월 관해율은 ITT가 아닌 완료자 기준이라 과대추정 가능성이 있다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 전향 코호트 (MAKE BETTER)",
   "n": "기저 1,262명 중 혈액 1,094명; 12주 분석 1,086명, 12개월 분석 884명",
   "period": "2012년 3월-2017년 4월 모집"
  },
  "design": "prospective naturalistic cohort (stepwise psychopharmacotherapy)",
  "methods": [
   "14 serum biomarkers (hsCRP, TNF-α, IL-1β, IL-6, IL-4, IL-10, leptin, ghrelin, total cholesterol, BDNF, serotonin, cortisol, folate, homocysteine)",
   "Mann-Whitney U tests",
   "ROC-derived optimal cut-offs",
   "adjusted logistic regression",
   "summed biomarker count and weighted multi-biomarker score (quartiles)",
   "AUROC comparison",
   "stratification by treatment step and sex"
  ],
  "validation": [
   "sensitivity analysis restricted to MDD",
   "alternative outcomes (response, HAMD change)"
  ],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER); KCT0001332",
  "source_basis": "full_text"
 },
 {
  "id": "ds2_kr_jkna_2022",
  "year": 2022,
  "title": "Standardization and Validation of the Korean Version of Demoralization Scale-II (DS-II-Kr) in Cancer Patients",
  "title_ko": "암 환자 한국어판 사기저하 척도 타당화",
  "venue": "J Korean Neuropsychiatr Assoc",
  "doi": "10.4306/jknpa.2022.61.2.90",
  "pmid": null,
  "type": "original",
  "tier": "A",
  "role": "first",
  "led": true,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P2",
  "cites": 3,
  "methods_tag": [
   "psy"
  ],
  "authors": [
   "Jhon M",
   "Kim S-Y",
   "Kim J-M",
   "Kim S-W",
   "Shin I-S",
   "Lee J-Y",
   "Lee J-J",
   "Kwak S-R",
   "Kissane DW"
  ],
  "volume": "61",
  "pages": "90-97",
  "question": "한국어판 사기저하 척도(DS-II-Kr)가 암 환자와 생존자에서 신뢰도와 타당도를 갖는가?",
  "motivation": "사기저하(demoralization)는 암을 비롯한 만성질환자에게 흔하지만 한국어판 척도는 개발·검증되지 않았다. 이에 DS-II를 번역하고 암 환자에서 타당화했다.",
  "conclusion_ko": "DS-II-Kr은 임상 및 연구 현장에서 사기저하를 평가하는 데 유용한 도구이다.",
  "key_results": [
   {
    "label": "참여자 수",
    "value": 105,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "HADS 기준 DS-II-Kr 절단점",
    "value": 10,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": [
   "최적 절단점을 확인하기 위한 추가 연구가 필요하다.",
   "다른 집단에서의 외부 타당화가 필요하다."
  ],
  "data": {
   "source": "암 전문병원 정신건강의학과 클리닉 방문 암 환자 및 생존자",
   "n": "105명",
   "period": null
  },
  "design": "cross-sectional validation study",
  "methods": [
   "DS-II-Kr",
   "HADS",
   "internal consistency",
   "test-retest reliability",
   "concurrent validity",
   "confirmatory factor analysis",
   "logistic regression for cut-off"
  ],
  "validation": [
   "internal consistency",
   "test-retest",
   "concurrent validity",
   "CFA (two-factor)"
  ],
  "cohort_or_program": null,
  "source_basis": "web_abstract"
 },
 {
  "id": "sat_moderna_case_2022",
  "year": 2022,
  "title": "Subacute Thyroiditis After Receiving the mRNA COVID-19 Vaccine (Moderna): The First Case Report and Literature Review in Korea",
  "title_ko": "모더나 백신 후 아급성 갑상선염 증례",
  "venue": "J Korean Med Sci",
  "doi": "10.3346/jkms.2022.37.e39",
  "pmid": "35166076",
  "type": "case report",
  "tier": "B",
  "role": "co-first",
  "led": true,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P2",
  "cites": 20,
  "methods_tag": [
   "case"
  ],
  "authors": [
   "Jhon M",
   "Lee S-H",
   "Oh T-H",
   "Kang H-C"
  ],
  "volume": "37",
  "pages": "e39 (issue 6)",
  "question": "mRNA-1273(모더나) 1차 접종 후 발생한 아급성 갑상선염 환자는 어떤 경과를 보였고, 치료 중 2차 접종을 마칠 수 있었는가?",
  "motivation": "코로나19 백신 접종률이 오르면서 백신 관련 아급성 갑상선염 보고가 늘고 있으나, 기존 보고들은 첫 접종 후 갑상선염이 생긴 환자가 접종을 끝까지 완료했는지 다루지 않았다. 한국 최초의 모더나 백신 후 중증 아급성 갑상선염 사례와 기존 22例를 정리해 임상의의 인식을 높이고자 했다.",
  "conclusion_ko": "코로나19 백신 후 아급성 갑상선염은 일상에 큰 지장을 줄 수 있어 인식이 필요하며, 접종 후 일반 부작용과 달리 전경부 통증·피로·발열·근육통이 지속되면 임상의는 아급성 갑상선염을 의심해야 한다. 코로나19의 위험이 백신의 경미한 위험보다 크므로 1차 접종 부작용을 관리해 접종을 완료하는 것이 중요하다.",
  "key_results": [
   {
    "label": "증상 발생 시점(1차 접종 후, 본 증례)",
    "value": "5일",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "내원 시 TSH (µIU/mL)",
    "value": 0.005,
    "ci": null,
    "comparator": {
     "label": "정상범위",
     "value": "0.4–4.8"
    },
    "page": 3
   },
   {
    "label": "내원 시 CRP (mg/dL)",
    "value": 6.54,
    "ci": null,
    "comparator": {
     "label": "정상범위",
     "value": "0–0.3"
    },
    "page": 3
   },
   {
    "label": "내원 시 ESR (mm/hr)",
    "value": 79,
    "ci": null,
    "comparator": {
     "label": "정상범위",
     "value": "0–26"
    },
    "page": 3
   },
   {
    "label": "프레드니손 투여",
    "value": "30 mg 시작, 총 40일",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "2차 접종 시 프레드니손 용량",
    "value": "22.5 mg",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "Day 55 TSH (µIU/mL, 정상화)",
    "value": 0.288,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "Day 83 / Day 126 TSH (µIU/mL)",
    "value": "9.5 → 8.5",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "문헌상 백신 후 SAT 보고",
    "value": "16편 22例",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "1차 접종 후 발생 비율 (23例 중)",
    "value": "13/23",
    "ci": null,
    "comparator": {
     "label": "2차 접종 후",
     "value": "10/23"
    },
    "page": 4
   },
   {
    "label": "여성 비율 (23例 중)",
    "value": "18/23",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "접종 후 증상 발생까지 중앙값",
    "value": "7일 (범위 5–21일)",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "스테로이드 치료 필요 (23例 중)",
    "value": "13/23",
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "스테로이드 치료 중 코로나19 백신 접종의 안전성과 효과는 추가 연구가 필요하다(단일 증례)."
  ],
  "data": {
   "source": "단일 환자 증례(전남대병원) + 기존 문헌 16편 22例 정리",
   "n": "1명 (문헌 포함 23例)",
   "period": "2021-06-25 ~ 2021-10-29 (Day 0-126)"
  },
  "design": "case report with literature review",
  "methods": [
   "clinical case description",
   "thyroid function tests",
   "thyroid ultrasonography",
   "literature summary table"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "suicide_trends_covid_2022",
  "year": 2022,
  "title": "Trends in suicide deaths before and after the COVID-19 outbreak in Korea",
  "title_ko": "코로나19 전후 한국 자살 사망 추세",
  "venue": "PLoS One",
  "doi": "10.1371/journal.pone.0273637",
  "pmid": "36094911",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T3"
  ],
  "phase": "P2",
  "cites": 59,
  "methods_tag": [
   "ts"
  ],
  "authors": [
   "Ryu S",
   "Nam HJ",
   "Jhon M",
   "Lee J-Y",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "17",
  "pages": "e0273637",
  "question": "코로나19 유행 기간(2020년 2-12월) 한국의 월별 자살 사망자 수는 유행 이전 추세로 예측한 값과 달랐는가(성별·연령별 포함)?",
  "motivation": "팬데믹으로 인한 고립·경제적 스트레스로 자살 증가가 우려되었으나 초기 연구들은 증가 근거를 찾지 못했다. 한국은 OECD 최고 자살률 국가로 팬데믹 중 자살 추세를 면밀히 감시할 필요가 있었다.",
  "conclusion_ko": "코로나19 팬데믹은 한국의 전체 자살 사망자 수를 늘리지 않았으나, 여성과 젊은층의 자살은 증가하여 이들의 자살 위험이 커졌을 수 있다.",
  "key_results": [
   {
    "label": "분석 대상 자살 사망자 수",
    "value": "283,633",
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "2020년 전체 연간 자살 수(관측)",
    "value": 13195,
    "ci": null,
    "comparator": {
     "label": "예측(합계)",
     "value": 13000.94
    },
    "page": 8
   },
   {
    "label": "2020년 여성 연간 자살 수(관측)",
    "value": 4102,
    "ci": null,
    "comparator": {
     "label": "예측(합계)",
     "value": 3709.2
    },
    "page": 8
   },
   {
    "label": "2020년 34세 이하 연간 자살 수(관측)",
    "value": 2597,
    "ci": null,
    "comparator": {
     "label": "예측(합계)",
     "value": 2060.88
    },
    "page": 8
   },
   {
    "label": "2020년 남성 연간 자살 수(관측)",
    "value": 9093,
    "ci": null,
    "comparator": {
     "label": "예측(합계)",
     "value": 9356.38
    },
    "page": 8
   },
   {
    "label": "전체 2020년 10월 OER",
    "value": 1.13,
    "ci": "1.06-1.19",
    "comparator": null,
    "page": 5
   },
   {
    "label": "여성 2020년 6월 OER",
    "value": 1.21,
    "ci": "1.09-1.33",
    "comparator": null,
    "page": 6
   },
   {
    "label": "여성 2020년 3월 OER",
    "value": 1.17,
    "ci": "1.05-1.28",
    "comparator": null,
    "page": 6
   },
   {
    "label": "34세 이하 2020년 6월 OER",
    "value": 1.49,
    "ci": "1.30-1.68",
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": [
   "예측 알고리즘으로 Prophet 하나만 사용했다.",
   "과거 연도 대비 추세 변화의 유의성을 직접 검정하지 못했다(단절 시계열 분석 예정).",
   "공식 확인되지 않은 자살 사망으로 인해 영향이 과소추정되었을 수 있다.",
   "교육수준, 경제상태, 지역별 차이를 다루지 못했다."
  ],
  "data": {
   "source": "통계청 MDIS 사망원인통계(ICD-10 X60-X84)",
   "n": "자살 사망자 283,633명",
   "period": "1997-2020"
  },
  "design": "population-level time-series forecasting (observed vs expected)",
  "methods": [
   "Facebook Prophet (multiplicative seasonality, celebrity-suicide regressors)",
   "ARIMA comparison",
   "observed-to-expected ratio (OER) with 95% CI"
  ],
  "validation": [
   "temporal (2019 hold-out year)"
  ],
  "cohort_or_program": "Statistics Korea Microdata Integrated Service (MDIS) cause-of-death statistics",
  "source_basis": "full_text"
 },
 {
  "id": "covid_symptoms_distress_2021",
  "year": 2021,
  "title": "Associations Between COVID-19 Symptoms and Psychological Distress",
  "title_ko": "코로나19 입원환자의 신체증상과 심리적 고통",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2021.721532",
  "pmid": "34484008",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 27,
  "methods_tag": [],
  "authors": [
   "Kim J-W",
   "Kang H-J",
   "Jhon M",
   "Ryu S",
   "Lee J-Y",
   "Kang S-J",
   "Jung S-I",
   "Shin I-S",
   "Kim S-W",
   "Stewart R",
   "Kim J-M"
  ],
  "volume": "12",
  "pages": "721532",
  "question": "코로나19로 격리 입원한 환자에서 코로나19 신체 증상이 입원 시점과 1주 후의 불안·우울·불면·자살사고와 어떤 관련이 있으며, 전화 기반 정신과 개입 후 이 증상들은 어떻게 변하는가?",
  "motivation": "코로나19 입원환자의 정신과적 문제에 관한 기존 연구는 단일 시점 평가에 그쳐 변화하는 심리 증상의 단면만 보여 주었고, 코로나19 신체 증상과 심리 증상의 관련성은 체계적으로 연구되지 않았다. 격리 환자를 위한 근거 기반 심리 개입도 부족해, 입원 시점과 1주 후 전화 면담으로 이를 평가했다.",
  "conclusion_ko": "코로나19 격리 입원환자는 정신과적 문제의 위험 요인과 증상을 보이므로, 다양한 개입 전략으로 심리 문제를 관리해야 하며 조기 개입이 정신질환 환자의 예후 개선에 필수적이다. 입원 시 코로나19 증상은 입원 시점과 1주 후의 불안·우울에 유의하고 지속적인 부정적 영향을 미쳤다.",
  "key_results": [
   {
    "label": "등록 환자 수 / 1주 추적 환자 수",
    "value": "461 / 322 (69.8%)",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "입원 시 불안 증상 비율",
    "value": "75명 (16.3%)",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "입원 시 우울 증상 비율",
    "value": "122명 (26.5%)",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "입원 시 불면 비율",
    "value": "154명 (33.4%)",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "입원 시 자살사고 비율 → 1주 후",
    "value": "54명 (11.7%) → 22명 (6.8%), P<0.001",
    "ci": null,
    "comparator": {
     "label": "기저 자살사고",
     "value": "11.7%"
    },
    "page": 8
   },
   {
    "label": "흔한 코로나19 증상: 기침/객담/재채기",
    "value": "244명 (52.9%)",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "기저 HADS(A) 평균 (코로나19 증상 유 vs 무)",
    "value": "4.77 (3.6) vs 3.94 (3.2), t=-2.225, P=0.027",
    "ci": null,
    "comparator": {
     "label": "No COVID-19 symptom (N=117)",
     "value": 3.94
    },
    "page": 6
   },
   {
    "label": "기저 HADS(D) 평균 (코로나19 증상 유 vs 무)",
    "value": "5.94 (3.8) vs 5.00 (3.7), t=-2.324, P=0.021",
    "ci": null,
    "comparator": {
     "label": "No COVID-19 symptom (N=117)",
     "value": 5.0
    },
    "page": 6
   },
   {
    "label": "기저 ISI 평균 (코로나19 증상 유 vs 무)",
    "value": "6.11 (5.1) vs 5.28 (5.4), P=0.136",
    "ci": null,
    "comparator": {
     "label": "No COVID-19 symptom (N=117)",
     "value": 5.28
    },
    "page": 6
   },
   {
    "label": "1주 후 HADS(A) 시간 효과 / 집단 효과",
    "value": "Time F=5.357, P=0.021; Group F=5.683, P=0.018; Interaction F=3.576, P=0.060",
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "1주 후 HADS(D) 시간 효과 / 집단 효과",
    "value": "Time F=5.491, P=0.020; Group F=6.302, P=0.013; Interaction F=0.034, P=0.854",
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "여성 비율 (불안 / 우울 증상군)",
    "value": "70.7% / 67.2%",
    "ci": null,
    "comparator": {
     "label": "남성",
     "value": "29.3% / 32.8%"
    },
    "page": 4
   },
   {
    "label": "1주 후 우울·불안·불면·자살 유병률 (Discussion)",
    "value": "13.9 / 27.6 / 29.3 / 6.8%",
    "ci": null,
    "comparator": null,
    "page": 8
   },
   {
    "label": "평균 입원 기간",
    "value": "12.5일 (±5.3)",
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "단일군(one-arm) 설계와 단일 기관이라 일반화가 제한된다.",
   "한국인 표본만 포함해 다른 인종 집단에서 재현이 필요하다.",
   "대조군이 없어 전화 개입과 대면 개입의 효과를 구별할 수 없었다.",
   "심리적 고통 평가에 반구조화 면담을 사용하지 않았다.",
   "시간 제약으로 자살 평가에 BDI-II 한 문항만 사용했다.",
   "정신건강 결과에 영향을 주는 변수에 관한 연구가 여전히 부족하다."
  ],
  "data": {
   "source": "전남대학교병원(CNUH)·빛고을전남대학교병원(CNUBH) 코로나19 입원 격리환자 정신과 선별·전화 개입 자료(의무기록·간호기록 포함)",
   "n": "461명 (입원 격리 901명 중 440명 제외), 1주 추적 322명 (69.8%)",
   "period": "2020-02-29 ~ 2021-01-03"
  },
  "design": "retrospective one-arm single-site observational study with 1-week follow-up",
  "methods": [
   "HADS-A/HADS-D (cutoff 8)",
   "Insomnia Severity Index (cutoff 8)",
   "BDI-II item 9 (suicidal ideation, score >=1)",
   "t-test and chi-square test",
   "binomial exact test",
   "repeated-measures ANOVA adjusted for covariates",
   "telephone-based psychological intervention (psychoeducation, supportive psychotherapy, psychotropics)"
  ],
  "validation": [],
  "cohort_or_program": "CNUH/CNUBH COVID-19 inpatient telephone psychiatric consultation network (IRB CNUH-2021-020, CNUH-2020-100)",
  "source_basis": "full_text"
 },
 {
  "id": "oseltamivir_mania_case_2021",
  "year": 2021,
  "title": "Delayed Onset of Manic Symptoms in a Patient with Influenza A (H1N1) after administration of Oseltamivir (Tamiflu): A Case Report",
  "title_ko": "오셀타미비르 투여 후 지연성 조증 증례",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.2021.19.1.166",
  "pmid": "33508801",
  "type": "case report",
  "tier": "B",
  "role": "first",
  "led": true,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P2",
  "cites": 3,
  "methods_tag": [
   "case"
  ],
  "authors": [
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Kim S-Y",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "19",
  "pages": "166-169",
  "question": "인플루엔자 A 감염으로 오셀타미비르를 복용한 청소년에서 투약 종료 며칠 후 나타난 조증 증상은 어떤 임상 양상과 위험요인을 보이며, 임상가는 무엇을 주의해야 하는가?",
  "motivation": "오셀타미비르의 신경정신과적 부작용(사고, 자살 등)이 보고되어 왔으나 조증 삽화와의 관련성에 대한 문헌은 드물고, 대부분 증상은 투약 시작 2일 이내 발생한다고 알려져 있다. 투약 종료 후 지연 발생한 조증 사례를 보고해 위험요인과 관찰 기간에 대한 시사점을 제시하고자 했다.",
  "conclusion_ko": "환자가 어리고, 정신질환 가족력이 있으며, 약물 민감성이 있고, 오셀타미비르 전후로 백신 접종 등 다른 치료를 받은 경우 임상가는 정신과적 부작용에 주의해야 한다. 부작용이 투약 수일 후에도 나타날 수 있으므로 투약 종료 후에도 일정 기간 관찰이 필요하다.",
  "key_results": [
   {
    "label": "환자 나이(세)",
    "value": 13,
    "ci": null,
    "comparator": null,
    "page": 166
   },
   {
    "label": "오셀타미비르 복용 기간(일)",
    "value": 5,
    "ci": null,
    "comparator": null,
    "page": 166
   },
   {
    "label": "증상 발현 시점(첫 투약 후 일)",
    "value": 9,
    "ci": null,
    "comparator": null,
    "page": 167
   },
   {
    "label": "투약 종료 후 증상 발현(일째)",
    "value": 4,
    "ci": null,
    "comparator": {
     "label": "기존 보고된 발현 시점(시간, 투약 후)",
     "value": 48
    },
    "page": 168
   },
   {
    "label": "초진 시 YMRS 점수",
    "value": 20,
    "ci": null,
    "comparator": {
     "label": "치료 5일째 YMRS",
     "value": 3
    },
    "page": 167
   },
   {
    "label": "치료 후 YMRS 점수",
    "value": 3,
    "ci": null,
    "comparator": null,
    "page": 167
   },
   {
    "label": "처방 용량: valproic acid (mg/day)",
    "value": 500,
    "ci": null,
    "comparator": null,
    "page": 167
   },
   {
    "label": "안정 유지 기간(마지막 방문 후 개월)",
    "value": 7,
    "ci": null,
    "comparator": null,
    "page": 167
   }
  ],
  "limitations": [
   "뇌영상 검사를 시행하지 않아 기질적 원인을 상세히 평가하지 못했다.",
   "증상 발현 하루 전 HPV 백신(가다실)을 접종하여 오셀타미비르 단독 효과와 구분하기 어렵고, 병용 투여와 부작용의 관계는 추가 연구가 필요하다."
  ],
  "data": {
   "source": "전남대학교병원 정신건강의학과 외래 단일 증례",
   "n": "1명(13세 여아)",
   "period": "2018년 발병, 마지막 방문 후 7개월 추적"
  },
  "design": "case report",
  "methods": [
   "clinical interview",
   "Young Mania Rating Scale (YMRS)",
   "laboratory and neurological examination",
   "DSM-5 diagnosis"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "covid_news_alerts_emotion_2021",
  "year": 2021,
  "title": "Factors Associated With a Negative Emotional Response to News Media and Nationwide Emergency Text Alerts During the COVID-19 Outbreak in Korea",
  "title_ko": "코로나19 뉴스·재난문자에 대한 부정적 정서 반응 요인",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2021.0087",
  "pmid": "34500508",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 17,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Lee J-Y",
   "Kim M",
   "Jhon M",
   "Kim J-W",
   "Ryu S",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "18(9)",
  "pages": "825-830",
  "question": "코로나19 유행 중 뉴스 보도와 휴대전화 재난 문자에 대해 부정적 정서 반응을 보이는 사람은 어떤 특성(성별, 지역, 감염 공포, 동선 공개 공포, 우울·불안·스트레스)과 관련되는가?",
  "motivation": "한국에서는 확진자 동선 등이 담긴 긴급재난문자가 전 국민에게 발송되었고, 언론 보도는 유익한 정보를 주지만 부정적 정서도 유발할 수 있다. 문자와 뉴스로 받은 코로나19 정보에 대한 부정적 정서 반응의 관련 요인에 대한 근거가 부족했다.",
  "conclusion_ko": "감염 공포와 사생활(동선) 노출 공포가 코로나19 정보에 대한 부정적 정서 반응을 키울 수 있고, 불안·스트레스가 높은 사람이 취약하다. 대중의 공포를 줄이고 예방 행동을 늘리는 효과적인 소통 방안이 필요하다.",
  "key_results": [
   {
    "label": "표본 수",
    "value": 1500,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "뉴스에 공포 반응 비율 (%)",
    "value": 43.7,
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "재난 문자에 불안 반응 비율 (%)",
    "value": 32.9,
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "뉴스 부정 반응: 감염 공포 OR",
    "value": 3.444,
    "ci": [
     2.823,
     4.202
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "뉴스 부정 반응: 여성 OR",
    "value": 1.454,
    "ci": [
     1.151,
     1.837
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "뉴스 부정 반응: GAD-7 OR",
    "value": 1.05,
    "ci": [
     1.008,
     1.094
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "뉴스 부정 반응: PSS-10 OR",
    "value": 1.032,
    "ci": [
     1.001,
     1.064
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "재난 문자 불안 반응: 대구 OR (수도권 기준)",
    "value": 0.475,
    "ci": [
     0.352,
     0.641
    ],
    "comparator": {
     "label": "Capital region (reference)",
     "value": null
    },
    "page": 4
   },
   {
    "label": "재난 문자 불안 반응: 감염 공포 OR",
    "value": 2.713,
    "ci": [
     2.212,
     3.328
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "재난 문자 불안 반응: 동선 공개 공포 OR",
    "value": 1.116,
    "ci": [
     1.003,
     1.241
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "재난 문자 불안 반응: 기혼 OR",
    "value": 1.46,
    "ci": [
     1.072,
     1.987
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "재난 문자 불안 반응: 여성 OR",
    "value": 1.46,
    "ci": [
     1.143,
     1.865
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "재난 문자 불안 반응: GAD-7 OR",
    "value": 1.107,
    "ci": [
     1.062,
     1.155
    ],
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "단면 연구라 심리사회적 요인과 정보 노출 반응 사이의 인과관계를 확정할 수 없고, 즉각적 반응과 기저 정서 상태를 구분하지 못했다.",
   "구조화 면담 없이 자기보고로 심리 상태를 평가해 결과가 교란되었을 수 있다.",
   "온라인 설문이라 노인 등 응답자 편향이 있을 수 있다."
  ],
  "data": {
   "source": "온라인 공공 패널 익명 설문(수도권·대구·광주 3개 지역, 코로나19 일반인구 정신건강 조사의 일부)",
   "n": "1,500명 (19-65세, 남녀 각 750명)",
   "period": "2020-04-24 ~ 2020-05-05"
  },
  "design": "cross-sectional online survey",
  "methods": [
   "chi-square test",
   "independent t-test",
   "multivariate logistic regression",
   "PHQ-9",
   "GAD-7",
   "PSS-10"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "mask_wearing_inpatients_2021",
  "year": 2021,
  "title": "Factors associated with mask wearing among psychiatric inpatients during the COVID-19 pandemic",
  "title_ko": "코로나19 시기 정신과 입원환자의 마스크 착용 요인",
  "venue": "Schizophr Res",
  "doi": "10.1016/j.schres.2020.12.029",
  "pmid": "33476952",
  "type": "letter",
  "tier": "C",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 14,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Jung H-R",
   "Park C",
   "Kim M",
   "Jhon M",
   "Kim J-W",
   "Ryu S",
   "Lee J-Y",
   "Kim J-M",
   "Park K-H",
   "Jung S-I",
   "Yoon B-H",
   "Kim S-W"
  ],
  "volume": "228",
  "pages": "235-236",
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "mindlink_eip_2021",
  "year": 2021,
  "title": "Mindlink: A stigma-free youth-friendly community-based early-intervention centre in Korea",
  "title_ko": "마인드링크: 낙인 없는 청년 조기개입센터",
  "venue": "Early Interv Psychiatry",
  "doi": "10.1111/eip.13076",
  "pmid": "33233027",
  "type": "other",
  "tier": "C",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P2",
  "cites": 31,
  "methods_tag": [
   "trial"
  ],
  "authors": [
   "Kim S-W",
   "Kim J-K",
   "Jhon M",
   "Lee H-J",
   "Kim H",
   "Kim J-W",
   "Lee J-Y",
   "Kim J-M",
   "Shin I-S"
  ],
  "volume": "15",
  "pages": "1389-1394",
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "covid_network_stress_2021",
  "year": 2021,
  "title": "Network study of responses to unusualness and psychological stress during the COVID-19 outbreak in Korea",
  "title_ko": "코로나19 일상변화·스트레스 네트워크 분석",
  "venue": "PLoS One",
  "doi": "10.1371/journal.pone.0246894",
  "pmid": "33635935",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 28,
  "methods_tag": [
   "psy",
   "survey"
  ],
  "authors": [
   "Ryu S",
   "Park I-H",
   "Kim M",
   "Lee Y-R",
   "Lee J",
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Lee J-Y",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "16",
  "pages": "e0246894",
  "question": "코로나19 유행 중 일상 변화, 감염 공포, 고통 반응은 서로 어떻게 연결되어 있고, 전반적 심리적 스트레스는 이 네트워크의 어느 지점과 연결되며 남녀 간에 다른가?",
  "motivation": "코로나19의 영향에 관한 기존 연구는 감정·생각·행동을 따로 기술하는 데 그쳤다. 행동은 개인과 타인의 여러 요인 간 복잡한 상호작용으로 결정되므로, 네트워크 분석으로 일상의 비일상적 경험과 스트레스 반응을 통합적으로 보고 성차도 비교하려 했다.",
  "conclusion_ko": "한국인의 코로나19 비일상 반응 네트워크에서 '생필품 구하기 어려움'과 '타인에게 피해를 줄까 하는 걱정'이 가장 영향력 있는 문제였으며, 기본적 필요에 대한 불안정감과 집단주의 지향이 경쟁적 역할을 한다. 심리적 스트레스는 남성에서는 경제 문제, 여성에서는 일상활동 제약과 관련해 분노·원망을 유발하는 경향이 있었다.",
  "key_results": [
   {
    "label": "분석 대상자 수",
    "value": 1500,
    "ci": null,
    "comparator": {
     "label": "설문 완료자",
     "value": 1819
    },
    "page": 3
   },
   {
    "label": "네트워크 밀도",
    "value": 0.225,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "EGA 커뮤니티 수 (24노드)",
    "value": 5,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "노드 강도 CS 계수",
    "value": 0.595,
    "ci": null,
    "comparator": {
     "label": "권고 기준",
     "value": 0.5
    },
    "page": 7
   },
   {
    "label": "근접성·매개성 CS 계수",
    "value": "0.283 / 0.361",
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "PSS 노드 추가 네트워크 CS 계수 (강도/근접성/매개성)",
    "value": "0.672 / 0.283 / 0.439",
    "ci": null,
    "comparator": null,
    "page": 8
   },
   {
    "label": "남녀 네트워크 구조 불변성 검정",
    "value": 0.203,
    "ci": null,
    "comparator": null,
    "page": 8
   },
   {
    "label": "남녀 전역 강도 불변성 검정",
    "value": 0.879,
    "ci": null,
    "comparator": null,
    "page": 8
   },
   {
    "label": "'생필품 구하기 어려움'(C2) 문항 중앙값",
    "value": 2,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "질문지 내적 일관성 (Cronbach α, A/B/C)",
    "value": "0.761 / 0.881 / 0.788",
    "ci": null,
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": [
   "참여자가 주로 인구밀도가 높은 대도시 거주자여서 전체 한국인을 대표하지 않는다.",
   "사안의 시급성 때문에 설문 도구가 충분히 타당화되지 않았다.",
   "유행 3개월 시점의 단면 조사라 네트워크 구조가 시간에 따라 바뀔 수 있다.",
   "근접성·매개성 CS 계수가 비교적 낮아 중심성 지표 해석에 주의가 필요하다.",
   "개인주의·집단주의 해석은 탐색적 분석에 기반한 하나의 가능한 설명이며 다른 해석도 가능하다.",
   "한국의 집단주의 문화에 특정한 결과일 수 있다."
  ],
  "data": {
   "source": "온라인 패널(Macromill Embrain) 할당표집 온라인 설문; 수도권·대구·광주 각 500명",
   "n": "1,500명 (19-65세; 1,819명 응답 중 319명 제외)",
   "period": "2020-04-24 ~ 2020-05-05"
  },
  "design": "cross-sectional online survey; network analysis",
  "methods": [
   "EBIC graphical LASSO regularized partial correlation network (qgraph)",
   "exploratory graph analysis with Walktrap (EGAnet)",
   "centrality indices (strength, closeness, betweenness)",
   "bootnet edge-weight bootstrap and case-dropping stability",
   "NetworkComparisonTest (men vs women)",
   "PSS-10 flow diagram"
  ],
  "validation": [
   "bootstrapped edge-weight CIs (2,500)",
   "case-dropping subset bootstrap (CS coefficient)",
   "permutation network comparison test"
  ],
  "cohort_or_program": "COVID-19 psychosocial online survey of 1,500 residents in Seoul metropolitan area, Daegu and Gwangju (April 24-May 5, 2020; CNUH-2020-092)",
  "source_basis": "full_text"
 },
 {
  "id": "discrimination_depression_jad_2021",
  "year": 2021,
  "title": "Predictors and outcomes of experienced and anticipated discrimination in patients treated for depression: A 2-year longitudinal study",
  "title_ko": "우울증 치료 환자의 차별 경험·예상: 예측요인과 2년 결과",
  "venue": "J Affect Disord",
  "doi": "10.1016/j.jad.2021.07.049",
  "pmid": "34375201",
  "type": "original",
  "tier": "A",
  "role": "first",
  "led": true,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 3,
  "methods_tag": [
   "stat",
   "psy"
  ],
  "authors": [
   "Jhon M",
   "Stewart R",
   "Kim J-W",
   "Kang H-J",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "294",
  "pages": "761-768",
  "question": "우울증으로 약물치료를 시작한 환자에서 치료 1년 시점의 경험된 차별과 예상된 차별은 어떤 기저 특성으로 예측되며, 이것이 2년간의 다차원적 우울증 치료 결과와 어떻게 연관되는가?",
  "motivation": "낙인과 차별은 우울증 환자에서 흔하고 우울증 이환을 악화시키지만, 이를 종단적으로 다룬 연구는 드물고 기존 연구는 짧은 추적, 제한된 결과 측정, 작은 표본, 가상 상황 설문에 의존했다. 이에 실제 경험된 차별 행동을 측정하여 예측요인과 치료 결과에 대한 영향을 전향적으로 조사하고자 했다.",
  "conclusion_ko": "치료 중 경험한 차별은 우울·불안 증상, 기능, 질병 중증도, 삶의 질, 장애 등 우울증 치료 결과를 악화시킬 수 있으며, 낮은 친화성과 과거 우울증 병력이 경험된 차별 수준을 예측했다. 차별과 우울증 간 연관을 매개하는 요인을 밝혀 효과적인 예방적 개입을 설계·평가하는 연구가 필요하다.",
  "key_results": [
   {
    "label": "등록 환자 수 / 2년 완료자",
    "value": 230,
    "ci": null,
    "comparator": {
     "label": "2년 완료자",
     "value": 197
    },
    "page": 763
   },
   {
    "label": "차별을 경험한 환자 비율(%)",
    "value": 91,
    "ci": null,
    "comparator": null,
    "page": 764
   },
   {
    "label": "예상된 차별로 스스로 행동을 멈춘 비율(%)",
    "value": 42,
    "ci": null,
    "comparator": null,
    "page": 764
   },
   {
    "label": "Unfair Treatment 하위척도 평균(SD) 점수",
    "value": 3.86,
    "ci": null,
    "comparator": {
     "label": "Stopping Self 하위척도 평균",
     "value": 1.3
    },
    "page": 764
   },
   {
    "label": "경험된 차별 예측: 이전 우울증 병력 IRR (다변량)",
    "value": 1.69,
    "ci": [
     1.25,
     2.28
    ],
    "comparator": null,
    "page": 764
   },
   {
    "label": "경험된 차별 예측: 친화성(BFI-K-10) IRR (다변량)",
    "value": 0.91,
    "ci": [
     0.84,
     0.99
    ],
    "comparator": null,
    "page": 764
   },
   {
    "label": "예상된 차별 예측: 교육연수 IRR (다변량)",
    "value": 1.11,
    "ci": [
     1.05,
     1.17
    ],
    "comparator": null,
    "page": 765
   },
   {
    "label": "예상된 차별 예측: 비혼 상태 IRR (다변량)",
    "value": 1.86,
    "ci": [
     1.14,
     3.03
    ],
    "comparator": null,
    "page": 765
   },
   {
    "label": "예상된 차별 예측: SDS(기능장애) IRR (다변량)",
    "value": 1.04,
    "ci": [
     1.01,
     1.07
    ],
    "comparator": null,
    "page": 765
   },
   {
    "label": "경험된 차별과 HAMD 변화(기저-1년) 편상관",
    "value": -0.302,
    "ci": null,
    "comparator": {
     "label": "기저-2년",
     "value": -0.191
    },
    "page": 765
   },
   {
    "label": "경험된 차별과 SOFAS 변화(기저-1년) 편상관",
    "value": 0.274,
    "ci": null,
    "comparator": {
     "label": "기저-2년",
     "value": 0.163
    },
    "page": 765
   },
   {
    "label": "예상된 차별과 SOFAS 변화(기저-2년) 편상관",
    "value": 0.201,
    "ci": null,
    "comparator": {
     "label": "기저-1년",
     "value": 0.168
    },
    "page": 765
   },
   {
    "label": "다중검정 유의수준",
    "value": 0.042,
    "ci": null,
    "comparator": null,
    "page": 763
   }
  ],
  "limitations": [
   "단일 기관에서 모집되어 일반화 가능성이 제한될 수 있고, 모든 환자가 한국인이다.",
   "기저 시점과 2년차의 차별은 측정하지 않아, 기저 차별의 예측력이나 2년차 차별의 영향을 볼 수 없었다.",
   "항우울제가 성격 특성에 미치는 영향을 완전히 배제할 수 없고, BFI-K-10은 특성당 2문항뿐이며 요인분석으로 도출되지 않았다.",
   "친화성이 낮은 환자가 2년 추적에서 탈락하는 경향이 있어 2년 결과와의 상관이 과소추정되었을 가능성이 있다.",
   "실험적 조작이 없어 역인과(우울 증상이 차별 보고를 증가시킴)를 완전히 배제할 수 없다."
  ],
  "data": {
   "source": "전남대학교병원 정신건강의학과 외래 우울증 환자(MAKE BETTER 프로그램)",
   "n": "230명 등록, 2년 완료 197명",
   "period": "2013년 11월-2017년 8월 모집; 기저-1년-2년 추적"
  },
  "design": "2-year naturalistic prospective cohort",
  "methods": [
   "DISC 12-K (Unfair Treatment, Stopping Self subscales)",
   "HAMD",
   "HADS-A",
   "CGI-S",
   "SOFAS",
   "SDS",
   "EQ-5D",
   "BFI-K-10",
   "negative binomial regression",
   "partial correlation",
   "Benjamini-Hochberg FDR"
  ],
  "validation": [],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER)",
  "source_basis": "full_text"
 },
 {
  "id": "relapse_predictors_jad_2021",
  "year": 2021,
  "title": "Predictors of relapse following a stepwise psychopharmacotherapy regime in patients with depressive disorders",
  "title_ko": "단계적 약물치료 후 우울증 재발 예측인자",
  "venue": "J Affect Disord",
  "doi": "10.1016/j.jad.2021.06.015",
  "pmid": "34175592",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q3"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 5,
  "methods_tag": [
   "stat",
   "trial"
  ],
  "authors": [
   "Kim J-M",
   "Stewart R",
   "Kang H-J",
   "Kim J-W",
   "Lee H-J",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "293",
  "pages": "109-116",
  "question": "자연주의적 단계적 약물치료를 받은 우울장애 외래 환자에서 12주 급성기 치료 후 24개월까지 재발을 예측하는 요인은 무엇인가?",
  "motivation": "기존 재발 예측인자 연구는 대부분 위약 대조 단일 항우울제 시험의 선별된 MDD 표본에 기반해 일반 임상에 일반화하기 어렵다. 조기 임상 결정에 기반한 단계적 약물치료 연구들은 관해만 보았을 뿐 장기 재발과 그 예측인자는 평가하지 않았다.",
  "conclusion_ko": "위약 대조 단일 항우울제 시험에서 보고된 재발 예측인자(이전 삽화 수, 불안, 복약 순응도 등)가 조기 임상결정 기반 단계적 약물치료의 실제 임상에서도 재현되었으며, 더 많은 증강·변경 치료를 받은 환자는 급성기 관해 수준과 무관하게 특별한 주의가 필요하다. 이 결과는 더 넓은 우울장애 스펙트럼과 부분 반응자·관해자 모두에서 재현되었으나, 약물 금단증후군·의인성 효과·내성의 대립 모델이 특정 치료 단계 관련 결과를 교란할 수 있어 다기관·다국가 연구가 필요하다.",
  "key_results": [
   {
    "label": "24개월 누적 재발률",
    "value": 41.9,
    "ci": null,
    "comparator": null,
    "page": 112
   },
   {
    "label": "이전 우울 삽화 수 HR (Model 2)",
    "value": 1.08,
    "ci": "1.01-1.17",
    "comparator": null,
    "page": 113
   },
   {
    "label": "HADS-불안 점수 HR (Model 2)",
    "value": 1.04,
    "ci": "1.00-1.07",
    "comparator": null,
    "page": 113
   },
   {
    "label": "12주 시점 치료 단계 HR (Model 2)",
    "value": 1.22,
    "ci": "1.09-1.37",
    "comparator": null,
    "page": 113
   },
   {
    "label": "12주 이후 낮은 복약 순응도 HR (Model 2)",
    "value": 1.55,
    "ci": "1.25-1.94",
    "comparator": null,
    "page": 113
   },
   {
    "label": "Step 4 누적 재발률",
    "value": 62.5,
    "ci": null,
    "comparator": {
     "label": "Step 1",
     "value": 38.9
    },
    "page": 112
   },
   {
    "label": "Step 4 vs Step 1 재발 위험 HR (보정)",
    "value": 2.05,
    "ci": "1.45-2.92",
    "comparator": {
     "label": "Step 1 (reference)",
     "value": 1.0
    },
    "page": 113
   },
   {
    "label": "12주 시점 HAMD<14 반응자",
    "value": 937,
    "ci": null,
    "comparator": {
     "label": "HAMD>=14",
     "value": 309
    },
    "page": 112
   }
  ],
  "limitations": [
   "향정신성 약물 중단 후 금단증후군을 평가하지 않아 재발 판정이 교란될 수 있다.",
   "자연주의적 설계로 기저 임상 이질성과 의사 간 변이가 결과에 영향을 줄 수 있다.",
   "치료 단계별 환자 수가 불균등해 통계적 검정력이 떨어질 수 있다.",
   "약제 조합이 너무 많아 개별 약물별 결과를 비교하지 않았다.",
   "유지기 추적률이 감소했고 탈락자는 예후 불량 지표를 가졌을 가능성이 있다.",
   "MDD 외에 기분부전장애와 NOS 우울장애도 포함했다.",
   "비구조화된 HAMD 사용으로 평가자 전문성에 의존한다.",
   "단일 기관 모집으로 일반화가 제한될 수 있다.",
   "정신치료·운동 등 비약물 치료의 효과를 조사하지 않았다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 (MAKE BETTER 프로그램)",
   "n": "기저 1,262명; 12주 HAMD<14 반응자 937명 중 24개월 추적 분석 816명",
   "period": "2012-03 ~ 2017-04 모집, 24개월 추적"
  },
  "design": "naturalistic 24-month prospective cohort (stepwise pharmacotherapy)",
  "methods": [
   "stepwise pharmacotherapy (switching, augmentation, combination) at 3-week/3-month decision points",
   "relapse defined as HAMD >= 14 every 3 months from 6 to 24 months",
   "t-tests and chi-square tests",
   "Kaplan-Meier curves with log-rank tests",
   "multivariate Cox proportional hazards models (Model 1 baseline; Model 2 + treatment-related)",
   "sensitivity analysis restricted to remitters (HAMD < 8) at 12 weeks"
  ],
  "validation": [
   "sensitivity analysis restricted to remitters"
  ],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER) programme (cris.nih.go.kr KCT0001332)",
  "source_basis": "full_text"
 },
 {
  "id": "remission_predictors_cpn_2021",
  "year": 2021,
  "title": "Predictors of Remission in Acute and Continuation Treatment of Depressive Disorders",
  "title_ko": "우울장애 급성기·지속기 관해 예측인자",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.2021.19.3.490",
  "pmid": "34294617",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q3"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 12,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim H-Y",
   "Lee H-J",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S",
   "Kim J-M"
  ],
  "volume": "19(3)",
  "pages": "490-497",
  "question": "1년 자연주의적 전향 연구에서 우울장애 환자의 급성기(12주)와 지속기(12개월) 치료 관해를 예측하는 사회인구학적·임상적 요인은 무엇이며 두 시기에 다른가?",
  "motivation": "우울장애 환자의 약 60%는 급성기 치료 후 관해에 이르지 못하며, 결과 예측인자를 파악하면 임상 의사결정과 환자 결과를 개선할 수 있다. 그러나 기존 연구는 주로 급성기에, 그리고 관해보다 반응에 초점을 맞추었기에 지속기까지 포함한 폭넓은 예측인자 탐색이 필요했다.",
  "conclusion_ko": "우울장애 관해를 예측하는 요인은 급성기와 지속기 치료 단계에 따라 다를 수 있다. 급성기에는 짧은 현 삽화 기간·높은 기능·좋은 사회적 지지가, 지속기에는 적은 이전 삽화 수·낮은 지각된 스트레스가 관해와 관련되었다.",
  "key_results": [
   {
    "label": "12주 누적 관해율",
    "value": "43.3%",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "12개월 누적 관해율",
    "value": "70.4%",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "12주 관해: 현 삽화 기간(길수록) 조정 OR",
    "value": 0.98,
    "ci": "0.97-0.99",
    "comparator": null,
    "page": 5
   },
   {
    "label": "12주 관해: SOFAS(높을수록) 조정 OR",
    "value": 1.03,
    "ci": "1.02-1.05",
    "comparator": null,
    "page": 5
   },
   {
    "label": "12주 관해: Social Support Deficit(높을수록) 조정 OR",
    "value": 1.01,
    "ci": "1.00-1.02",
    "comparator": null,
    "page": 5
   },
   {
    "label": "12개월 관해: 이전 우울삽화 수(많을수록) 조정 OR",
    "value": 0.85,
    "ci": "0.78-0.93",
    "comparator": null,
    "page": 5
   },
   {
    "label": "12개월 관해: PSS(높을수록) 조정 OR",
    "value": 0.98,
    "ci": "0.95-1.00",
    "comparator": null,
    "page": 5
   },
   {
    "label": "급성기 관해율: 본 연구 vs STAR*D Level 1 (저자 인용 비교)",
    "value": "43.3%",
    "ci": null,
    "comparator": {
     "label": "STAR*D Level 1",
     "value": "28%"
    },
    "page": 5
   }
  ],
  "limitations": [
   "치료전략이 정해진 프로토콜이 아닌 개별 임상의 판단으로 결정되어 임상의 간 변이가 결과에 영향을 줄 수 있음.",
   "다단계·전환 치료를 받은 환자가 적어 통계적 검정력과 일반화가능성이 떨어질 수 있음.",
   "치료전략 하위군 규모가 작아 항우울제 종류나 병용약물별 결과 비교가 불가능했음.",
   "장기 추적률이 낮았고 추적 탈락자는 기저 예후가 나빴을 가능성이 높음.",
   "단일 기관 모집으로 일반화가능성이 제한될 수 있음.",
   "위약 대조군이 없음."
  ],
  "data": {
   "source": "MAKE BETTER 연구(전남대학교병원 정신건강의학과 외래, KCT0001332)",
   "n": "기저 1,262명; 12주 분석 1,246명; 12개월 분석 1,015명",
   "period": "2012년 3월-2017년 4월 모집"
  },
  "design": "naturalistic prospective cohort (1-year)",
  "methods": [
   "HAMD (remission ≤7)",
   "HADS-A",
   "EQ-5D",
   "SOFAS",
   "PSS",
   "CD-RISC",
   "social support scale",
   "multiple imputation by chained equations",
   "t test / χ2 test",
   "multiple logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "MAKE BETTER (MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response) study, KCT0001332",
  "source_basis": "full_text"
 },
 {
  "id": "burnout_mhworkers_jksbtp_2021",
  "year": 2021,
  "title": "Relationship between Burnout and Turnover Intention among Community-Based Mental Health Workers: The Mediating Effects of Perceived Work Value",
  "title_ko": "정신건강 종사자 소진과 이직의도",
  "venue": "J Korean Soc Biol Ther Psychiatry",
  "doi": "10.22802/jksbtp.2021.27.1.25",
  "pmid": null,
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P2",
  "cites": 1,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Park I",
   "Oh M-J",
   "Kim M",
   "Lee Y-R",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W"
  ],
  "volume": "27(1)",
  "pages": "25-32",
  "question": "지역사회 정신건강 종사자에서 소진과 이직의도의 관계를 지각된 직업가치(보람)가 매개하는가?",
  "motivation": "지역사회 정신건강 종사자의 소진은 이직의도와 관련된다. 소진이 이직으로 이어지는 경로에서 보호 요인으로서 일의 보람의 역할을 확인할 필요가 있다.",
  "conclusion_ko": "지각된 직업가치(보람)는 소진으로 인한 이직의도를 완충할 수 있다.",
  "key_results": [
   {
    "label": "설문 응답 정신건강 종사자 수",
    "value": 161,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "정신건강복지센터 및 중독관리통합지원센터 종사자 설문",
   "n": "161명",
   "period": null
  },
  "design": "cross-sectional survey",
  "methods": [
   "MBI-GS",
   "MOAQ",
   "Scale of Resilience to Burnout (2 items)",
   "bootstrapping mediation analysis"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "web_abstract"
 },
 {
  "id": "depression_covid_general_2021",
  "year": 2021,
  "title": "Risk and protective factors of depression in the general population during the COVID-19 epidemic in Korea",
  "title_ko": "코로나19 시기 일반인 우울의 위험·보호요인",
  "venue": "BMC Psychiatry",
  "doi": "10.1186/s12888-021-03449-y",
  "pmid": "34496823",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 59,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Kim S-W",
   "Park I-H",
   "Kim M",
   "Park A-L",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Ryu S",
   "Lee J-Y",
   "Kim J-M"
  ],
  "volume": "21",
  "pages": "445",
  "question": "코로나19 유행기에 감염되지 않은 한국 일반인에서 우울과 관련된 위험요인과 보호요인은 무엇인가?",
  "motivation": "팬데믹으로 일반인의 우울 위험이 높아졌고 사회적 거리두기·경제 위축이 우울을 유발할 수 있다. 감사·운동 같은 보호요인의 효과를 팬데믹 상황의 일반인에서 살핀 연구는 부족했다.",
  "conclusion_ko": "코로나19 시기 식사·수면·규칙적 운동 등 일상 유지와 감사에 집중하는 것이 우울 예방에 중요할 수 있으며, 젊은층·정신질환자·흡연자 등 취약집단에 더 관심을 기울여야 한다.",
  "key_results": [
   {
    "label": "우울(PHQ-9≥10) 유병률(비감염자)",
    "value": "20.9% (312/1,492)",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "외로움(UCLA-3) 점수 OR",
    "value": 1.646,
    "ci": "1.500-1.806",
    "comparator": null,
    "page": 5
   },
   {
    "label": "감사(GQ-6) 점수 OR",
    "value": 0.933,
    "ci": "0.908-0.957",
    "comparator": null,
    "page": 5
   },
   {
    "label": "팬데믹 중 주 3회 이상 운동 OR",
    "value": 0.672,
    "ci": "0.477-0.947",
    "comparator": null,
    "page": 5
   },
   {
    "label": "식사·수면 장애 점수 OR",
    "value": 1.558,
    "ci": "1.289-1.883",
    "comparator": null,
    "page": 5
   },
   {
    "label": "코로나19 관련 스트레스 점수 OR",
    "value": 1.077,
    "ci": "1.032-1.125",
    "comparator": null,
    "page": 5
   },
   {
    "label": "흡연 OR",
    "value": 1.439,
    "ci": "1.021-2.028",
    "comparator": null,
    "page": 5
   },
   {
    "label": "기저 정신질환 OR",
    "value": 1.95,
    "ci": "1.042-3.648",
    "comparator": null,
    "page": 5
   },
   {
    "label": "연령(1세당) OR",
    "value": 0.983,
    "ci": "0.967-0.999",
    "comparator": null,
    "page": 5
   },
   {
    "label": "모형 설명력 Nagelkerke R2",
    "value": 0.364,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "우울 유병률(본 연구)",
    "value": "21%",
    "ci": null,
    "comparator": {
     "label": "2018년 지역사회건강조사(논문 인용)",
     "value": "4.3%"
    },
    "page": 4
   }
  ],
  "limitations": [
   "코로나19에 감염된 다른 집단에 결과를 일반화할 때 주의가 필요하다.",
   "횡단면 연구라 인과관계가 불확실하다(식사·수면 장애는 우울 증상일 수 있음).",
   "온라인 설문은 대면 조사와 결과가 다를 수 있고 선택 편향 가능성이 있다."
  ],
  "data": {
   "source": "익명 온라인 설문(Macromill Embrain), 수도권·대구·광주 거주 19-65세",
   "n": "1,492명(비감염자; 전체 1,500명)",
   "period": "2020.04.24-2020.05.05"
  },
  "design": "cross-sectional online survey",
  "methods": [
   "PHQ-9 (≥10)",
   "GQ-6",
   "UCLA Loneliness Scale-3",
   "COVID-19 psychosocial questionnaire",
   "chi-square / t-test",
   "multiple logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "Online survey on the psychosocial effects of COVID-19 in the general population (three metropolitan areas; Macromill Embrain panel)",
  "source_basis": "full_text"
 },
 {
  "id": "gratitude_nurses_covid_2021",
  "year": 2021,
  "title": "The association of gratitude with perceived stress among nurses in Korea during COVID-19 outbreak",
  "title_ko": "코로나19 시기 간호사의 감사 성향과 스트레스",
  "venue": "Arch Psychiatr Nurs",
  "doi": "10.1016/j.apnu.2021.10.002",
  "pmid": "34861959",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 40,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Lee J-Y",
   "Kim M",
   "Jhon M",
   "Kim H",
   "Kang H-J",
   "Ryu S",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "35",
  "pages": "647-652",
  "question": "코로나19 유행 초기 한국 간호사의 지각된 스트레스와 관련된 요인은 무엇이며, 감사 성향은 스트레스와 어떤 관계가 있는가?",
  "motivation": "간호사는 감염병 유행 시 환자 직접 접촉과 업무 증가로 다른 의료인보다 높은 심리적 고통을 겪는다. 감사는 스트레스 사건 후 정신건강을 돕는 긍정적 대처로 알려져 있으나 팬데믹 중 간호사의 감사와 스트레스를 본 연구는 드물었다.",
  "conclusion_ko": "팬데믹 시기 간호사에서 감사와 심리적 스트레스 사이에 강한 연관이 있었으며, 감사 성향은 스트레스 회복력을 높이고 정신건강 합병증을 예방할 수 있다. 간호 프로그램에서 감사 같은 긍정적 신념을 강화하는 것이 도움이 될 수 있다.",
  "key_results": [
   {
    "label": "응답 간호사 수 (응답률 %)",
    "value": 646,
    "ci": null,
    "comparator": {
     "label": "설문 배포 간호사 수",
     "value": 669
    },
    "page": 2
   },
   {
    "label": "평균 PSS-10 점수",
    "value": "19.0 ± 4.4",
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "평균 K-GQ-6 점수",
    "value": "30.6 ± 5.8",
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "응급실 간호사 PSS-10 평균",
    "value": "22.62 ± 3.91",
    "ci": null,
    "comparator": {
     "label": "기타 의료서비스 부서",
     "value": "17.73 ± 5.66"
    },
    "page": 3
   },
   {
    "label": "PSS-10과 K-GQ-6 상관계수",
    "value": -0.419,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "PSS-10과 MBI-GS 소진 상관계수",
    "value": 0.587,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "최종 모델 K-GQ-6 표준화 β (PSS-10 예측)",
    "value": -0.152,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "최종 모델 MBI-GS 소진 β",
    "value": 0.453,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "최종 모델 R²",
    "value": 0.502,
    "ci": null,
    "comparator": {
     "label": "사회인구학 변수만 (Model 1)",
     "value": 0.039
    },
    "page": 4
   },
   {
    "label": "임상변수 투입 후 설명 분산 (%)",
    "value": 48.1,
    "ci": null,
    "comparator": {
     "label": "사회인구학 변수만 (%)",
     "value": 3.9
    },
    "page": 2
   },
   {
    "label": "우울/불안 유병률 (%)",
    "value": "19.7 / 8.8",
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "단면 연구여서 변수 간 인과관계를 결론 내릴 수 없다.",
   "자기보고 설문에만 의존해 객관적 자료가 부족하다.",
   "스트레스·소진·우울·불안 변수 간 다중공선성 가능성이 있다.",
   "감사가 스트레스와 정신증상을 완화하는지, 매개효과가 있는지는 추가 연구가 필요하다."
  ],
  "data": {
   "source": "광주 지역 3개 국가지정 병원 간호사 자기보고 설문",
   "n": "646명 (669명 중 응답 완료)",
   "period": "2020-04-02 ~ 2020-04-10"
  },
  "design": "cross-sectional survey",
  "methods": [
   "PSS-10",
   "K-GQ-6",
   "PHQ-9",
   "GAD-7",
   "MBI-GS",
   "t-test/ANOVA",
   "Pearson correlation",
   "stepwise multiple linear regression"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju Mental Health Demonstration Project",
  "source_basis": "full_text"
 },
 {
  "id": "breast_cancer_dep_mortality_tcr_2020",
  "year": 2020,
  "title": "Adverse impact of depression and anxiety on mortality in patients with breast cancer",
  "title_ko": "유방암 환자 우울·불안과 사망률 (논평)",
  "venue": "Transl Cancer Res",
  "doi": "10.21037/tcr-20-2205",
  "pmid": "35117773",
  "type": "other",
  "tier": "C",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P2",
  "cites": 12,
  "methods_tag": [],
  "authors": [
   "Kim S-Y",
   "Jhon M",
   "Kissane DW"
  ],
  "volume": "9",
  "pages": "4046-4051",
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "covid_distress_regions_2020",
  "year": 2020,
  "title": "Comparison of Psychosocial Distress in Areas With Different COVID-19 Prevalence in Korea",
  "title_ko": "코로나19 유행 수준별 지역 심리사회적 고통 비교",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2020.593105",
  "pmid": "33329143",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 32,
  "methods_tag": [
   "psy",
   "survey"
  ],
  "authors": [
   "Kim M",
   "Park I-H",
   "Kang Y-S",
   "Kim H",
   "Jhon M",
   "Kim J-W",
   "Ryu S",
   "Lee J-Y",
   "Kim J-M",
   "Lee J",
   "Kim S-W"
  ],
  "volume": "11",
  "pages": "593105",
  "question": "코로나19 유행 수준이 다른 한국의 세 지역(대구·수도권·광주) 주민 사이에 심리사회적 경험과 스트레스, 우울·불안이 다른가?",
  "motivation": "코로나19는 전파력이 높아 지역 유병률과 인구밀도에 따라 심리사회적 영향이 다를 것으로 예상되며, 팬데믹이 멈춰도 심리사회적 후유증 대책이 필요하다. 이에 지역 유행 수준별 행동 변화와 고통을 파악하고 이를 측정할 설문을 타당화하고자 했다.",
  "conclusion_ko": "코로나19 관련 심리사회적 고통은 지역 유병률과 밀접하게 관련되었으나 우울·불안 수준은 지역 간 차이가 없었다. 장기화되는 유행 상황에서 코로나19 관련 고통에 대한 심리사회적 개입을 개발·준비해야 한다.",
  "key_results": [
   {
    "label": "심리사회적 경험 문항 5요인 누적 설명분산 (%)",
    "value": 63.8,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "심리사회적 경험 19문항 전체 Cronbach's α",
    "value": 0.87,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "코로나19 관련 스트레스 6문항 Cronbach's α",
    "value": 0.79,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "PSS 평균 (고유행 대구)",
    "value": "19.2 ± 4.9",
    "ci": null,
    "comparator": {
     "label": "저유행 광주",
     "value": "18.5 ± 4.6"
    },
    "page": 7
   },
   {
    "label": "코로나19 관련 스트레스 평균 (대구)",
    "value": "3.1 ± 0.8",
    "ci": null,
    "comparator": {
     "label": "광주",
     "value": "2.9 ± 0.8"
    },
    "page": 7
   },
   {
    "label": "식사·수면 장애 요인 평균 (대구)",
    "value": "3.0 ± 1.0",
    "ci": null,
    "comparator": {
     "label": "광주",
     "value": "2.7 ± 0.9"
    },
    "page": 7
   },
   {
    "label": "경제적 스트레스 평균 (대구)",
    "value": "3.6 ± 1.1",
    "ci": null,
    "comparator": {
     "label": "광주",
     "value": "3.3 ± 1.1"
    },
    "page": 7
   },
   {
    "label": "사회에 대한 분노 F (대구 > 광주)",
    "value": 5.68,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "PHQ-9 지역 차이 p",
    "value": 0.06,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "본인 또는 지인 격리·진단 경험 (대구, %)",
    "value": 13.2,
    "ci": null,
    "comparator": {
     "label": "광주 (%)",
     "value": 2.8
    },
    "page": 7
   },
   {
    "label": "대구 10만명당 발생률 (조사 시작 시점)",
    "value": 281.1,
    "ci": null,
    "comparator": {
     "label": "광주",
     "value": 2.1
    },
    "page": 3
   }
  ],
  "limitations": [
   "연구기관 소속 온라인 패널 조사여서 대면조사와 결과가 다를 수 있고 선택 편향 가능성이 있다.",
   "각 지역의 코로나19 이전 심리사회적 상태를 평가하지 않았다.",
   "통계적으로 유의한 일부 변수에서도 집단 간 차이 크기는 작아 임상적 해석에 주의가 필요하다.",
   "광주는 정신건강서비스 수준이 가장 높은 지역이어서 이런 환경 요인이 영향을 약화시켰을 가능성을 배제할 수 없다."
  ],
  "data": {
   "source": "온라인 패널(Macromill Embrain) 일반인 설문, 지역·성·연령 할당표집",
   "n": "1,500명 (지역별 500명; 완료 1,819명 중 319명 제외)",
   "period": "2020-04-24 ~ 2020-05-05"
  },
  "design": "cross-sectional online survey with questionnaire validation",
  "methods": [
   "item analysis",
   "exploratory factor analysis (PCA, Varimax)",
   "Cronbach's alpha",
   "PSS",
   "PHQ-9",
   "GAD-7",
   "one-way ANOVA with Scheffé post-hoc",
   "chi-square test"
  ],
  "validation": [
   "internal consistency (Cronbach's alpha)"
  ],
  "cohort_or_program": "Gwangju Mental Health Demonstration Project",
  "source_basis": "full_text"
 },
 {
  "id": "dup_scz_kjsr_2020",
  "year": 2020,
  "title": "Factors Affecting the Duration of Untreated Psychosis in Community-Dwelling Patients with Schizophrenia Spectrum Disorder",
  "title_ko": "지역사회 조현병 환자의 정신증 미치료 기간 관련 요인",
  "venue": "Korean J Schizophr Res",
  "doi": "10.16946/kjsr.2020.23.1.1",
  "pmid": null,
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q1"
  ],
  "topics": [
   "T1"
  ],
  "phase": "P2",
  "cites": 6,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Kim M",
   "Kim J-K",
   "Jhon M",
   "Kim J-W",
   "Lee J-Y",
   "Kim J-M",
   "Shin I-S",
   "Yoon J-S",
   "Lee M-S",
   "Kim S-W"
  ],
  "volume": "23",
  "pages": "1-7",
  "question": "지역사회에 거주하는 조현병 범주 장애 환자에서 정신증 미치료 기간(DUP)을 길게 만드는 요인은 무엇인가?",
  "motivation": "DUP는 조현병 예후에 영향을 주는 수정 가능한 인자로, DUP를 줄이는 조기중재 전략을 세우려면 지연 관련 요인을 이해해야 한다. 국내 DUP 연구는 대부분 단일 병원 소규모 연구여서 지역과 대상을 넓힌 자료가 필요했다.",
  "conclusion_ko": "DUP가 긴 취약 환자군을 면밀히 관찰해야 하며, DUP를 줄이기 위해 잠행성 경과를 보이는 환자를 찾아내는 전략을 개발할 필요가 있다.",
  "key_results": [
   {
    "label": "분석 대상자 수",
    "value": 600,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "DUP 평균(주)",
    "value": 80.8,
    "ci": null,
    "comparator": {
     "label": "DUP 중위수(주)",
     "value": 15.9
    },
    "page": 1
   },
   {
    "label": "의료급여 비율: DUP 짧은 군 vs 긴 군(%)",
    "value": 30.4,
    "ci": null,
    "comparator": {
     "label": "DUP<16주 군",
     "value": 19.4
    },
    "page": 3
   },
   {
    "label": "의료급여 군간 차이 χ2 / p",
    "value": "9.734 / 0.002",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "전구기 기간 중위수(주): DUP≥16주 군",
    "value": 44,
    "ci": null,
    "comparator": {
     "label": "DUP<16주 군",
     "value": 24
    },
    "page": 3
   },
   {
    "label": "연령 중위수(세): DUP≥16주 군",
    "value": 31,
    "ci": null,
    "comparator": {
     "label": "DUP<16주 군",
     "value": 29
    },
    "page": 3
   },
   {
    "label": "치료 전 가족 상담 비율(%): DUP<16주 군",
    "value": 14.3,
    "ci": null,
    "comparator": {
     "label": "DUP≥16주 군",
     "value": 5.7
    },
    "page": 4
   },
   {
    "label": "치료 전 친척 상담 비율(%): DUP<16주 군",
    "value": 11.6,
    "ci": null,
    "comparator": {
     "label": "DUP≥16주 군",
     "value": 5.6
    },
    "page": 4
   },
   {
    "label": "첫 치료기관 대학병원 비율(%): DUP<16주 군",
    "value": 33.8,
    "ci": null,
    "comparator": {
     "label": "DUP≥16주 군",
     "value": 25.3
    },
    "page": 4
   },
   {
    "label": "첫 치료기관 유형 군간 차이 χ2 / p",
    "value": "6.196 / 0.045",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "다변량: 전구기 기간(log) 긴 DUP OR",
    "value": 1.15,
    "ci": [
     1.05,
     1.28
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "다변량: 의료급여 긴 DUP OR",
    "value": 1.47,
    "ci": [
     0.94,
     2.29
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "다변량: 첫 치료기관 대학병원 긴 DUP OR (기준 100병상 이내)",
    "value": 0.71,
    "ci": [
     0.48,
     1.05
    ],
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "DUP를 환자·가족 기억에 의존해 사례관리자가 후향적으로 조사해 자료의 객관성에 한계가 있다.",
   "정신건강복지센터 이용 회원만 대상으로 해 센터를 이용하지 않는 지역사회 환자를 포함하지 못한 선택 편의가 있을 수 있다.",
   "이환 기간이 비교적 짧은 젊은 환자 중심이고 의료급여 비율이 상대적으로 낮아 전체 환자 특성을 반영하지 못했을 수 있다."
  ],
  "data": {
   "source": "광주광역시 5개구 정신건강복지센터와 경기도 광역정신건강복지센터 신규 등록 회원에 대한 사례관리자 후향적 설문",
   "n": "600명(60세 미만; 전체 참여 725명 중 685명 유효)",
   "period": "2017년 12월-2018년 8월"
  },
  "design": "retrospective cross-sectional survey (case-manager chart-based)",
  "methods": [
   "median split of DUP",
   "chi-square test",
   "Mann-Whitney U test",
   "log transformation",
   "multivariate binary logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "광주정신건강복지사업지원단 정신보건기관 등록회원 DUP 조사 사업 (Gwangju 5-district and Gyeonggi-do mental health welfare centers)",
  "source_basis": "full_text"
 },
 {
  "id": "suicide_attempt_correlates_jksbtp_2020",
  "year": 2020,
  "title": "Psychosocial Correlates of Suicidal Attempts",
  "title_ko": "자살기도의 정신사회적 관련 요인",
  "venue": "J Korean Soc Biol Ther Psychiatry",
  "doi": "10.22802/jksbtp.2020.26.3.203",
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P2",
  "cites": 3,
  "methods_tag": [],
  "authors": [
   "Kim Y-H",
   "Park I-H",
   "Kim H",
   "Jhon M",
   "Kang H-J",
   "Lee J-Y",
   "Yoo S-H",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "26",
  "pages": "203-211",
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "stepwise_outcomes_jad_2020",
  "year": 2020,
  "title": "Short and long-term treatment outcomes of stepwise psychopharmacotherapy based on early clinical decision in patients with depressive disorders",
  "title_ko": "우울장애의 조기 결정 기반 단계적 약물치료 성과",
  "venue": "J Affect Disord",
  "doi": "10.1016/j.jad.2020.05.002",
  "pmid": "32469822",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q3"
  ],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 39,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim J-M",
   "Stewart R",
   "Kang H-J",
   "Kim J-W",
   "Lee H-J",
   "Jhon M",
   "Lee J-Y",
   "Kim S-W",
   "Shin I-S"
  ],
  "volume": "274",
  "pages": "315-325",
  "question": "3주마다 측정과 환자 선호에 근거해 다음 단계 치료(전환·증강·병합)로 넘어가는 단계적 약물치료가 우울장애 외래 환자의 12주·12개월 치료 성과에 어떤 영향을 주는가?",
  "motivation": "초기 항우울제 단독치료의 관해율은 3분의 1 미만이고 조기 임상 결정이 성과를 높인다는 근거가 쌓였지만, 기존 연구는 8-20주 단기 효과만 봤고 병합 전략이나 증강+병합 동시 사용은 평가하지 않았다. 그래서 자연주의적 전향 코호트에서 단기와 장기 성과를 함께 보고자 했다.",
  "conclusion_ko": "측정과 환자 선호에 근거한 조기 임상 결정 기반의 단계적 약물치료는 우울장애의 단기 성과를 높이고 장기 성과에도 적용될 수 있으나, Step 4 이상으로 계속하거나 진행하는 것은 권장되지 않는다. 증강+병합은 경험적으로 권고할 수 있고 전환 전략은 근거가 약하다.",
  "key_results": [
   {
    "label": "기저 환자 수",
    "value": 1262,
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "12주까지 누적 관해율 (%)",
    "value": 43.3,
    "ci": null,
    "comparator": {
     "label": "12주까지 반응률 (%)",
     "value": 59.5
    },
    "page": 5
   },
   {
    "label": "12개월까지 누적 관해율 (%)",
    "value": 70.4,
    "ci": null,
    "comparator": {
     "label": "12개월까지 반응률 (%)",
     "value": 82.8
    },
    "page": 5
   },
   {
    "label": "3주 관해율 (%)",
    "value": 14.7,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "12주 시점 Step 1 단독치료 환자 (%)",
    "value": 42.9,
    "ci": null,
    "comparator": {
     "label": "Step 4 (%)",
     "value": 5.9
    },
    "page": 5
   },
   {
    "label": "12주까지 관해율 Step 4 (%)",
    "value": 55.4,
    "ci": null,
    "comparator": {
     "label": "Step 1 (%)",
     "value": 35
    },
    "page": 7
   },
   {
    "label": "12개월까지 관해율 Step 3 (%)",
    "value": 80.5,
    "ci": null,
    "comparator": {
     "label": "Step 1 (%)",
     "value": 64.3
    },
    "page": 7
   },
   {
    "label": "12개월까지 관해율 증강+병합 (%)",
    "value": 81.4,
    "ci": null,
    "comparator": {
     "label": "항우울제 단독 (%)",
     "value": 64.3
    },
    "page": 7
   },
   {
    "label": "충분히 호전됐는데도 다음 단계를 선택한 환자 (급성기, %)",
    "value": 18.0,
    "ci": null,
    "comparator": {
     "label": "지속기 (%)",
     "value": 9.0
    },
    "page": 5
   },
   {
    "label": "12주 불안 이상반응 Step 4 (%)",
    "value": 48.6,
    "ci": null,
    "comparator": {
     "label": "Step 1 (%)",
     "value": 27.0
    },
    "page": 8
   }
  ],
  "limitations": [
   "치료가 프로토콜이 아니라 임상의 안내하의 환자 선호로 정해져 임상의 간 차이가 결과에 영향을 줄 수 있다.",
   "치료 단계·전략별 환자 수가 고르지 않아 검정력과 일반화가 떨어질 수 있다.",
   "전략이 너무 많아 개별 약물별 성과는 비교하지 못했다.",
   "지속기 추적률이 감소했고 탈락자는 예후 불량 지표가 많았다.",
   "주요우울장애 외에 기분부전·NOS를 포함해 관해율이 높아졌을 수 있다.",
   "단일기관 모집으로 일반화가 제한된다.",
   "조기 임상 결정이 없는 비교군이 없어 인과 추론이 제한된다.",
   "추적 중 비약물치료의 효과는 조사하지 않았다."
  ],
  "data": {
   "source": "전남대병원 정신건강의학과 외래 우울장애 환자 (MAKE BETTER 연구)",
   "n": "기저 1262명; 12주 분석 1246명; 12개월 분석 1015명",
   "period": "2012-03 ~ 2017-04 모집, 12개월 추적"
  },
  "design": "naturalistic prospective cohort (non-randomised, single centre)",
  "methods": [
   "HAMD",
   "HADS-A",
   "EQ-5D",
   "SOFAS",
   "SAFTEE",
   "multiple imputation by chained equations",
   "adjusted logistic regression",
   "ANOVA / chi-square with post-hoc tests"
  ],
  "validation": [],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER)",
  "source_basis": "full_text"
 },
 {
  "id": "disc12k_standardization_2020",
  "year": 2020,
  "title": "Standardization of the Discrimination and Stigma Scale-Korean Version (DISC 12-K) in Patients with Depressive Disorders",
  "title_ko": "우울장애 환자에서 한국어판 차별·낙인 척도(DISC 12-K) 표준화",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2020.0111",
  "pmid": "32571003",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 6,
  "methods_tag": [
   "psy"
  ],
  "authors": [
   "Kim G-O",
   "Yoo T-Y",
   "Kim N-J",
   "Lee H-J",
   "Jhon M",
   "Kim J-W",
   "Kang H-J",
   "Kim S-W",
   "Kim J-M"
  ],
  "volume": "17",
  "pages": "654-661",
  "question": "한국어판 DISC 12(DISC 12-K)가 우울장애 환자의 경험된 낙인과 차별을 신뢰롭고 타당하게 측정하는가?",
  "motivation": "낙인 연구는 주로 대중의 태도를 측정해 왔고, 당사자가 실제 경험한 낙인을 재는 도구는 대부분 심리측정학적으로 검증되지 않았다. 경험된 차별을 평가하는 DISC 12는 여러 언어로 번역되었지만 한국어판은 없었다.",
  "conclusion_ko": "DISC 12-K의 부당대우(Unfair Treatment)와 자기억제(Stopping Self) 하위척도는 우울장애 환자의 낙인을 측정하는 신뢰롭고 타당한 도구이며, 다른 정신장애에서의 타당도 검증이 추가로 필요하다.",
  "key_results": [
   {
    "label": "분석 대상 우울장애 환자 수",
    "value": 230,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "Cronbach's α 범위 (4개 하위척도, 본문)",
    "value": "0.919-0.987",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "Cronbach's α (부당대우 / 자기억제 / 낙인극복 / 긍정대우, 표 4)",
    "value": "0.987 / 0.932 / 0.948 / 0.917",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "평가자 간 ICC 하위척도 수준 (부당대우 / 자기억제 / 낙인극복 / 긍정대우)",
    "value": "0.891 / 0.876 / 0.936 / 0.882",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "검사-재검사 ICC 하위척도 수준 (부당대우 / 자기억제 / 낙인극복 / 긍정대우)",
    "value": "0.828 / 0.630 / 0.711 / 0.684",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "부당대우-자기억제 하위척도 간 Spearman rho",
    "value": 0.341,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "부당대우 하위척도와 BDI 간 Spearman rho",
    "value": 0.283,
    "ci": null,
    "comparator": {
     "label": "자기억제-BDI rho",
     "value": 0.255
    },
    "page": 6
   },
   {
    "label": "부당대우 하위척도와 ISMI 사회적 위축 간 Spearman rho",
    "value": 0.315,
    "ci": null,
    "comparator": {
     "label": "자기억제-ISMI 사회적 위축 rho",
     "value": 0.348
    },
    "page": 6
   },
   {
    "label": "RSES와의 Spearman rho (부당대우 / 자기억제 / 낙인극복 / 긍정대우)",
    "value": "-0.266 / -0.237 / -0.230 / -0.170",
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "'해당 없음' 응답 비율 범위(%)",
    "value": "25.7-59.6",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "가장 흔한 불이익 문항: 가족(문항 7) n(%)",
    "value": "94 (40.4)",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "평균 HAMD / BDI / SOFAS 점수",
    "value": "5.9 / 8.0 / 80.3",
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "단일 기관에서 모집해 일반화 가능성이 제한될 수 있다.",
   "주요우울장애뿐 아니라 기분부전장애와 달리 분류되지 않는 우울장애 환자도 포함되어, 주요우울장애만 다룬 선행 연구와 대상이 다르다.",
   "항우울제 치료 시작 1년 후(유지기)에 시행해 대부분 안정 상태였고, 비교 대상 선행 연구의 우울 중증도·치료 상태 자료는 없었다."
  ],
  "data": {
   "source": "MAKE BETTER 연구(전남대학교병원 정신건강의학과 외래) 참여자",
   "n": "230명(평가자 간 신뢰도 30명, 검사-재검사 200명)",
   "period": "2013년 11월-2017년 8월 등록"
  },
  "design": "psychometric standardization (cross-sectional sub-study of a naturalistic 2-year prospective cohort)",
  "methods": [
   "DISC 12-K",
   "ISMI",
   "HAMD",
   "BDI",
   "SOFAS",
   "RSES",
   "EQ-5D",
   "Cronbach's alpha",
   "item intercorrelation",
   "corrected item-total correlation",
   "ICC (interrater, test-retest)",
   "Spearman correlation"
  ],
  "validation": [
   "internal consistency (Cronbach's alpha)",
   "interrater reliability (ICC, n=30)",
   "test-retest reliability (ICC, n=200)",
   "concurrent validity (Spearman)"
  ],
  "cohort_or_program": "MAKE Biomarker discovery for Enhancing anTidepressant Treatment Effect and Response (MAKE BETTER) study (KCT0001332)",
  "source_basis": "full_text"
 },
 {
  "id": "food_cravings_fep_2020",
  "year": 2020,
  "title": "The Psychology of Food Cravings in Patients With First-Episode Psychosis",
  "title_ko": "초발 정신증 환자의 음식 갈망 심리",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2020.587486",
  "pmid": "33362604",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P2",
  "cites": 8,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim Y-H",
   "Ryu S",
   "Nam H-J",
   "Kim M",
   "Jhon M",
   "Lee J-Y",
   "Kim J-M",
   "Shin MH",
   "Chung Y-C",
   "Kim S-W"
  ],
  "volume": "11",
  "pages": "587486",
  "question": "초발 정신증 환자에서 음식 갈망은 체중 증가 및 어떤 심리적 특성(지각된 스트레스, 우울, 자존감 등)과 관련되며 성별에 따라 다른가?",
  "motivation": "조현병 환자는 비만·대사증후군 위험이 높고 체중 증가가 질병 초기에 일어나지만, 기존 연구는 주로 항정신병약물 등 생물학적 요인과 만성 환자에 집중했다. 식습관·음식 갈망 같은 심리행동 요인이 초발 환자의 체중 증가에 기여하는지 성별로 살펴볼 필요가 있었다.",
  "conclusion_ko": "체중 증가와 관련된 초발 정신증 환자의 음식 갈망은 여성에서 지각된 스트레스의 영향을 받았다. 여성 조현병 환자의 음식 갈망을 줄이기 위해 지각된 스트레스를 겨냥한 개입을 고려해야 한다.",
  "key_results": [
   {
    "label": "등록 초발 정신증 환자 수",
    "value": 182,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "3개월 추적 완료자 (명, %)",
    "value": "150 (82.4%)",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "임상적으로 유의한 체중 증가(≥10%) 환자 (명, %)",
    "value": "44 (29.3%)",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "여성: 기저 체중과 G-FCQ-T 총점 상관 r",
    "value": 0.251,
    "ci": null,
    "comparator": {
     "label": "통제력 상실 하위척도 r",
     "value": 0.346
    },
    "page": 3
   },
   {
    "label": "여성: 체중증가군 G-FCQ-T 총점 평균 (기저 체중 보정)",
    "value": 70.0,
    "ci": null,
    "comparator": {
     "label": "여성 비증가군",
     "value": 60.2
    },
    "page": 5
   },
   {
    "label": "여성: PSS와 G-FCQ-T 총점 상관 r",
    "value": 0.405,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "남성: 통제력 상실 하위척도-RSES 상관 r",
    "value": -0.256,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "여성 회귀: PSS → G-FCQ-T 총점 beta",
    "value": 0.386,
    "ci": null,
    "comparator": {
     "label": "모형 R2",
     "value": 0.22
    },
    "page": 6
   },
   {
    "label": "여성 회귀: PANSS 음성 → 긍정적 결과 기대 beta",
    "value": -0.242,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "성별 × 체중증가 상호작용 (RSES) F",
    "value": 4.582,
    "ci": null,
    "comparator": null,
    "page": 3
   }
  ],
  "limitations": [
   "체중 증가 경향이 낮거나 중간인 항정신병약물 복용자만 포함해, 체중 증가가 큰 약물 복용 환자로 일반화할 때 주의가 필요하다.",
   "음식 섭취를 주관적으로 측정했다.",
   "문화적 차이로 서구 환자에게 적용할 때 고려가 필요하다."
  ],
  "data": {
   "source": "광주 조기치료·개입팀(GETIT) 초발 정신증 임상 코호트",
   "n": "182명(남 78, 여 104); 3개월 추적 150명",
   "period": "2015-09 ~ 2019-12"
  },
  "design": "prospective clinical cohort (baseline cross-sectional associations + 3-month weight follow-up)",
  "methods": [
   "G-FCQ-T",
   "PANSS",
   "CDSS",
   "SOFAS",
   "RSES",
   "PSS",
   "chi-square / t-test / Mann-Whitney U",
   "two-way ANOVA",
   "ANCOVA (baseline weight)",
   "Pearson/Spearman correlation",
   "linear regression",
   "sex-stratified analysis"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju Early Treatment and Intervention Team (GETIT) first-episode psychosis cohort",
  "source_basis": "full_text"
 },
 {
  "id": "covid_media_anxiety_jkms_2020",
  "year": 2020,
  "title": "The Relationships among Media Usage Regarding COVID-19, Knowledge about Infection, and Anxiety: Structural Model Analysis",
  "title_ko": "코로나19 미디어 이용·지식·불안의 구조모형",
  "venue": "J Korean Med Sci",
  "doi": "10.3346/jkms.2020.35.e426",
  "pmid": "33316862",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T2"
  ],
  "phase": "P2",
  "cites": 31,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Lee Y-R",
   "Lee J-Y",
   "Park I-H",
   "Kim M",
   "Jhon M",
   "Kim J-W",
   "Ryu S",
   "Kim J-M",
   "Kim S-W"
  ],
  "volume": "35",
  "pages": "e426",
  "question": "코로나19 관련 미디어 이용과 감염 지식은 감염 공포, 감염자에 대한 편견, 불안에 어떤 영향을 주며, 공포와 편견이 이를 매개하는가?",
  "motivation": "신종 감염병 상황에서 대중은 미디어에 크게 의존하지만, 과장·미확인 보도는 공포와 불안, 낙인을 퍼뜨릴 수 있다. 코로나19 관련 미디어 이용과 그에 따른 심리사회적 영향에 대한 역학 연구가 부족해 이를 구조모형으로 검증하려 했다.",
  "conclusion_ko": "코로나19 관련 대중매체 보도는 공포, 편견, 불안에 유의한 영향을 미쳤다. 지식은 공포·편견·불안을 줄일 수 있지만 미디어 이용은 지식을 높이지 못했으므로, 의학계가 언론 보도를 안내하고 적절한 대중 교육을 제공해야 한다.",
  "key_results": [
   {
    "label": "표본 수",
    "value": 1500,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "미디어 이용 → 감염 공포 (t)",
    "value": 14.156,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "미디어 이용 → 감염자 편견 (t)",
    "value": 8.854,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "미디어 이용 → 불안 (t)",
    "value": 2.471,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "지식 → 감염 공포 (t)",
    "value": -2.39,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "지식 → 감염자 편견 (t)",
    "value": -5.284,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "지식 → 불안 (t)",
    "value": -9.014,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "미디어 이용 → 지식 (CR, 비유의)",
    "value": 1.021,
    "ci": null,
    "comparator": null,
    "page": 7
   },
   {
    "label": "지식-편견-불안 경로 부분매개 효과 (β)",
    "value": -0.27,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "미디어-편견-불안 경로 부분매개 효과 (β)",
    "value": 0.05,
    "ci": [
     0.028,
     0.076
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "미디어-공포-불안 경로 부분매개 효과 (β)",
    "value": 0.088,
    "ci": [
     0.056,
     0.119
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "모형 적합도 CFI",
    "value": 0.946,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "모형 적합도 RMSEA",
    "value": 0.056,
    "ci": [
     0.053,
     0.056
    ],
    "comparator": null,
    "page": 6
   },
   {
    "label": "GAD-7 신뢰도 (Cronbach's α)",
    "value": 0.926,
    "ci": null,
    "comparator": null,
    "page": 4
   }
  ],
  "limitations": [
   "한국의 보도 환경과 코로나19 확산 맥락에서 수행되어 다른 문화로 일반화하기 어렵다.",
   "미디어 이용량만으로 관계를 분석했으며, 매체별 이용 행태와 상대적 영향, 왜곡된 인식과의 관계는 분석하지 못했다.",
   "개인 수준 특성만으로 구조모형을 분석해 확진자 수, 사망자 수, 의료·정신건강 지원 등 지역 수준 변수는 반영하지 못했다."
  ],
  "data": {
   "source": "온라인 패널(EMBRAIN PUBLIC) 비례층화표집 익명 온라인 설문 (수도권·대구·광주 각 500명)",
   "n": "1,500명 (19-65세)",
   "period": "2020-04-24 ~ 2020-05-05"
  },
  "design": "cross-sectional online survey; structural equation modeling",
  "methods": [
   "structural equation modeling (AMOS 20.0)",
   "bootstrapping mediation analysis",
   "GAD-7",
   "Cronbach's alpha"
  ],
  "validation": [],
  "cohort_or_program": "COVID-19 psychosocial online survey of 1,500 residents in Seoul metropolitan area, Daegu and Gwangju (EMBRAIN PUBLIC panel; part of studies described in Kim M et al., Front Psychiatry 2020)",
  "source_basis": "full_text"
 },
 {
  "id": "cape15_validation_2020",
  "year": 2020,
  "title": "Validation of the Korean Version of the 15-Item Community Assessment of Psychic Experiences in a College Population",
  "title_ko": "한국어판 CAPE-15 대학생 타당화",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2019.0215",
  "pmid": "32200606",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q1"
  ],
  "topics": [
   "T1"
  ],
  "phase": "P2",
  "cites": 11,
  "methods_tag": [
   "psy"
  ],
  "authors": [
   "Kim S-W",
   "Kim J-K",
   "Han JH",
   "Jhon M",
   "Kim J-W",
   "Lee J-Y",
   "Kim J-M",
   "Na HJ",
   "Kang Y-S",
   "Chung Y-C",
   "Yoon J-S"
  ],
  "volume": "17",
  "pages": "306-311",
  "question": "한국어판 CAPE-15(정신병적 경험 지역사회 평가 양성 15문항)가 대학생 집단에서 정신병 초고위험(UHR) 선별 도구로서 신뢰도와 타당도를 갖는가?",
  "motivation": "정신병 위험 상태의 조기 발견을 위해 자가보고 선별 후 구조화 면담으로 이어지는 단계적 선별이 권장되나, 기존 국내 도구(PQ-16 등)는 양성예측도가 낮거나 채점이 복잡하다. 짧고 타당한 대안인 CAPE-15의 한국어판 검증이 필요했다.",
  "conclusion_ko": "한국어판 CAPE-15는 지역사회·학교 환경에서 정신병 위험 선별에 좋은 도구이며, 이 척도의 타당화는 한국 지역사회에서 정신병의 조기 발견에 기여할 수 있다.",
  "key_results": [
   {
    "label": "선별 분석 대학생 수",
    "value": 1749,
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "CAARMS UHR 기준 충족자 수",
    "value": 12,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "CAPE-15 고통(distress) 점수 AUROC",
    "value": 0.936,
    "ci": [
     0.892,
     0.98
    ],
    "comparator": {
     "label": "CAPE-15 빈도 점수 AUROC",
     "value": 0.872
    },
    "page": 4
   },
   {
    "label": "mKPQ-16 총점 AUROC",
    "value": 0.839,
    "ci": [
     0.724,
     0.953
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "CAPE-15 고통 점수 절단점 6의 민감도(%)",
    "value": 91.7,
    "ci": null,
    "comparator": {
     "label": "특이도(%)",
     "value": 85.2
    },
    "page": 4
   },
   {
    "label": "CAPE-15 고통 점수 절단점 6의 PPV(%)",
    "value": 32.4,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "CAPE-15 빈도 점수 절단점 6의 민감도/특이도/PPV(%)",
    "value": "100 / 67.6 / 16.9",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "Cronbach's α (빈도 / 고통)",
    "value": "0.867 / 0.835",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "검사-재검사 ICC (빈도 / 고통)",
    "value": "0.659 / 0.859",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "CAPE-15 빈도-고통 점수 상관 r",
    "value": 0.878,
    "ci": null,
    "comparator": null,
    "page": 3
   }
  ],
  "limitations": [
   "대상이 주로 도움을 구하지 않는 젊은 성인이어서, 더 어린 집단이나 임상 환경에서는 절단점 적용에 주의가 필요하다.",
   "연구 대상자 탈락으로 선택 편향이 있었을 수 있다.",
   "대면 임상 면담을 받은 인원이 적었다."
  ],
  "data": {
   "source": "광주 지역 대학생 자기보고 선별 설문 + 전화/대면 반구조화 면담(CAARMS)",
   "n": "1,749명(선별 분석), 면담 후 ROC 분석 198명, UHR 12명",
   "period": "선별 2018년 9-10월; 면담 '2018년 10월-2018년 3월'(원문 표기)"
  },
  "design": "two-stage cross-sectional screening and diagnostic validation study",
  "methods": [
   "CAPE-15",
   "mKPQ-16",
   "PHQ-9",
   "CAARMS (gold standard)",
   "Spearman correlation",
   "Cronbach's alpha",
   "ROC/AUC",
   "ICC (test-retest)"
  ],
  "validation": [
   "internal consistency (Cronbach's alpha)",
   "convergent validity (mKPQ-16)",
   "criterion validity vs CAARMS",
   "test-retest (ICC)"
  ],
  "cohort_or_program": "Mindlink (Gwangju Bukgu Community Mental Health Center) early psychosis program",
  "source_basis": "full_text"
 },
 {
  "id": "social_psych_suicide_jkma_2019",
  "year": 2019,
  "title": "A social psychiatric approach to suicide prevention",
  "title_ko": "자살예방에 대한 사회정신의학적 접근",
  "venue": "J Korean Med Assoc",
  "doi": "10.5124/jkma.2019.62.2.93",
  "pmid": null,
  "type": "review",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T3"
  ],
  "phase": "P1",
  "cites": 20,
  "methods_tag": [
   "stat",
   "case"
  ],
  "authors": [
   "Kim S-W",
   "Jhon M",
   "Kim M",
   "Paik J-W",
   "Kim J-M",
   "Yoon J-S"
  ],
  "volume": "62",
  "pages": "93-101 (issue 2)",
  "question": "광주 정신보건 시범사업 경험과 서울시 구별 자살률 분석을 바탕으로, 사회정신의학적 관점에서 한국의 자살을 줄이기 위한 전략은 무엇인가?",
  "motivation": "2017년 한국 자살 사망자는 12,463명(10만 명당 24.3명)으로 자살은 5번째 사망원인이며 사회경제적 비용이 크지만, 자살예방 투자는 교통사고·신체질환 관리에 비해 부족하다. 2012년부터 광주에서 시범 적용되어 2018년 보건복지부가 우수 평가한 지역사회 자살예방 모형을 소개하고, 자살률에 영향을 주는 사회경제적 요인을 탐색하고자 했다.",
  "conclusion_ko": "정신건강문제·중독의 조기개입과 사례관리, 민관협력에 의한 위기대응과 자살시도자 관리, 경제적 취약계층 복지 연계, 언론의 선정적 자살보도 억제, 자살도구의 제도적 통제가 필요하며, 정부 지원 하의 적극적 사회심리적 전략이 한국의 자살률을 낮출 것이다.",
  "key_results": [
   {
    "label": "자살의 사망원인 순위 및 전체 사망 중 비율",
    "value": "5위, 4.4%",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "2017년 자살 사망자 수 (10만 명당)",
    "value": "12,463명 (24.3명)",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "정신질환자 중 정신의학적 치료를 받는 비율",
    "value": "22%",
    "ci": null,
    "comparator": {
     "label": "정신질환 유병(평생)",
     "value": "약 25%"
    },
    "page": 2
   },
   {
    "label": "광주 '마음건강 주치의' 제도: 정신과 치료 연계 비율 변화",
    "value": "약 4배 상승",
    "ci": null,
    "comparator": null,
    "page": 2
   },
   {
    "label": "서울 구별 정신장애인 거주 비율–자살률 상관",
    "value": "r=0.563",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "서울 구별 고위험음주율–자살률 상관",
    "value": "r=0.606",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "서울 구별 기초생활수급자 비율–자살률 상관",
    "value": "r=0.797",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "서울 구별 아파트 평당 매매가–자살률 상관",
    "value": "r=-0.664",
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "직장인 위험음주군의 자살시도력 (일반음주군 대비)",
    "value": "3배 이상",
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "농약 자살 비중 변화",
    "value": "약 30% → 10% 이하",
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "가스중독(번개탄) 자살 사망자 수 (그림 5)",
    "value": "292 (2008)",
    "ci": null,
    "comparator": null,
    "page": 6
   }
  ],
  "limitations": null,
  "data": {
   "source": "통계청 사망원인통계, 보건복지부 장애인·기초수급자 통계, 지역사회건강조사, 아파트 매매가(서울시 자치구별, 2015-2017 3년 평균), 중앙자살예방센터 자살수단 통계",
   "n": "서울시 행정구(그림상 약 25개 구)",
   "period": "2015-2017 (자살률 3년 평균); 자살수단 2008-2017"
  },
  "design": "narrative review with ecological correlation analysis (Seoul districts) and program description (Gwangju mental health pilot project)",
  "methods": [
   "narrative review",
   "Pearson correlation (district-level ecological)",
   "program description"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju mental health pilot project (광주 정신보건 시범사업; 마음건강 주치의, Mindlink, 열린마음 상담센터, 생명지구대)",
  "source_basis": "full_text"
 },
 {
  "id": "physical_health_monitoring_kjsr_2019",
  "year": 2019,
  "title": "Factors Related to Physical Health Monitoring in Community-Dwelling Patients with Schizophrenia Spectrum Disorder",
  "title_ko": "지역사회 조현병 환자 신체건강 점검 관련 요인",
  "venue": "Korean J Schizophr Res",
  "doi": "10.16946/kjsr.2019.22.1.14",
  "pmid": null,
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 2,
  "methods_tag": [
   "survey"
  ],
  "authors": [
   "Kim M",
   "Jhon M",
   "Lee J-Y",
   "Kim S-Y",
   "Kim J-M",
   "Yoon J-S",
   "Kim SJ",
   "Kim S-W"
  ],
  "volume": "22",
  "pages": "14-20",
  "question": "지역사회에 거주하는 조현병 스펙트럼 장애 환자의 신체건강 점검(공복 혈액검사, 국가건강검진) 시행과 관련된 요인은 무엇인가?",
  "motivation": "조현병 환자는 과체중과 대사증후군 위험이 높지만 신체건강 점검이 충분히 이루어지는지는 불분명하다. 지역사회 환자의 점검 실태와 관련 요인을 파악해야 정신건강 서비스에 신체건강 관리를 통합할 수 있다.",
  "conclusion_ko": "지역사회 정신건강복지센터 서비스에 신체건강 교육을 통합해야 한다.",
  "key_results": [
   {
    "label": "대상 환자 수",
    "value": 172,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "과체중 유병률(%)",
    "value": 62.8,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "대사증후군 유병률(%)",
    "value": 40.1,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "최근 2년 공복 혈액검사 시행률(%)",
    "value": 34.9,
    "ci": null,
    "comparator": null,
    "page": null
   },
   {
    "label": "최근 5년 국가건강검진 수검률(40세 이상, %)",
    "value": 67.9,
    "ci": null,
    "comparator": null,
    "page": null
   }
  ],
  "limitations": null,
  "data": {
   "source": "광주 정신건강복지센터 및 정신재활시설 등록 환자",
   "n": "172명",
   "period": null
  },
  "design": "cross-sectional survey",
  "methods": [
   "group comparison of demographic/clinical characteristics",
   "knowledge about physical illness"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "web_abstract"
 },
 {
  "id": "physical_health_literacy_2019",
  "year": 2019,
  "title": "Physical Health Literacy and Health-related Behaviors in Patients with Psychosis",
  "title_ko": "정신증 환자의 신체건강 이해력과 건강행동",
  "venue": "Clin Psychopharmacol Neurosci",
  "doi": "10.9758/cpn.2019.17.2.279",
  "pmid": "30905128",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 64,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim S-W",
   "Park W-Y",
   "Jhon M",
   "Kim M",
   "Lee J-Y",
   "Kim S-Y",
   "Kim J-M",
   "Shin I-S",
   "Yoon J-S"
  ],
  "volume": "17",
  "pages": "279-287",
  "question": "정신증 환자는 일반인보다 암·고혈압·당뇨 등 신체질환에 대한 지식과 건강행동이 부족한가?",
  "motivation": "조현병 환자는 일반인보다 기대수명이 약 15년 짧고 주된 사망원인은 심혈관질환·암 등 신체질환이다. 건강 지식이 건강행동을 좌우하지만, 조현병 환자의 신체질환 지식과 믿음을 조사한 연구는 드물었다.",
  "conclusion_ko": "정신증 환자는 신체질환 지식과 예방행동 이해가 낮았고, 낮은 지식은 나쁜 건강행동과 관련되었으므로 신체건강 교육이 제공되어야 한다.",
  "key_results": [
   {
    "label": "대상자 수(정신증/대조군)",
    "value": "292 / 420",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "40세 이상 정기 건강검진 수검률(정신증)",
    "value": "61.1%",
    "ci": null,
    "comparator": {
     "label": "일반인",
     "value": "87.6%"
    },
    "page": 4
   },
   {
    "label": "운동하지 않음 보정 OR (정신증 vs 일반인)",
    "value": 2.62,
    "ci": "1.79-3.84",
    "comparator": null,
    "page": 4
   },
   {
    "label": "정기 건강검진 없음 보정 OR",
    "value": 2.62,
    "ci": "1.25-5.48",
    "comparator": null,
    "page": 4
   },
   {
    "label": "과체중(BMI>25) 보정 OR",
    "value": 3.94,
    "ci": "2.67-5.81",
    "comparator": null,
    "page": 4
   },
   {
    "label": "현재/과거 흡연자 비율(정신증)",
    "value": "40.4%",
    "ci": null,
    "comparator": {
     "label": "일반인",
     "value": "32.1%"
    },
    "page": 4
   },
   {
    "label": "'암은 조기 발견하면 대개 치료 가능' 동의(정신증), 보정 OR",
    "value": "87.0% ; OR 0.31",
    "ci": "0.14-0.72",
    "comparator": {
     "label": "대조군 동의율",
     "value": "97.6%"
    },
    "page": 4
   },
   {
    "label": "'증상 없으면 암 검진 불필요' 동의(정신증), 보정 OR",
    "value": "43.3% ; OR 3.08",
    "ci": "2.02-4.68",
    "comparator": {
     "label": "대조군 동의율",
     "value": "15.2%"
    },
    "page": 4
   },
   {
    "label": "'고혈압/당뇨 조절 안 하면 사망 가능' 동의(정신증), 보정 OR",
    "value": "79.4% ; OR 0.47",
    "ci": "0.27-0.81",
    "comparator": {
     "label": "대조군 동의율",
     "value": "92.1%"
    },
    "page": 4
   },
   {
    "label": "현재 흡연자 중 '증상 없으면 암 검진 불필요' 동의율",
    "value": "56.1%",
    "ci": null,
    "comparator": {
     "label": "과거흡연/비흡연 (Fig.1)",
     "value": "35.7% / 38.9%"
    },
    "page": 5
   }
  ],
  "limitations": [
   "신체질환·건강생활 설문이 타당도 검증을 거치지 않았다.",
   "정신병적 증상과 사회기능 평가 척도를 사용하지 않았다.",
   "대도시 정신건강센터 이용자로 한정되어 선택 편향이 있을 수 있다."
  ],
  "data": {
   "source": "Gwangju Comprehensive Health Inspection for Mental Illness 데이터(광주 5개 지역정신건강복지센터) + 연령·성별 매칭 일반인 대조군",
   "n": "712명(정신증 292명, 대조군 420명)",
   "period": "2015.11-2016.11"
  },
  "design": "cross-sectional case-control comparison (questionnaire)",
  "methods": [
   "chi-squared test",
   "independent t-test / ANOVA",
   "logistic regression adjusted for education and medical insurance"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju Comprehensive Health Inspection for Mental Illness data set (Gwangju Mental Health Demonstration Project)",
  "source_basis": "full_text"
 },
 {
  "id": "statins_inflammation_2019",
  "year": 2019,
  "title": "Statins and Inflammation: New Therapeutic Opportunities in Psychiatry",
  "title_ko": "스타틴과 염증: 정신과 치료의 새 가능성",
  "venue": "Front Psychiatry",
  "doi": "10.3389/fpsyt.2019.00103",
  "pmid": "30890971",
  "type": "review",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 174,
  "methods_tag": [
   "case"
  ],
  "authors": [
   "Kim S-W",
   "Kang H-J",
   "Jhon M",
   "Kim J-W",
   "Lee J-Y",
   "Walker AJ",
   "Agustini B",
   "Kim J-M",
   "Berk M"
  ],
  "volume": "10",
  "pages": "103",
  "question": "항염증·항산화 작용을 지닌 스타틴이 우울증, 조현병, 치매 등 정신질환에 치료적·예방적 효과가 있는가?",
  "motivation": "기존 정신과 약물은 주로 모노아민에 작용하지만 일부 환자는 반응하지 않으며, 염증이 우울·조현병·신경인지장애의 핵심 기전이라는 근거가 늘고 있다. 그래서 항염증 작용이 있는 스타틴의 정신질환 효과를 임상시험과 역학연구로 종합하고 임상 적용 정보를 제공하려 했다.",
  "conclusion_ko": "기존 정신과 약물과 병용한 스타틴은 우울증, 조현병, 치매 위험에 효과적일 수 있으며, 신체질환을 동반한 우울에서 특히 유용해 보인다. 정신질환 치료를 위한 최적 용량과 투여 기간은 추가 연구가 필요하다.",
  "key_results": [
   {
    "label": "조현병 대상 스타틴 보조요법 RCT 수",
    "value": 6,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "조현병 RCT 중 소규모(군당 12-36명) 연구 수",
    "value": 5,
    "ci": null,
    "comparator": null,
    "page": 6
   },
   {
    "label": "우울증 메타분석에 포함된 관찰연구 수",
    "value": 7,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "우울증 보조요법 이중맹검 RCT 메타분석 포함 연구 수",
    "value": 3,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "조현병 환자 사망 중 CVD 비율 (%)",
    "value": "50-75",
    "ci": null,
    "comparator": {
     "label": "일반 인구 CVD 사망 비율 (%)",
     "value": 33
    },
    "page": 6
   },
   {
    "label": "스타틴 관련 근육 증상 보고 비율 (%)",
    "value": "10-25",
    "ci": null,
    "comparator": null,
    "page": 9
   },
   {
    "label": "무작위시험 메타분석의 스타틴 당뇨 위험 증가 (%)",
    "value": "9-13",
    "ci": null,
    "comparator": null,
    "page": 9
   },
   {
    "label": "LEADe 연구 환자 수",
    "value": 640,
    "ci": null,
    "comparator": null,
    "page": 7
   }
  ],
  "limitations": [
   "우울증 RCT 메타분석은 연구 수가 적고 추적기간(6-12주)이 짧다는 한계가 있다.",
   "조현병 RCT 다수는 표본이 작고 치료기간이 짧다.",
   "알츠하이머병 환자 대상 RCT의 인지 결과는 일관되지 않다.",
   "스타틴 단독의 항우울 효과는 아직 확인되지 않았다."
  ],
  "data": {
   "source": "임상시험·역학연구 문헌",
   "n": null,
   "period": null
  },
  "design": "narrative review",
  "methods": [
   "literature review",
   "summary tables of epidemiological and interventional studies"
  ],
  "validation": [],
  "cohort_or_program": null,
  "source_basis": "full_text"
 },
 {
  "id": "bmd_antipsychotics_humpsy_2018",
  "year": 2018,
  "title": "Gender-specific risk factors for low bone mineral density in patients taking antipsychotics for psychosis",
  "title_ko": "항정신병약물 복용 환자의 성별 저골밀도 위험요인",
  "venue": "Hum Psychopharmacol Clin Exp",
  "doi": "10.1002/hup.2648",
  "pmid": "29315805",
  "type": "original",
  "tier": "A",
  "role": "first",
  "led": true,
  "questions": [
   "Q4"
  ],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 15,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Jhon M",
   "Yoo T",
   "Lee J-Y",
   "Kim S-Y",
   "Kim J-M",
   "Shin I-S",
   "Williams L",
   "Berk M",
   "Yoon J-S",
   "Kim S-W"
  ],
  "volume": "33",
  "pages": "e2648",
  "question": "지역사회 거주 정신증 환자에서 저골밀도의 임상적 위험요인은 무엇이며, 남녀별로 위험요인이 다른가?",
  "motivation": "조현병 환자는 일반인구보다 저골량 위험이 약 2배이며 골다공증은 숨은 동반질환이다. 항정신병약물로 인한 고프로락틴혈증과 항우울제의 영향에 대한 근거가 일관되지 않고, 성별 위험요인을 고려해야 한다는 제안이 있어 수정 가능한 위험요인을 성별로 찾고자 했다.",
  "conclusion_ko": "정신증 환자의 저골밀도 위험요인에는 성별 차이가 있어 성별에 맞춘 관리가 필요하며, 뼈에 영향을 주는 향정신성 약물은 신중히 처방하고 대안을 고려해야 한다.",
  "key_results": [
   {
    "label": "저골밀도 비율 (%)",
    "value": 20.4,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "저골밀도: 남성 조정 OR (전체)",
    "value": 3.0,
    "ci": [
     1.3,
     6.5
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "저골밀도: 세로토닌계 항우울제 조정 OR (전체)",
    "value": 2.5,
    "ci": [
     1.1,
     5.8
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "저골밀도: BMI 조정 OR (전체)",
    "value": 0.8,
    "ci": [
     0.7,
     0.9
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "저골밀도: 치료기간 조정 OR (전체)",
    "value": 0.7,
    "ci": [
     0.5,
     0.9
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "남성: 치료기간 OR",
    "value": 0.6,
    "ci": [
     0.4,
     0.9
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "여성: 프로락틴 OR",
    "value": 2.5,
    "ci": [
     1.1,
     5.3
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "여성: 저비타민D군 OR",
    "value": 12.5,
    "ci": [
     1.9,
     84.6
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "여성: 세로토닌계 항우울제 OR",
    "value": 34,
    "ci": [
     3.8,
     306.6
    ],
    "comparator": null,
    "page": 3
   },
   {
    "label": "비타민 D 중앙값 (ng/ml)",
    "value": 14.3,
    "ci": null,
    "comparator": null,
    "page": 2
   }
  ],
  "limitations": [
   "성호르몬을 측정하지 않아 프로락틴과 저골밀도의 연관은 신중히 해석해야 한다.",
   "뼈에 영향을 주는 다른 약물, 일조 노출, 음성증상 등 교란요인을 통제하지 못했다.",
   "우울 심각도에 대한 공식 척도를 쓰지 않았다(자살사고로 대체).",
   "항우울제 사용 기간에 따른 용량-반응 관계를 조사하지 않았다."
  ],
  "data": {
   "source": "광주 지역 정신건강복지센터 등록 환자 (Gwangju Comprehensive Health Inspection for Mental Illness 하위연구)",
   "n": "285명 (모연구 386명 중, 60세 이하 정신증)",
   "period": null
  },
  "design": "cross-sectional",
  "methods": [
   "dual-energy X-ray absorptiometry (lumbar spine L1-L4)",
   "chi-square test",
   "t-test",
   "Mann-Whitney U test",
   "multivariate logistic regression (total and sex-stratified)"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju Comprehensive Health Inspection for Mental Illness study (Gwangju Mental Health Demonstration Project)",
  "source_basis": "full_text"
 },
 {
  "id": "iron_negative_symptoms_2018",
  "year": 2018,
  "title": "Latent Iron Deficiency as a Marker of Negative Symptoms in Patients with First-Episode Schizophrenia Spectrum Disorder",
  "title_ko": "초발 조현병의 잠재 철결핍과 음성증상",
  "venue": "Nutrients",
  "doi": "10.3390/nu10111707",
  "pmid": "30412998",
  "type": "original",
  "tier": "B",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 80,
  "methods_tag": [
   "stat"
  ],
  "authors": [
   "Kim S-W",
   "Stewart R",
   "Park W-Y",
   "Jhon M",
   "Lee J-Y",
   "Kim S-Y",
   "Kim J-M",
   "Amminger P",
   "Chung Y-C",
   "Yoon J-S"
  ],
  "volume": "10",
  "pages": "1707",
  "question": "초발 조현병 스펙트럼 장애 환자에서 철 대사(혈청 페리틴 등)가 음성증상과 관련되는가?",
  "motivation": "철결핍은 뇌의 도파민 전달을 바꿀 수 있고 음성증상은 전전두엽 저도파민 상태와 관련되지만, 초발 조현병에서 철 대사와 음성증상의 관계를 본 연구는 없었다. 질병 기간의 교란을 줄이기 위해 치료 초기 환자에서 이를 확인하고자 했다.",
  "conclusion_ko": "현저한 음성증상 환자는 페리틴이 유의하게 낮았고, 질병 기간·우울·정신병 증상·사회기능 등을 보정해도 잠재 철결핍이 음성증상과 유의하게 관련되어 철 기능장애와 음성증상의 관계를 시사한다. 철을 이용한 치료적 개입 가능성은 추가 연구가 필요하다.",
  "key_results": [
   {
    "label": "대상 환자 수",
    "value": 121,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "페리틴 ≤20 ng/mL 환자 비율 (%)",
    "value": 28.1,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "현저한 음성증상 환자 비율 (%)",
    "value": 25.6,
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "현저한 음성증상 비율 (%) (철결핍 vs 정상 페리틴, 초록 표기)",
    "value": 45.2,
    "ci": null,
    "comparator": {
     "label": "normal ferritin",
     "value": 22.2
    },
    "page": 1
   },
   {
    "label": "보정 PANSS 음성요인 점수 (페리틴 ≤20)",
    "value": 20.2,
    "ci": null,
    "comparator": {
     "label": "ferritin >20",
     "value": 18.0
    },
    "page": 6
   },
   {
    "label": "현저한 음성증상의 OR (저페리틴군)",
    "value": 9.2,
    "ci": [
     1.8,
     47.0
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "현저한 음성증상의 OR (로그 페리틴)",
    "value": 5.7,
    "ci": [
     1.1,
     29.8
    ],
    "comparator": null,
    "page": 4
   },
   {
    "label": "페리틴 중앙값 ng/mL (음성증상 있음 vs 없음)",
    "value": 29.3,
    "ci": null,
    "comparator": {
     "label": "no prominent negative symptoms",
     "value": 64.6
    },
    "page": 5
   }
  ],
  "limitations": [
   "단면 자료라 인과 방향을 확정할 수 없다.",
   "혈청 철과 뇌 도파민 대사의 연관은 자료로 뒷받침되지 않았고, 혈청 철이 뇌 철 저장을 정확히 반영하지 않을 수 있다.",
   "혈청 페리틴은 염증 표지자이기도 하다.",
   "철 섭취량을 직접 측정하지 않았다.",
   "질병·치료 기간이 철결핍과 관련될 수 있어 종단 연구가 필요하다."
  ],
  "data": {
   "source": "광주 조기정신증 코호트(GETIT)",
   "n": "121명",
   "period": "2015.09-2018.08"
  },
  "design": "cross-sectional analysis of an early psychosis cohort",
  "methods": [
   "chi-square test",
   "t-test",
   "Mann-Whitney U",
   "ANCOVA",
   "logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "Gwangju Early Treatment and Intervention Team (GETIT) early psychosis cohort; Mindlink (Gwangju Bukgu Community Mental Health Center)",
  "source_basis": "full_text"
 },
 {
  "id": "kpq16_validation_2018",
  "year": 2018,
  "title": "Validation of the Korean version of the 16-Item Prodromal Questionnaire in a Non-Help-Seeking College Population",
  "title_ko": "대학생 대상 한국판 PQ-16 타당화",
  "venue": "Psychiatry Investig",
  "doi": "10.30773/pi.2017.04.24",
  "pmid": "29475231",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [
   "Q1"
  ],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 27,
  "methods_tag": [
   "psy"
  ],
  "authors": [
   "Kim S-W",
   "Chung Y-C",
   "Kang Y-S",
   "Kim J-K",
   "Jang J-E",
   "Jhon M",
   "Lee J-Y",
   "Kim J-M",
   "Shin I-S",
   "Yoon J-S"
  ],
  "volume": "15(2)",
  "pages": "111-117",
  "question": "한국판 16문항 전구증상 설문(KPQ-16)과 ESI 3문항을 더한 수정판(mKPQ-16)은 도움을 구하지 않는 대학생에서 정신증 초고위험(UHR)을 선별하는 데 신뢰도와 타당도가 있는가?",
  "motivation": "한국은 정신증 미치료 기간이 서구보다 길어 청년의 조기 발견 전략이 시급하지만, CAARMS 같은 구조화 면담은 일반 인구 선별에 부적합하다. 대규모 선별에는 짧고 간단한 자기보고 도구가 필요해 PQ-16 한국판을 타당화했다.",
  "conclusion_ko": "KPQ-16과 mKPQ-16은 지역사회와 학교에서 쓸 수 있는 좋은 선별 도구이며, 문항 수가 적어 다수의 학생·청년을 선별할 수 있다. 이 도구의 타당화는 정신증의 조기 발견과 신속한 조기 개입을 통한 미치료 기간 단축에 기여할 수 있다.",
  "key_results": [
   {
    "label": "CAARMS UHR 기준 충족자",
    "value": "17명 (6.6%) / 면담 257명",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "mKPQ-16 총점 AUROC",
    "value": 0.831,
    "ci": "0.764-0.898",
    "comparator": {
     "label": "KPQ-16 총점 AUROC",
     "value": 0.702
    },
    "page": 4
   },
   {
    "label": "KPQ-16 총점 AUROC 95% CI",
    "value": 0.702,
    "ci": "0.564-0.840",
    "comparator": null,
    "page": 4
   },
   {
    "label": "mKPQ-16 절단점 7: 민감도 / 특이도 / PPV",
    "value": "76.5% / 75.4% / 18.1%",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "KPQ-16 절단점 6: 민감도 / 특이도",
    "value": "64.7% / 71.2%",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "mKPQ-16 절단점 6: 민감도 / 특이도 / PPV",
    "value": "100% / 53.3% / 13.2%",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "고통 점수 AUC (KPQ-16 / mKPQ-16)",
    "value": "0.716 / 0.796",
    "ci": null,
    "comparator": null,
    "page": 4
   },
   {
    "label": "Cronbach α (KPQ-16 / mKPQ-16)",
    "value": "0.680 / 0.685",
    "ci": null,
    "comparator": {
     "label": "충분한 내적 일관성 기준",
     "value": ">0.65"
    },
    "page": 5
   },
   {
    "label": "KPQ-16 총점 검사-재검사 ICC",
    "value": 0.478,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "ESI-KPQ-16 총점 Spearman 상관",
    "value": 0.644,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "우울장애 진단 (대면 60명 중) / UHR군 내 우울장애 유병률",
    "value": "15명 (25.0%) / 29.4% (p=0.743)",
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "1단계 KPQ-16 ≥4점 비율",
    "value": "518명 (23.1%)",
    "ci": null,
    "comparator": null,
    "page": 2
   }
  ],
  "limitations": [
   "참여자가 도움을 구하지 않는 일반 대학생 청년이므로, 치료 추구 집단이나 더 어린 집단에서는 다른 절단점이 적합할 수 있다.",
   "단면 연구여서 정신증 전환에 대한 예측 타당도는 추가 종단 연구가 필요하다.",
   "KPQ-16 4점 미만은 2단계에 포함되지 않았고 많은 후보가 대면 면담에 참여하지 않아 선택 편향 가능성이 있다.",
   "PPV가 비교적 낮아 비치료 추구 집단에서 위양성과 낙인 가능성을 신중히 고려해야 한다."
  ],
  "data": {
   "source": "한 대학 신입생 익명 설문(1단계 KPQ-16 선별) + KPQ-16 ≥4점 대상 CAARMS 반구조화 면담(2단계)",
   "n": "선별 2,246명 (신입생 2,921명 중 76.9%), 면담 257명, 대면 평가 60명",
   "period": "2016-02 선별, 2016-03 ~ 2016-04 초 진단 면담"
  },
  "design": "two-stage cross-sectional screening validation study",
  "methods": [
   "KPQ-16 and mKPQ-16 (KPQ-16 + ESI items 4, 5, 8)",
   "CAARMS UHR criteria as gold standard",
   "ROC/AUC analysis with sensitivity, specificity, PPV, NPV",
   "Cronbach alpha and ICC test-retest",
   "Spearman correlation with ESI (convergent validity)",
   "Mann-Whitney U test vs PHQ-9 and MINI depressive disorder (discriminant validity)",
   "Fisher's exact test"
  ],
  "validation": [
   "gold-standard interview (CAARMS)",
   "test-retest (about 1 month)",
   "convergent and discriminant validity"
  ],
  "cohort_or_program": "Mindlink (Gwangju Bukgu Community Mental Health Center) / Gwangju Mental Health Demonstration Project college screening",
  "source_basis": "full_text"
 },
 {
  "id": "hazardous_drinking_workers_jkna_2017",
  "year": 2017,
  "title": "Addictive Behavior and Personality among Workers with Hazardous Alcohol Drinking",
  "title_ko": "위험음주 직장인의 중독 성향과 성격",
  "venue": "J Korean Neuropsychiatr Assoc",
  "doi": "10.4306/jknpa.2017.56.4.175",
  "pmid": null,
  "type": "original",
  "tier": "A",
  "role": "first",
  "led": true,
  "questions": [],
  "topics": [
   "T3"
  ],
  "phase": "P1",
  "cites": 13,
  "methods_tag": [
   "stat",
   "survey"
  ],
  "authors": [
   "Jhon M",
   "Lee J-Y",
   "Hong J-E",
   "Yoo T",
   "Kim S-Y",
   "Kim J-M",
   "Shin I-S",
   "Yoon J-S",
   "Kim S-W"
  ],
  "volume": "56(4)",
  "pages": "175-180",
  "question": "위험음주를 하는 직장인은 그렇지 않은 직장인과 비교해 사회인구학적 특성, 중독 성향(흡연·인터넷·스마트폰), 정신의학적 특성 및 성격 특성에서 어떻게 다른가?",
  "motivation": "직장인 음주 문제 연구는 주로 음주 문화, 직무 스트레스, 음주 기대 등 환경·심리·인지적 요인에 집중되어 왔다. 중독 성향과 성격 같은 개인적 요인도 평가·개입에 중요하므로, 직장인 위험음주군의 특성을 비교해 이해와 개입의 기초자료를 제공하고자 했다.",
  "conclusion_ko": "직장인의 위험음주는 흡연, 스마트폰 중독 등 다른 중독행동과 공존하는 경향이 있어 공통 중독 기전을 시사하며, 단일 측면보다 행위·물질 중독에 대한 종합적 평가와 중재가 중요하다. 또한 위험음주자에서 자살 위험에 대한 면밀한 평가가 필요하다.",
  "key_results": [
   {
    "label": "위험음주 유병률",
    "value": "34.6% (168/486)",
    "ci": null,
    "comparator": null,
    "page": 1
   },
   {
    "label": "흡연력과 위험음주 (조정 OR)",
    "value": 2.89,
    "ci": "1.61-5.18",
    "comparator": null,
    "page": 4
   },
   {
    "label": "자살시도력과 위험음주 (조정 OR)",
    "value": 3.14,
    "ci": "1.23-7.98",
    "comparator": null,
    "page": 4
   },
   {
    "label": "스마트폰 중독과 위험음주 (조정 OR)",
    "value": 2.14,
    "ci": "1.09-4.22",
    "comparator": null,
    "page": 4
   },
   {
    "label": "BFI-K-10 외향성과 위험음주 (조정 OR)",
    "value": 1.31,
    "ci": "1.10-1.56",
    "comparator": null,
    "page": 4
   },
   {
    "label": "흡연 경험 비율: 위험음주군 vs 비위험음주군",
    "value": "47.6%",
    "ci": null,
    "comparator": {
     "label": "비위험음주군",
     "value": "23.6%"
    },
    "page": 3
   },
   {
    "label": "자살시도 경험 비율: 위험음주군 vs 비위험음주군",
    "value": "10.2%",
    "ci": null,
    "comparator": {
     "label": "비위험음주군",
     "value": "3.8%"
    },
    "page": 3
   }
  ],
  "limitations": [
   "자기보고식 질문지만 사용했고 횡단적 설계라 인과관계 해석에 제한이 있음.",
   "대상자의 음주력·가족력 및 도박·게임 등 기타 중독을 반영하지 못함.",
   "전문직·고학력·고소득 대상자가 상당수 포함되어 일반 근로자와 직장 음주문화·직무 스트레스 영향이 다를 수 있음.",
   "직급에 따른 업무 가중도 차이를 고려하지 못함."
  ],
  "data": {
   "source": "2016년 광주정신보건사업지원단 광주 시민 정신건강 현황조사(광주 시민 718명 설문) 중 직장인",
   "n": "486명 (위험음주 168명)",
   "period": "2016"
  },
  "design": "cross-sectional survey",
  "methods": [
   "AUDIT-K",
   "Korean Internet Addiction Test",
   "Smartphone Addiction Scale",
   "HADS",
   "PSS",
   "K-CD-RISC",
   "BFI-K-10",
   "chi-square test",
   "independent t-test",
   "logistic regression"
  ],
  "validation": [],
  "cohort_or_program": "2016 Gwangju citizen mental health status survey (광주 시민 정신건강 현황조사), Gwangju Mental Health Commission; 보건복지부·광주광역시 정신보건 시범사업",
  "source_basis": "full_text"
 },
 {
  "id": "glur2_gapdh_ijnp_abs_2016",
  "year": 2016,
  "title": "Disrupting GluR2-GAPDH interaction affects axon and dendrite development",
  "title_ko": null,
  "venue": "IJNP",
  "doi": null,
  "pmid": null,
  "type": "conference abstract",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [],
  "phase": null,
  "cites": 0,
  "methods_tag": [],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "vienna_omega3_fa_2016",
  "year": 2016,
  "title": "Relationship between Erythrocyte Fatty Acid Composition and Psychopathology in the Vienna Omega-3 Study",
  "title_ko": "정신증 고위험군의 적혈구 지방산과 증상",
  "venue": "PLoS One",
  "doi": "10.1371/journal.pone.0151417",
  "pmid": "26963912",
  "type": "original",
  "tier": "A",
  "role": "co-author",
  "led": false,
  "questions": [],
  "topics": [
   "T1"
  ],
  "phase": "P1",
  "cites": 57,
  "methods_tag": [
   "bio",
   "stat"
  ],
  "authors": [
   "Kim S-W",
   "Jhon M",
   "Kim J-M",
   "Smesny S",
   "Rice S",
   "Berk M",
   "Klier CM",
   "McGorry PD",
   "Schäfer MR",
   "Amminger GP"
  ],
  "volume": "11",
  "pages": "e0151417",
  "question": "항정신병약물을 쓰지 않은 정신증 초고위험(UHR) 청소년·청년에서 적혈구막 지방산 조성이 증상 심각도(특히 음성증상)와 관련되는가?",
  "motivation": "조현병 환자에서 다가불포화지방산(PUFA) 결핍이 보고되었으나 어떤 PUFA가 어떤 증상과 관련되는지는 불분명하다. 약물·병의 진행이라는 교란을 피하려면 전구기(UHR) 단계의 지방산 프로필 평가가 필요했다.",
  "conclusion_ko": "지방산 대사 이상은 정신증 초고위험군의 정신병리, 특히 음성증상의 신경생물학적 원인과 관련될 수 있으며, 막 지방산은 조기 생체표지자이자 예방적 개입 대상이 될 수 있다.",
  "key_results": [
   {
    "label": "분석 대상(UHR, 기저 지방산 측정)",
    "value": 80,
    "ci": null,
    "comparator": null,
    "page": 3
   },
   {
    "label": "에이코세노산–PANSS 음성증상 편상관",
    "value": 0.478,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "에루크산–PANSS 음성증상 편상관",
    "value": 0.446,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "신경산(nervonic)–PANSS 양성증상 편상관",
    "value": -0.231,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "ω-6:ω-3 비율–PANSS 음성증상 편상관",
    "value": 0.305,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "ω-3 합계–PANSS 음성증상 편상관",
    "value": -0.239,
    "ci": null,
    "comparator": null,
    "page": 5
   },
   {
    "label": "ω-3 지방산 합계(음성우세군, mol%)",
    "value": 5.0,
    "ci": null,
    "comparator": {
     "label": "양성우세군",
     "value": 5.77
    },
    "page": 7
   },
   {
    "label": "ω-6:ω-3 비율(음성우세군)",
    "value": 5.94,
    "ci": null,
    "comparator": {
     "label": "양성우세군",
     "value": 5.13
    },
    "page": 7
   },
   {
    "label": "단일불포화지방산 합계(음성우세군, mol%)",
    "value": 28.78,
    "ci": null,
    "comparator": {
     "label": "양성우세군",
     "value": 26.45
    },
    "page": 7
   },
   {
    "label": "GAF 점수(음성우세군)",
    "value": 54.0,
    "ci": null,
    "comparator": {
     "label": "양성우세군",
     "value": 65.0
    },
    "page": 6
   }
  ],
  "limitations": [
   "표본이 작고 분석한 지방산이 많아 1·2종 오류 위험이 있으므로 탐색적 결과로 보아야 한다.",
   "지방산 변화가 일차적(신경생물학) 요인인지 이차적(식이 변화) 요인인지 알 수 없다."
  ],
  "data": {
   "source": "Vienna omega-3 study RCT(NCT00396643) 기저 자료, 비엔나 의대 정신증 조기발견 클리닉",
   "n": "80명(13-25세 UHR, 항정신병약물 미복용)",
   "period": "약 2년간 연속 의뢰(연도는 본문에 미기재)"
  },
  "design": "cross-sectional analysis of RCT baseline data (exploratory)",
  "methods": [
   "gas chromatography of erythrocyte membrane PE fatty acids",
   "partial correlation (adjusted for age, sex, smoking, cannabis)",
   "ANOVA with Bonferroni post hoc",
   "PANSS / MADRS / GAF"
  ],
  "validation": [],
  "cohort_or_program": "Vienna omega-3 study (NCT00396643)",
  "source_basis": "full_text"
 },
 {
  "id": "statins_acs_ijnp_abs_2016",
  "year": 2016,
  "title": "The use of statins for the treatment of depression in patients with acute coronary syndrome",
  "title_ko": null,
  "venue": "IJNP",
  "doi": null,
  "pmid": null,
  "type": "conference abstract",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [],
  "phase": null,
  "cites": 0,
  "methods_tag": [],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "bpsd_iadl_mci_jksbtp",
  "year": null,
  "title": "Behavioral and psychological symptoms and instrumental activities of daily living in patients with mild cognitive impairment",
  "title_ko": "경도인지장애의 행동심리증상과 IADL",
  "venue": "J Korean Soc Biol Ther Psychiatry",
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T7"
  ],
  "phase": "P_parallel",
  "cites": 0,
  "methods_tag": [],
  "authors": null,
  "volume": "32(1)",
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "inflammation_precision_med_dep",
  "year": null,
  "title": "Inflammation-based precision medicine for depression: from biomarkers to clinical application",
  "title_ko": "염증 기반 우울증 정밀의학 리뷰",
  "venue": null,
  "doi": null,
  "pmid": null,
  "type": "review",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [
   "case"
  ],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 },
 {
  "id": "folate_social_support_2026",
  "year": null,
  "title": "Interaction of serum folate and social support in relation to antidepressant outcomes in depression: a 1-year prospective study",
  "title_ko": "혈청 엽산·사회적 지지와 항우울 치료 결과",
  "venue": null,
  "doi": null,
  "pmid": null,
  "type": "original",
  "tier": "C",
  "role": "unknown",
  "led": false,
  "questions": [],
  "topics": [
   "T4"
  ],
  "phase": "P3",
  "cites": 0,
  "methods_tag": [],
  "authors": null,
  "volume": null,
  "pages": null,
  "question": null,
  "motivation": null,
  "conclusion_ko": null,
  "key_results": null,
  "limitations": null,
  "data": null,
  "design": null,
  "methods": null,
  "validation": null,
  "cohort_or_program": null,
  "source_basis": null
 }
];
const STATS={
 "total": 97,
 "led": 12,
 "by_year": {
  "2016": {
   "total": 3,
   "led": 0
  },
  "2017": {
   "total": 1,
   "led": 1
  },
  "2018": {
   "total": 3,
   "led": 1
  },
  "2019": {
   "total": 4,
   "led": 0
  },
  "2020": {
   "total": 9,
   "led": 0
  },
  "2021": {
   "total": 12,
   "led": 2
  },
  "2022": {
   "total": 13,
   "led": 2
  },
  "2023": {
   "total": 7,
   "led": 2
  },
  "2024": {
   "total": 7,
   "led": 0
  },
  "2025": {
   "total": 19,
   "led": 1
  },
  "2026": {
   "total": 16,
   "led": 3
  },
  "unknown": {
   "total": 3,
   "led": 0
  }
 },
 "by_phase": {
  "P1": 9,
  "P2": 25,
  "P3": 26,
  "P4": 21,
  "P_parallel": 13,
  "none": 3
 },
 "by_topic": {
  "T1": 15,
  "T2": 11,
  "T3": 9,
  "T4": 26,
  "T5": 18,
  "T6": 3,
  "T7": 12
 },
 "by_role": {
  "first": 6,
  "co-first": 2,
  "corresponding": 0,
  "co-corresponding": 4,
  "co-author": 72,
  "unknown": 13
 },
 "by_tier": {
  "A": 16,
  "B": 64,
  "C": 17
 },
 "year_topic": {
  "years": [
   "2016",
   "2017",
   "2018",
   "2019",
   "2020",
   "2021",
   "2022",
   "2023",
   "2024",
   "2025",
   "2026",
   "unknown"
  ],
  "topics": [
   "T1",
   "T2",
   "T3",
   "T4",
   "T5",
   "T6",
   "T7"
  ],
  "matrix": [
   [
    1,
    0,
    0,
    0,
    0,
    0,
    0
   ],
   [
    0,
    0,
    1,
    0,
    0,
    0,
    0
   ],
   [
    3,
    0,
    0,
    0,
    0,
    0,
    0
   ],
   [
    3,
    0,
    1,
    0,
    0,
    0,
    0
   ],
   [
    3,
    2,
    1,
    2,
    0,
    0,
    1
   ],
   [
    1,
    6,
    1,
    3,
    0,
    0,
    1
   ],
   [
    1,
    3,
    2,
    4,
    0,
    0,
    3
   ],
   [
    2,
    0,
    1,
    0,
    3,
    0,
    1
   ],
   [
    0,
    0,
    1,
    0,
    3,
    0,
    3
   ],
   [
    1,
    0,
    1,
    11,
    4,
    0,
    1
   ],
   [
    0,
    0,
    0,
    4,
    8,
    3,
    1
   ],
   [
    0,
    0,
    0,
    2,
    0,
    0,
    1
   ]
  ]
 }
};
/* 해설 글이 있는 A 등급 논문. 같은 객체를 가리킨다. */
const POSTS=PAPERS.filter(p=>p.tier==="A"&&p.slug);
window.CATALOG={CORE,QUESTIONS,PHASES,TOPICS,METHODS,PAPERS,POSTS,STATS};
})();
