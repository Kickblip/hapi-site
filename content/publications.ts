// IMPORTANT: if introducing a new tag, add it to the list of possible tags and tag type exactly as it appears in the publication
export type Tag = "Human-Aware AI" | "XAI" | "Planning and Learning" | "Model-Lite Planning" | "Value Alignment" | "Other"

export interface Publication {
  title: string
  url: string
  tags: Tag[]
  authors: string
  year: number
  additional: string
}

// JSON for publications section of the Research page

export const publications: Publication[] = [
  {
    title: "Explain it as simple as possible, but no simpler – Explanation via model simplification for addressing inferential gap",
    url: "https://sarathsreedharan.com/files/papers/journals/_AIJ__Model_Simplification__Combined_.pdf",
    tags: ["Human-Aware AI", "XAI"],
    authors: "Sarath Sreedharan, Siddharth Srivastava, Subbarao Kambhampati",
    year: 2025,
    additional: "AI Journal",
  },
  {
    title: "Goals vs. Rewards: Towards A Comparative Study of Objective Specification Mechanisms",
    url: "https://sarathsreedharan.com/files/papers/conference/HRI_LBR_Goals_vs_Rewards.pdf",
    tags: ["Human-Aware AI"],
    authors: "Septia Rani, Serena Booth, Sarath Sreedharan",
    year: 2025,
    additional: "HRI 2025 (Late-Breaking Reports)",
  },
  {
    title: "Who Am I Dealing With? Explaining the Designer's Hidden Intentions",
    url: "https://sarathsreedharan.com/files/papers/conference/_CamReady_AAMAS_25__Designer.pdf",
    tags: ["Human-Aware AI"],
    authors: "Turgay Caglar, Sarath Sreedharan, Mor Vered",
    year: 2025,
    additional: "AAMAS 2025.",
  },
  {
    title: "Excuse My Explanations: Integrating Excuses and Model Reconciliation for Actionable Explanations",
    url: "https://sarathsreedharan.com/files/papers/conference/HRI__Excuse_Explanation_ARE__Cam_Ready.pdf",
    tags: ["Human-Aware AI"],
    authors: "Turgay Caglar, Zahra Zahedi, Sarath Sreedharan",
    year: 2025,
    additional: "HRI 2025.",
  },
  {
    title: "Resiliency Graphs: Modelling the Interplay between Cyber Attacks and System Failures through AI Planning",
    url: "https://sarathsreedharan.com/files/papers/conference/IEEE_TPS__Resiliency_Graphs.pdf",
    tags: ["Other"],
    authors: "Shadaab Kawnain Bashir, Rakesh Podder, Sarath Sreedharan, Indrakshi Ray, and Indrajit Ray",
    year: 2024,
    additional: "IEEE TPS 2024. (Won Best Paper Award)",
  },
  {
    title: "Expectation Alignment: Handling Reward Misspecification in the Presence of Expectation Mismatch",
    url: "https://arxiv.org/abs/2404.08791",
    tags: ["Human-Aware AI", "Value Alignment"],
    authors: "Malek Mechergui, Sarath Sreedharan",
    year: 2024,
    additional: "NeurIPS 2024.",
  },
  {
    title: "Planning with Mental Models – Balancing Explanations and Explicability",
    url: "http://sarathsreedharan.com/files/papers/journals/_AIJ__Balancing__Submission_Copy_.pdf",
    tags: ["Human-Aware AI", "XAI"],
    authors: "Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, and Subbarao Kambhampati",
    year: 2024,
    additional: "Artificial Intelligence Journal. July 2024 (Accepted)",
  },
  {
    title: "HELP! Providing Proactive Support in the Presence of Knowledge Asymmetry.",
    url: "http://sarathsreedharan.com/files/papers/conference/_AAMAS_2024_HELP.pdf",
    tags: ["Human-Aware AI"],
    authors: "Turguy Caglar, and Sarath Sreedharan",
    year: 2024,
    additional: "AAMAS. 2024",
  },
  {
    title: "Can LLMs Fix Issues with Reasoning Models? Towards More Likely Models for AI Planning.",
    url: "https://ojs.aaai.org/index.php/AAAI/article/view/28875",
    tags: ["Planning and Learning"],
    authors: "Turguy Caglar, Sirine Belhaj, Michael Katz, Tathagata Chakraborti, and Sarath Sreedharan",
    year: 2024,
    additional: "AAAI. 2024",
  },
  {
    title: "Goal Alignment: Re-analyzing Value Alignment Problems Using Human-Aware AI.",
    url: "https://ojs.aaai.org/index.php/AAAI/article/view/28875",
    tags: ["Human-Aware AI", "Value Alignment"],
    authors: "Malek Mechergui and Sarath Sreedharan",
    year: 2024,
    additional: "AAAI. 2024",
  },
  {
    title: "Human-Aware AI – A Foundational Framework for Human-AI Interaction.",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.12142",
    tags: ["XAI", "Value Alignment", "Human-Aware AI"],
    authors: "Sarath Sreedharan",
    year: 2023,
    additional: "Published in AI Magazine 2023",
  },
  {
    title: "Optimistic Exploration in Reinforcement Learning Using Symbolic Model Estimates",
    url: "https://openreview.net/forum?id=rpQSjBbqMi",
    tags: ["Planning and Learning"],
    authors: "Sarath Sreedharan, M. Katz",
    year: 2023,
    additional: "NeurIPS 2023",
  },
  {
    title: "On the Planning Abilities of Large Language Models -- A Critical Investigation",
    url: "https://arxiv.org/abs/2305.15771",
    tags: ["Planning and Learning"],
    authors: "Karthik Valmeekam, M. Marquez, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2023,
    additional: "NeurIPS 2023 (Accepted as Spotlight)",
  },
  {
    title: "Leveraging Pre-trained Large Language Models to Construct and Utilize World Models for Model-based Task Planning",
    url: "https://arxiv.org/abs/2305.15771",
    tags: ["Planning and Learning"],
    authors: "L. Guan*, Karthik Valmeekam*, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2023,
    additional: "NeurIPS 2023",
  },
  {
    title: "PlanBench: An Extensible Benchmark for Evaluating Large Language Models on Planning and Reasoning about Change",
    url: "https://www.dropbox.com/scl/fi/43c5pyxfdx62d5g28lejx/718_planbench_an_extensible_benchm.pdf?rlkey=0agubkt98mbd83hdhme9f0a1p&dl=0",
    tags: ["Planning and Learning"],
    authors: "Karthik Valmeekam, M. Marquez, A. Olmo, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2023,
    additional: "NeurIPS 2023 (Benchmark Track)",
  },
  {
    title: "Human-Aware AI – A Foundational Framework for Human-AI Interaction",
    url: "https://ojs.aaai.org/index.php/AAAI/article/view/26822",
    tags: ["XAI", "Value Alignment", "Human-Aware AI"],
    authors: "Sarath Sreedharan",
    year: 2023,
    additional: "AAAI 2023 (New Faculty Track)",
  },
  {
    title: "Generalizing Action Justification and Causal Links to Policies",
    url: "http://sarathsreedharan.com/files/papers/conference/_ICAPS_23__GenLink__Camera_Ready_v1__.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Christian Muise, Subbarao Kambhampati",
    year: 2023,
    additional: "ICAPS 2023",
  },
  {
    title: "Planning for Attacker Entrapment in Adversarial Settings",
    url: "https://arxiv.org/abs/2303.00822",
    tags: ["Other"],
    authors: "B. Cates, Anagha Kulkarni, Sarath Sreedharan",
    year: 2023,
    additional: "ICAPS 2023",
  },
  {
    title: "Goal Alignment: Re-analyzing Value Alignment Problems Using Human-Aware AI",
    url: "https://arxiv.org/abs/2302.00813",
    tags: ["Value Alignment"],
    authors: "M. Mechergui, Sarath Sreedharan",
    year: 2023,
    additional: "AAMAS 2023 (Extended Abstract)",
  },
  {
    title: "Trust-Aware Planning: Modeling Trust Evolution in Iterated Human-Robot Interaction",
    url: "https://dl.acm.org/doi/pdf/10.1145/3568162.3578628",
    tags: ["Other"],
    authors: "Zahra Zahedi, M. Verma, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2023,
    additional: "HRI 2023",
  },
  {
    title: "Explicable or Optimal: Trust Aware Planning in Iterated Human Robot Interaction",
    url: "https://youtu.be/Y2Ej2tHwufs",
    tags: ["Other", "XAI"],
    authors: "Zahra Zahedi, Sarath Sreedharan, Karthik Valmeekam, Subbarao Kambhampati",
    year: 2023,
    additional: "ICRA 2023 (Accepted as a stand-alone video)",
  },
  {
    title: "Leveraging Approximate Symbolic Models for Reinforcement Learning via Skill Diversity",
    url: "https://arxiv.org/abs/2202.02886",
    tags: ["Planning and Learning"],
    authors: "L. Guan*, Sarath Sreedharan*, and Subbarao Kambhampati",
    year: 2022,
    additional: "ICML 2022",
  },
  {
    title:
      "Bridging the Gap: Providing Post-Hoc Symbolic Explanations for Sequential Decision-Making Problems with Inscrutable Representations",
    url: "https://arxiv.org/abs/2002.01080",
    tags: ["XAI", "Planning and Learning"],
    authors: "Sarath Sreedharan, U. Soni, M. Verma, Siddharth Srivastava, and Subbarao Kambhampati",
    year: 2022,
    additional: "ICLR 2022",
  },
  {
    title: "On the Computational Complexity of Model Reconciliation",
    url: "https://yochan-lab.github.io/papers/files/papers/IJCAI_22__Model_Rec_Complexity.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, P. Bercher, and Subbarao Kambhampati",
    year: 2022,
    additional: "IJCAI 2022",
  },
  {
    title:
      "RADAR-X: An Interactive Mixed Initiative Planning Interface Pairing Contrastive Explanations and Revised Plan Suggestions",
    url: "https://arxiv.org/abs/2011.09644",
    tags: ["XAI"],
    authors: "Karthik Valmeekam, Sarath Sreedharan, S. Sengupta, Subbarao Kambhampati",
    year: 2022,
    additional: "ICAPS 2022",
  },
  {
    title: "Symbols as a Lingua Franca for Bridging Human-AI Chasm for Explainable and Advisable AI Systems",
    url: "https://arxiv.org/abs/2109.09904",
    tags: ["Human-Aware AI", "XAI"],
    authors: "Subbarao Kambhampati, Sarath Sreedharan, M. Verma, Y. Zha, L. Guan",
    year: 2022,
    additional: "AAAI 2022 (Blue Sky Track)",
  },
  {
    title: "Not all users are the same: Providing personalized explanations for sequential decision making problems",
    url: "https://arxiv.org/abs/2104.00878",
    tags: ["XAI"],
    authors: "U. Soni, Sarath Sreedharan, and Subbarao Kambhampati",
    year: 2021,
    additional: "IROS 2021",
  },
  {
    title: "A Unifying Bayesian Formulation of Measures of Interpretability in Human-AI Interaction",
    url: "https://yochan-lab.github.io/papers/files/papers/Bayesian_Account.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Anagha Kulkarni, David Smith, and Subbarao Kambhampati",
    year: 2021,
    additional: "IJCAI-Survey 2021",
  },
  {
    title: "Designing Environments Conducive to Interpretable Robot Behavior",
    url: "https://yochan-lab.github.io/papers/files/papers/IROS2020_design_for_explicability.pdf",
    tags: ["XAI"],
    authors: "Anagha Kulkarni*, Sarath Sreedharan*, Sarah Keren, Tathagata Chakraborti, David Smith, Subbarao Kambhampati",
    year: 2020,
    additional: "IROS 2020",
  },
  {
    title: "The Emerging Landscape of Explainable AI Planning and Decision Making",
    url: "https://arxiv.org/abs/2002.11697",
    tags: ["XAI"],
    authors: "Tathagata Chakraborti*, Sarath Sreedharan*, Subbarao Kambhampati",
    year: 2020,
    additional: "IJCAI 2020",
  },
  {
    title: "TLdR: Policy Summarization for Factored SSP Problems Using Temporal Abstractions",
    url: "https://yochan-lab.github.io/papers/files/papers/ICAPS_20_TLDR_Policy_Summarization.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Siddharth Srivastava, and Subbarao Kambhampati",
    year: 2020,
    additional: "ICAPS 2020",
  },
  {
    title: "D3WA+: A Case Study of XAIP in a Model Acquisition Task",
    url: "https://yochan-lab.github.io/papers/files/papers/ICAPS_2020_D3WA.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan*, Tathagata Chakraborti*, Christian Muise, Yasmin Khazaeni, and Subbarao Kambhampati",
    year: 2020,
    additional: "ICAPS 2020",
  },
  {
    title:
      "Expectation-Aware Planning: A Unifying Framework for Synthesizing and Executing Self-Explaining Plans for Human-Aware Planning",
    url: "https://yochan-lab.github.io/papers/files/papers/AAAI_20_EXACT.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, and Subbarao Kambhampati",
    year: 2020,
    additional: "AAAI 2020",
  },
  {
    title: "Model-Free Model Reconciliation",
    url: "https://yochan-lab.github.io/papers/files/papers/ModelFree_Explanations_IJCAI19.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, A. Olmo, A. Mishra, and Subbarao Kambhampati",
    year: 2019,
    additional: "IJCAI 2019",
  },
  {
    title: "Why Can't You Do That HAL? Explaining Unsolvability of Planning Tasks",
    url: "https://yochan-lab.github.io/papers/files/papers/IJCAI_19_Camera_Ready_Explaining_Unsolvability.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Siddharth Srivastava, David Smith, and Subbarao Kambhampati",
    year: 2019,
    additional: "IJCAI 2019",
  },
  {
    title: "Balancing Explicability and Explanations for Human-Aware Planning",
    url: "https://yochan-lab.github.io/papers/files/papers/balancing.pdf",
    tags: ["XAI"],
    authors: "Tathagata Chakraborti*, Sarath Sreedharan*, Subbarao Kambhampati",
    year: 2019,
    additional: "IJCAI 2019",
  },
  {
    title: "CAP: A Decision Support System for Crew Scheduling using Automated Planning",
    url: "https://yochan-lab.github.io/papers/files/papers/CAP.pdf",
    tags: ["XAI"],
    authors: "A. Mishra, S. Sengupta, Sarath Sreedharan, Tathagata Chakraborti, and Subbarao Kambhampati",
    year: 2019,
    additional: "NDM 2019",
  },
  {
    title: "Plan Explanations as Model Reconciliation – An Empirical Study",
    url: "https://yochan-lab.github.io/papers/files/papers/hri-model-rec.pdf",
    tags: ["XAI"],
    authors: "Tathagata Chakraborti, Sarath Sreedharan, S. Grover, Subbarao Kambhampati",
    year: 2019,
    additional: "HRI 2019",
  },
  {
    title:
      "Explicability? Legibility? Predictability? Transparency? Privacy? Security? The Emerging Landscape of Interpretable Agent Behavior",
    url: "https://yochan-lab.github.io/papers/files/papers/landscape.pdf",
    tags: ["XAI", "Human-Aware AI", "Other"],
    authors: "Tathagata Chakraborti, Anagha Kulkarni, Sarath Sreedharan, David Smith, Subbarao Kambhampati",
    year: 2019,
    additional: "ICAPS 2019",
  },
  {
    title: "Projection-Aware Task Planning and Execution for Human-in-the-Loop Operation of Robots in a Mixed-Reality Workspace",
    url: "https://yochan-lab.github.io/papers/files/papers/projection-aware.pdf",
    tags: ["Human-Aware AI"],
    authors: "Tathagata Chakraborti, Sarath Sreedharan, Anagha Kulkarni, Subbarao Kambhampati",
    year: 2018,
    additional: "IROS 2018",
  },
  {
    title: "Hierarchical Expertise Level Modeling for User Specific Contrastive Explanations",
    url: "https://yochan-lab.github.io/papers/files/papers/ijcai-helm-camera%20(14).pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Siddharth Srivastava, Subbarao Kambhampati",
    year: 2018,
    additional: "IJCAI 2018",
  },
  {
    title: "Balancing Explicability and Explanations: Emergent Behaviors in Human-Aware Planning",
    url: "http://rakaposhi.eas.asu.edu/paper_files/aamas18-emergent-behaviors.pdf",
    tags: ["XAI"],
    authors: "Tathagata Chakraborti*, Sarath Sreedharan*, Subbarao Kambhampati",
    year: 2018,
    additional: "AAMAS 2018 (Extended Abstract)",
  },
  {
    title: "Handling Model Uncertainty and Multiplicity in Explanations via Model Reconciliation",
    url: "http://rakaposhi.eas.asu.edu/icaps18.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan*, Tathagata Chakraborti*, Subbarao Kambhampati",
    year: 2018,
    additional: "ICAPS 2018",
  },
  {
    title: "Plan explanations as model reconciliation: Moving beyond explanation as soliloquy",
    url: "https://www.ijcai.org/proceedings/2017/0023.pdf",
    tags: ["XAI"],
    authors: "Tathagata Chakraborti*, Sarath Sreedharan*, Subbarao Kambhampati, Yu Zhang",
    year: 2017,
    additional: "IJCAI 2017",
  },
  {
    title: "Plan Explicability and Predictability for Robot Task Planning",
    url: "http://rakaposhi.eas.asu.edu/icra17-explicability.pdf",
    tags: ["XAI"],
    authors: "Yu Zhang, Sarath Sreedharan, Anagha Kulkarni, Tathagata Chakraborti, H. H. Zhuo, Subbarao Kambhampati",
    year: 2017,
    additional: "ICRA 2017",
  },
  {
    title: "Compliant Conditions for Polynomial Time Approximation of Operator Counts",
    url: "http://rakaposhi.eas.asu.edu/socs-16.pdf",
    tags: ["Other"],
    authors: "Tathagata Chakraborti, Sarath Sreedharan, S. Sengupta, T. K. Satish, Subbarao Kambhampati",
    year: 2016,
    additional: "Symposium on Combinatorial Search (SOCS) 2016",
  },
  {
    title: "A Formal Analysis of Required Cooperation in Multi-agent Planning",
    url: "http://rakaposhi.eas.asu.edu/yu-zhang-icaps16.pdf",
    tags: ["Other"],
    authors: "Yu Zhang, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2016,
    additional: "ICAPS 2016",
  },
  {
    title: "Capability Models and their application in Multi-agent planning",
    url: "http://rakaposhi.eas.asu.edu/AAMAS15.pdf",
    tags: ["Planning and Learning"],
    authors: "Yu Zhang, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2015,
    additional: "AAMAS 2015",
  },
  {
    title: "A Mental Model Based Theory of Trust",
    url: "https://arxiv.org/abs/2301.12569",
    tags: ["Human-Aware AI", "Other"],
    authors: "Zahra Zahedi, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2023,
    additional: "XAI workshop at IJCAI 2023",
  },

  {
    title: "Traversing the Linguistic Divide: Aligning Semantically Equivalent Fluents Through Model Refinement",
    url: "https://icaps24.icaps-conference.org/program/workshops/keps-papers/KEPS-24_paper_19.pdf",
    tags: ["Planning and Learning"],
    authors: "Kelsey Sikes, Morgan Fine-Morris, Sarath Sreedharan and Mark Roberts",
    year: 2024,
    additional: "KEPS Workshop ICAPS 2024",
  },
  {
    title: "Human-Modeling in Sequential Decision-Making: An Analysis through the Lens of Human-Aware AI",
    url: "https://openreview.net/pdf?id=ljszDKJ9ME",
    tags: ["Human-Aware AI", "Value Alignment"],
    authors: "Silvia Tulli, Stylianos Loukas Vasileiou, Sarath Sreedharan",
    year: 2024,
    additional: "HAXP Workshop ICAPS 2024",
  },
  {
    title: "Reducing Human-Robot Goal State Divergence with Environment Design",
    url: "https://openreview.net/pdf?id=2Khq2mBIfz",
    tags: ["Human-Aware AI", "Value Alignment"],
    authors: "Kelsey Sykes, Sarah Keren, Sarath Sreedharan",
    year: 2024,
    additional: "HAXP Workshop ICAPS 2024",
  },

  {
    title: "A Mental-Model Centric Landscape of Human-AI Symbiosis",
    url: "https://arxiv.org/abs/2202.09447",
    tags: ["Human-Aware AI"],
    authors: "Zahra Zahedi, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2023,
    additional: "R2HCAI AAAI 2023",
  },
  {
    title: "Revisiting Value Alignment Through the Lens of Human-Aware AI",
    url: "",
    tags: ["Human-Aware AI", "Value Alignment"],
    authors: "Sarath Sreedharan, Subbarao Kambhampati",
    year: 2022,
    additional: "Virtual Workshop on Human-Centered AI, NeurIPS 2022",
  },
  {
    title:
      "Towards customizable reinforcement learning agents: Enabling preference specification through online vocabulary expansion",
    url: "",
    tags: ["Value Alignment"],
    authors: "U. Soni, Sarath Sreedharan, M. Verma, L. Guan, M. Marquez, Subbarao Kambhampati",
    year: 2022,
    additional: "Workshop on Human in the Loop Learning, NeurIPS 2022",
  },
  {
    title: "Large Language Models Still Can't Plan (A Benchmark for LLMs on Planning and Reasoning about Change)",
    url: "https://arxiv.org/abs/2206.10498",
    tags: ["Planning and Learning"],
    authors: "Karthik Valmeekam*, A. Olmo*, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2022,
    additional: "Workshop on Foundations Models for Decision Making, NeurIPS 2022",
  },
  {
    title: "Why Did You Do That? Generalizing Causal Link Explanations to Fully Observable Non-Deterministic Planning Problems",
    url: "https://openreview.net/forum?id=D44ytXrLXuS",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Christian Muise, Subbarao Kambhampati",
    year: 2022,
    additional: "ICAPS Workshop on Explainable AI Planning (XAIP) 2022",
  },
  {
    title:
      "Leveraging PDDL to Make Inscrutable Agents Interpretable: A Case for Post Hoc Symbolic Explanations for Sequential-Decision Making Problems",
    url: "https://yochan-lab.github.io/papers/files/papers/sarath_position_xaip_21.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Subbarao Kambhampati",
    year: 2021,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2021",
  },
  {
    title: "Trust-Aware Planning: Modeling Trust Evolution in Longitudinal Human-Robot Interaction",
    url: "https://arxiv.org/abs/2105.01220",
    tags: ["Other"],
    authors: "Zahra Zahedi, M. Verma, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2021,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2021",
  },
  {
    title: "GPT3-to-plan: Extracting plans from text using GPT-3",
    url: "https://arxiv.org/abs/2106.07131",
    tags: ["Planning and Learning"],
    authors: "A. Olmo, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2021,
    additional: "ICAPS Workshop on Planning for Financial Services (FinPlan) 2021",
  },
  {
    title: "A Bayesian Account of Measures of Interpretability in Human-AI Interaction",
    url: "https://arxiv.org/abs/2011.10920",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Anagha Kulkarni, Tathagata Chakraborti, David Smith, Subbarao Kambhampati",
    year: 2020,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2020",
  },
  {
    title: "RADAR-X: An Interactive Interface Pairing Contrastive Explanations with Revised Plan Suggestions",
    url: "https://arxiv.org/abs/2011.09644",
    tags: ["XAI"],
    authors: "Karthik Valmeekam, Sarath Sreedharan, S. Sengupta, Subbarao Kambhampati",
    year: 2020,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2020",
  },
  {
    title: "Explainable Composition of Aggregated Assistants",
    url: "https://arxiv.org/pdf/2011.10707.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Tathagata Chakraborti, Yara Rizk, Yasmin Khazaeni",
    year: 2020,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2020",
  },
  {
    title: "A General Framework for Synthesizing and Executing Self-Explaining Plans for Human-AI Interaction",
    url: "https://openreview.net/forum?id=H1gyE6hm5V",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, Subbarao Kambhampati",
    year: 2019,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2019",
  },
  {
    title: "Design for interpretability",
    url: "https://yochan-lab.github.io/papers/files/papers/design.pdf",
    tags: ["XAI"],
    authors: "Anagha Kulkarni*, Sarath Sreedharan*, Sarah Keren, Tathagata Chakraborti, David Smith, Subbarao Kambhampati",
    year: 2019,
    additional: "ICAPS Workshop on Explainable Planning (XAIP) 2019",
  },
  {
    title: "Plan Explanation Through Search in an Abstract Model Space",
    url: "https://yochan-lab.github.io/papers/files/papers/xaip-helm-camera%20(2).pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, M. Madhusoodanan, Siddharth Srivastava, Subbarao Kambhampati",
    year: 2018,
    additional: "XAIP ICAPS 2018",
  },
  {
    title: "Human-Aware Planning Revisited: A Tale of Three Models",
    url: "https://yochan-lab.github.io/papers/files/papers/three-models.pdf",
    tags: ["Human-Aware AI", "XAI"],
    authors: "Tathagata Chakraborti, Sarath Sreedharan, Subbarao Kambhampati",
    year: 2018,
    additional: "ICAPS XAIP 2018",
  },
  {
    title: "Balancing Explicability and Explanation in Human-Aware Planning",
    url: "https://arxiv.org/pdf/1708.00543.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan*, Tathagata Chakraborti*, Subbarao Kambhampati",
    year: 2017,
    additional: "AAAI Fall Symposium 2017",
  },
  {
    title: "Explanations as Model Reconciliation - A Multi-Agent Perspective",
    url: "http://rakaposhi.eas.asu.edu/multi-mega_human_fss.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan*, Tathagata Chakraborti*, Subbarao Kambhampati",
    year: 2017,
    additional: "AAAI Fall Symposium 2017",
  },
  {
    title: "Alternative Modes of Interaction in Proximal Human-in-the-Loop Operation of Robots",
    url: "https://arxiv.org/abs/1703.08930",
    tags: ["Other"],
    authors: "Tathagata Chakraborti, Sarath Sreedharan, Anagha Kulkarni, Subbarao Kambhampati",
    year: 2017,
    additional: "ICAPS 2017 UISP Workshop; and ICAPS 2017 System Demo and Exhibits",
  },
  {
    title: "Plan Explainability and Predictability for Robot Task Planning",
    url: "http://rakaposhi.eas.asu.edu/rss16-wkshp.pdf",
    tags: ["XAI"],
    authors: "Yu Zhang, Sarath Sreedharan, Anagha Kulkarni, Tathagata Chakraborti, H. H. Zhuo, Subbarao Kambhampati",
    year: 2016,
    additional: "RSS 2016 Workshop on Planning for Human-Robot Interaction",
  },
  {
    title: "Human-Aware AI – A Foundational Framework for Human-AI Interaction",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.12142",
    tags: ["XAI"],
    authors: "Sarath Sreedharan",
    year: 2023,
    additional: "AI Magazine",
  },
  {
    title: "Foundations of Explanations as Model Reconciliation",
    url: "https://yochan-lab.github.io/papers/files/papers/AIJ__Model_Reconciliation__Submission_Copy_.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan*, Tathagata Chakraborti*, Subbarao Kambhampati",
    year: 2021,
    additional: "Artificial Intelligence Journal",
  },
  {
    title: "Using State Abstractions to Compute Personalized Contrastive Explanations for AI Agent Behavior",
    url: "https://yochan-lab.github.io/papers/files/papers/AIJ_21_HELM.pdf",
    tags: ["XAI"],
    authors: "Sarath Sreedharan, Siddharth Srivastava, Subbarao Kambhampati",
    year: 2021,
    additional: "Artificial Intelligence Journal",
  },
  {
    title: "Robust planning with incomplete domain models",
    url: "http://authors.elsevier.com/sd/article/S0004370216301539",
    tags: ["Model-Lite Planning"],
    authors: "T. Nguyen, Subbarao Kambhampati, Sarath Sreedharan",
    year: 2017,
    additional: "Artificial Intelligence Journal",
  },
]
