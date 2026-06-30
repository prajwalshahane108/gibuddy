export const users = [
  { id:'USR-001', name:'Sarah Chen',       email:'sarah.chen@email.com',    phone:'+1 (555) 234-5678', cond:'IBS',                    allergies:['Gluten','Dairy'],               prefs:['Vegan','Low-FODMAP'],                   plan:'premium', trialStart:'2024-01-15', trialEnd:'2024-01-29', renewal:'2024-02-15', lastActive:'2 hours ago',   status:'active',  direction:'improving', goals:'Reduce bloating, manage IBS symptoms',             provider:'Stripe',    custId:'cus_A1B2C3D4E5', subId:'sub_F6G7H8I9J0', joined:'Jan 15, 2024', avatar:'SC' },
  { id:'USR-002', name:'Marcus Johnson',   email:'marcus.j@email.com',      phone:'+1 (555) 345-6789', cond:"Crohn's",                allergies:['Nuts'],                         prefs:['High-protein','Anti-inflammatory'],     plan:'premium', trialStart:'2024-01-10', trialEnd:'2024-01-24', renewal:'2024-02-10', lastActive:'1 day ago',     status:'active',  direction:'stable',    goals:"Manage Crohn's flare-ups, maintain remission",     provider:'Stripe',    custId:'cus_B2C3D4E5F6', subId:'sub_G7H8I9J0K1', joined:'Jan 10, 2024', avatar:'MJ' },
  { id:'USR-003', name:'Elena Rodriguez',  email:'elena.r@email.com',       phone:'+1 (555) 456-7890', cond:'Celiac',                 allergies:['Gluten','Wheat'],               prefs:['Gluten-free','Mediterranean'],          plan:'basic',   trialStart:'2024-01-20', trialEnd:'2024-02-03', renewal:'2024-02-20', lastActive:'3 hours ago',   status:'trial',   direction:'improving', goals:'Strict gluten avoidance, heal gut lining',         provider:'Stripe',    custId:'cus_C3D4E5F6G7', subId:'sub_H8I9J0K1L2', joined:'Jan 20, 2024', avatar:'ER' },
  { id:'USR-004', name:'James Park',       email:'james.park@email.com',    phone:'+1 (555) 567-8901', cond:'GERD',                   allergies:[],                               prefs:['Low-acid','Small portions'],            plan:'premium', trialStart:'2023-12-01', trialEnd:'2023-12-15', renewal:'2024-01-01', lastActive:'5 minutes ago', status:'active',  direction:'improving', goals:'Eliminate acid reflux, improve sleep',             provider:'Stripe',    custId:'cus_D4E5F6G7H8', subId:'sub_I9J0K1L2M3', joined:'Dec 1, 2023',  avatar:'JP' },
  { id:'USR-005', name:'Aisha Patel',      email:'aisha.patel@email.com',   phone:'+1 (555) 678-9012', cond:'IBD',                    allergies:['Soy','Eggs'],                   prefs:['Vegan','Low-fiber during flares'],      plan:'premium', trialStart:'2024-01-05', trialEnd:'2024-01-19', renewal:'2024-02-05', lastActive:'4 hours ago',   status:'active',  direction:'declining', goals:'Manage IBD flares, reduce inflammation',           provider:'Apple Pay',  custId:'cus_E5F6G7H8I9', subId:'sub_J0K1L2M3N4', joined:'Jan 5, 2024',  avatar:'AP' },
  { id:'USR-006', name:'David Kim',        email:'david.kim@email.com',     phone:'+1 (555) 789-0123', cond:'Gastroparesis',          allergies:['Dairy'],                        prefs:['Liquid-friendly','Small frequent meals'],plan:'basic',   trialStart:'2024-01-12', trialEnd:'2024-01-26', renewal:null,           lastActive:'2 weeks ago',   status:'expired', direction:'stable',    goals:'Manage gastroparesis symptoms',                   provider:'Stripe',    custId:'cus_F6G7H8I9J0', subId:'sub_K1L2M3N4O5', joined:'Jan 12, 2024', avatar:'DK' },
  { id:'USR-007', name:'Lisa Thompson',    email:'lisa.t@email.com',        phone:'+1 (555) 890-1234', cond:'Diverticulitis',         allergies:['Nuts','Seeds'],                 prefs:['High-fiber (remission)','Low-fiber (flares)'], plan:'premium', trialStart:'2023-11-15', trialEnd:'2023-11-29', renewal:'2024-01-15', lastActive:'1 hour ago', status:'active', direction:'stable', goals:'Prevent diverticulitis flares', provider:'Google Pay', custId:'cus_G7H8I9J0K1', subId:'sub_L2M3N4O5P6', joined:'Nov 15, 2023', avatar:'LT' },
  { id:'USR-008', name:'Robert Martinez',  email:'robert.m@email.com',      phone:'+1 (555) 901-2345', cond:'Colitis',                allergies:[],                               prefs:['Anti-inflammatory','Omega-3 rich'],     plan:'premium', trialStart:'2024-01-08', trialEnd:'2024-01-22', renewal:'2024-02-08', lastActive:'6 hours ago',   status:'active',  direction:'improving', goals:'Reduce colitis inflammation',                     provider:'Stripe',    custId:'cus_H8I9J0K1L2', subId:'sub_M3N4O5P6Q7', joined:'Jan 8, 2024',  avatar:'RM' },
  { id:'USR-009', name:'Nina Gupta',       email:'nina.gupta@email.com',    phone:'+1 (555) 012-3456', cond:'SIBO',                   allergies:['Gluten','Lactose'],             prefs:['Low-FODMAP','Elemental diet'],          plan:'premium', trialStart:'2024-01-18', trialEnd:null,           renewal:'2024-02-18', lastActive:'30 minutes ago', status:'active',  direction:'improving', goals:'Eradicate SIBO, restore gut flora',               provider:'Stripe',    custId:'cus_I9J0K1L2M3', subId:'sub_N4O5P6Q7R8', joined:'Jan 18, 2024', avatar:'NG' },
  { id:'USR-010', name:'Tyler Williams',   email:'tyler.w@email.com',       phone:'+1 (555) 123-4567', cond:'Functional Dyspepsia',   allergies:['Caffeine'],                     prefs:['Low-fat','Small meals'],               plan:'basic',   trialStart:'2024-01-22', trialEnd:'2024-02-05', renewal:'2024-02-22', lastActive:'1 day ago',     status:'trial',   direction:'stable',    goals:'Reduce dyspepsia symptoms',                       provider:'Stripe',    custId:'cus_J0K1L2M3N4', subId:'sub_O5P6Q7R8S9', joined:'Jan 22, 2024', avatar:'TW' },
  { id:'USR-011', name:'Sophia Anderson',  email:'sophia.a@email.com',      phone:'+1 (555) 234-5678', cond:'Microscopic Colitis',    allergies:['NSAIDs'],                       prefs:['Anti-inflammatory','Dairy-free'],       plan:'premium', trialStart:'2023-12-10', trialEnd:'2023-12-24', renewal:'2024-01-10', lastActive:'3 days ago',    status:'paused',  direction:'stable',    goals:'Control microscopic colitis symptoms',            provider:'Stripe',    custId:'cus_K1L2M3N4O5', subId:'sub_P6Q7R8S9T0', joined:'Dec 10, 2023', avatar:'SA' },
  { id:'USR-012', name:'Chris Taylor',     email:'chris.taylor@email.com',  phone:'+1 (555) 345-6789', cond:'Eosinophilic Esophagitis',allergies:['Milk','Wheat','Eggs','Soy'],  prefs:['Elimination diet','Hypoallergenic'],   plan:'premium', trialStart:'2024-01-03', trialEnd:null,           renewal:'2024-02-03', lastActive:'2 hours ago',   status:'active',  direction:'improving', goals:'Identify and eliminate trigger foods',            provider:'Apple Pay',  custId:'cus_L2M3N4O5P6', subId:'sub_Q7R8S9T0U1', joined:'Jan 3, 2024',  avatar:'CT' },
  { id:'USR-013', name:'Maya Johnson',     email:'maya.j@email.com',        phone:'+1 (555) 456-7890', cond:'IBS-C',                  allergies:['Gluten'],                       prefs:['High-fiber','Plant-based'],            plan:'basic',   trialStart:'2024-01-25', trialEnd:'2024-02-08', renewal:'2024-02-25', lastActive:'10 hours ago',  status:'trial',   direction:'stable',    goals:'Improve bowel regularity',                        provider:'Stripe',    custId:'cus_M3N4O5P6Q7', subId:'sub_R8S9T0U1V2', joined:'Jan 25, 2024', avatar:'MJ' },
  { id:'USR-014', name:'Jordan Lee',       email:'jordan.lee@email.com',    phone:'+1 (555) 567-8901', cond:'Lactose Intolerance',    allergies:['Dairy'],                        prefs:['Dairy-free','Calcium-rich alternatives'],plan:'basic',  trialStart:'2024-01-27', trialEnd:'2024-02-10', renewal:null,           lastActive:'5 days ago',    status:'expired', direction:'improving', goals:'Manage lactose intolerance, maintain calcium intake',provider:'Stripe',  custId:'cus_N4O5P6Q7R8', subId:'sub_S9T0U1V2W3', joined:'Jan 27, 2024', avatar:'JL' },
];

export const aiEvents = [
  { id:'AI-001', userId:'USR-001', userName:'Sarah Chen',      type:'Meal Suggestion',       model:'GPT-4o',   status:'completed', tokens:1247, latency:1.2, created:'Jan 28, 2024 14:32', confidence:94, prompt:'Low-FODMAP meal plan for IBS patient with gluten sensitivity' },
  { id:'AI-002', userId:'USR-002', userName:'Marcus Johnson',  type:'Symptom Analysis',      model:'GPT-4o',   status:'completed', tokens:892,  latency:0.9, created:'Jan 28, 2024 13:15', confidence:88, prompt:'Analyze Crohn\'s flare-up triggers from recent food diary entries' },
  { id:'AI-003', userId:'USR-004', userName:'James Park',      type:'Recipe Generation',     model:'GPT-4o',   status:'completed', tokens:1534, latency:1.8, created:'Jan 28, 2024 12:45', confidence:91, prompt:'Generate low-acid dinner recipes for GERD patient' },
  { id:'AI-004', userId:'USR-009', userName:'Nina Gupta',      type:'Diet Plan Review',      model:'Claude 3', status:'completed', tokens:2103, latency:2.1, created:'Jan 28, 2024 11:30', confidence:96, prompt:'Review and optimize SIBO elimination diet plan' },
  { id:'AI-005', userId:'USR-005', userName:'Aisha Patel',     type:'Supplement Advice',     model:'GPT-4o',   status:'failed',    tokens:0,    latency:0,   created:'Jan 28, 2024 10:22', confidence:0,  prompt:'Recommend supplements for IBD management during flare' },
  { id:'AI-006', userId:'USR-003', userName:'Elena Rodriguez', type:'Grocery Optimization',  model:'GPT-4o',   status:'completed', tokens:876,  latency:0.8, created:'Jan 28, 2024 09:18', confidence:89, prompt:'Optimize grocery list for celiac patient on Mediterranean diet' },
  { id:'AI-007', userId:'USR-007', userName:'Lisa Thompson',   type:'Meal Suggestion',       model:'Claude 3', status:'completed', tokens:1102, latency:1.1, created:'Jan 27, 2024 16:44', confidence:92, prompt:'Post-diverticulitis flare meal reintroduction plan' },
  { id:'AI-008', userId:'USR-008', userName:'Robert Martinez', type:'Symptom Analysis',      model:'GPT-4o',   status:'completed', tokens:743,  latency:0.7, created:'Jan 27, 2024 15:30', confidence:85, prompt:'Colitis inflammation tracking correlation with diet' },
  { id:'AI-009', userId:'USR-012', userName:'Chris Taylor',    type:'Elimination Protocol',  model:'Claude 3', status:'processing',tokens:0,    latency:0,   created:'Jan 28, 2024 14:55', confidence:0,  prompt:'Create 6-food elimination diet protocol for EoE patient' },
  { id:'AI-010', userId:'USR-011', userName:'Sophia Anderson', type:'Diet Plan Review',      model:'GPT-4o',   status:'completed', tokens:1687, latency:1.6, created:'Jan 27, 2024 14:20', confidence:90, prompt:'Review anti-inflammatory diet adherence for microscopic colitis' },
];

export const scanEvents = [
  { id:'SCN-001', userId:'USR-001', userName:'Sarah Chen',      type:'Food Label',     result:'Gluten detected',       confidence:98, action:'Flagged',  timestamp:'Jan 28, 2024 14:45', items:1  },
  { id:'SCN-002', userId:'USR-003', userName:'Elena Rodriguez', type:'Restaurant Menu', result:'3 safe options found', confidence:91, action:'Approved', timestamp:'Jan 28, 2024 13:22', items:3  },
  { id:'SCN-003', userId:'USR-004', userName:'James Park',      type:'Food Label',     result:'High acidity detected', confidence:95, action:'Flagged',  timestamp:'Jan 28, 2024 12:10', items:1  },
  { id:'SCN-004', userId:'USR-009', userName:'Nina Gupta',      type:'Recipe Card',    result:'FODMAP safe confirmed', confidence:87, action:'Approved', timestamp:'Jan 28, 2024 11:05', items:8  },
  { id:'SCN-005', userId:'USR-002', userName:'Marcus Johnson',  type:'Food Label',     result:'High fat content noted',confidence:93, action:'Review',   timestamp:'Jan 28, 2024 10:33', items:1  },
  { id:'SCN-006', userId:'USR-012', userName:'Chris Taylor',    type:'Restaurant Menu', result:'Multiple allergens',   confidence:99, action:'Flagged',  timestamp:'Jan 27, 2024 19:15', items:2  },
  { id:'SCN-007', userId:'USR-007', userName:'Lisa Thompson',   type:'Grocery Receipt', result:'Seed oils identified', confidence:88, action:'Flagged',  timestamp:'Jan 27, 2024 17:40', items:4  },
  { id:'SCN-008', userId:'USR-008', userName:'Robert Martinez', type:'Food Label',     result:'Omega-3 rich — approved',confidence:96,action:'Approved', timestamp:'Jan 27, 2024 16:22', items:1  },
];

export const mealPlans = [
  { id:'MP-001', userId:'USR-001', userName:'Sarah Chen',      name:'Low-FODMAP Week 4',        status:'active',   meals:21, calories:1800, startDate:'Jan 22, 2024', endDate:'Jan 28, 2024', adherence:87, dietician:'Dr. Kim', reviewed:true  },
  { id:'MP-002', userId:'USR-002', userName:'Marcus Johnson',  name:"Crohn's Remission Diet",   status:'active',   meals:21, calories:2200, startDate:'Jan 22, 2024', endDate:'Jan 28, 2024', adherence:72, dietician:'Dr. Smith', reviewed:true },
  { id:'MP-003', userId:'USR-003', userName:'Elena Rodriguez', name:'Gluten-Free Mediterranean',status:'active',   meals:21, calories:1900, startDate:'Jan 22, 2024', endDate:'Jan 28, 2024', adherence:95, dietician:'Dr. Kim', reviewed:false },
  { id:'MP-004', userId:'USR-004', userName:'James Park',      name:'GERD-Friendly Low-Acid',   status:'active',   meals:21, calories:1700, startDate:'Jan 22, 2024', endDate:'Jan 28, 2024', adherence:81, dietician:'Dr. Patel', reviewed:true },
  { id:'MP-005', userId:'USR-005', userName:'Aisha Patel',     name:'IBD Flare Management',     status:'paused',   meals:14, calories:1500, startDate:'Jan 20, 2024', endDate:'Jan 27, 2024', adherence:60, dietician:'Dr. Smith', reviewed:false },
  { id:'MP-006', userId:'USR-007', userName:'Lisa Thompson',   name:'Post-Diverticulitis Reintro',status:'pending',meals:14, calories:1850, startDate:'Jan 29, 2024', endDate:'Feb 4, 2024',  adherence:0,  dietician:'Dr. Kim', reviewed:false },
  { id:'MP-007', userId:'USR-008', userName:'Robert Martinez', name:'Anti-Inflammatory Protocol',status:'active',  meals:21, calories:2100, startDate:'Jan 22, 2024', endDate:'Jan 28, 2024', adherence:89, dietician:'Dr. Patel', reviewed:true },
  { id:'MP-008', userId:'USR-009', userName:'Nina Gupta',      name:'SIBO Elemental Phase 2',   status:'active',   meals:21, calories:1600, startDate:'Jan 22, 2024', endDate:'Jan 28, 2024', adherence:94, dietician:'Dr. Kim', reviewed:true },
];

export const groceryLists = [
  { id:'GL-001', userId:'USR-001', userName:'Sarah Chen',      name:'Low-FODMAP Week 4 Groceries', items:28, status:'generated', generated:'Jan 21, 2024', cost:142.50, store:'Whole Foods' },
  { id:'GL-002', userId:'USR-002', userName:'Marcus Johnson',  name:'High-Protein Weekly Shop',     items:34, status:'purchased', generated:'Jan 21, 2024', cost:198.20, store:'Trader Joe\'s' },
  { id:'GL-003', userId:'USR-003', userName:'Elena Rodriguez', name:'GF Mediterranean Essentials',  items:31, status:'generated', generated:'Jan 21, 2024', cost:165.80, store:'Whole Foods' },
  { id:'GL-004', userId:'USR-004', userName:'James Park',      name:'Low-Acid Meal Prep Kit',       items:22, status:'reviewing', generated:'Jan 21, 2024', cost:121.40, store:'Target' },
  { id:'GL-005', userId:'USR-007', userName:'Lisa Thompson',   name:'High-Fiber Recovery List',     items:26, status:'generated', generated:'Jan 28, 2024', cost:138.90, store:'Safeway' },
  { id:'GL-006', userId:'USR-008', userName:'Robert Martinez', name:'Omega-3 Anti-Inflammatory',    items:30, status:'purchased', generated:'Jan 21, 2024', cost:187.60, store:'Whole Foods' },
  { id:'GL-007', userId:'USR-009', userName:'Nina Gupta',      name:'SIBO Safe Foods Bundle',       items:18, status:'generated', generated:'Jan 21, 2024', cost:98.30,  store:'Amazon Fresh' },
];

export const colonoscopy = [
  { id:'COL-001', userId:'USR-002', userName:'Marcus Johnson',  schedDate:'Feb 5, 2024',  status:'scheduled', prepDay:'Feb 3-4, 2024', prepPhase:'upcoming', clearDiet:false, solutionTaken:false, cleared:false, notes:"Crohn's follow-up scope",  gi:'Dr. Harrison', facility:'City GI Center'         },
  { id:'COL-002', userId:'USR-007', userName:'Lisa Thompson',   schedDate:'Jan 30, 2024', status:'prep-active',prepDay:'Jan 28-29, 2024',prepPhase:'active',  clearDiet:true,  solutionTaken:true,  cleared:false, notes:'Diverticulitis monitoring', gi:'Dr. Chen',    facility:'Memorial GI Lab'         },
  { id:'COL-003', userId:'USR-008', userName:'Robert Martinez', schedDate:'Feb 12, 2024', status:'scheduled', prepDay:'Feb 10-11, 2024',prepPhase:'upcoming', clearDiet:false, solutionTaken:false, cleared:false, notes:'Colitis staging scope',     gi:'Dr. Harrison', facility:'City GI Center'          },
  { id:'COL-004', userId:'USR-011', userName:'Sophia Anderson', schedDate:'Jan 25, 2024', status:'completed', prepDay:'Jan 23-24, 2024',prepPhase:'done',     clearDiet:true,  solutionTaken:true,  cleared:true,  notes:'Microscopic colitis biopsy',gi:'Dr. Patel',   facility:'University Hospital GI'  },
  { id:'COL-005', userId:'USR-004', userName:'James Park',      schedDate:'Feb 20, 2024', status:'scheduled', prepDay:'Feb 18-19, 2024',prepPhase:'upcoming', clearDiet:false, solutionTaken:false, cleared:false, notes:'GERD-Barrett\'s screening', gi:'Dr. Chen',    facility:'Memorial GI Lab'         },
];

export const reviewQueue = [
  { id:'RV-001', userId:'USR-003', userName:'Elena Rodriguez', type:'Meal Plan Review',     priority:'high',   status:'pending',   dietician:'',           submitted:'Jan 28, 2024 09:00', notes:'New gluten-free plan needs dietician sign-off before activation', plan:'MP-003' },
  { id:'RV-002', userId:'USR-005', userName:'Aisha Patel',     type:'Symptom Escalation',   priority:'urgent', status:'pending',   dietician:'',           submitted:'Jan 28, 2024 08:30', notes:'Patient reporting severe IBD flare — needs immediate dietary guidance', plan:null },
  { id:'RV-003', userId:'USR-009', userName:'Nina Gupta',      type:'AI Recommendation',    priority:'medium', status:'in-review', dietician:'Dr. Kim',    submitted:'Jan 27, 2024 16:00', notes:'AI suggested elemental diet phase 3 — needs validation', plan:'MP-008' },
  { id:'RV-004', userId:'USR-012', userName:'Chris Taylor',    type:'Elimination Protocol', priority:'high',   status:'pending',   dietician:'',           submitted:'Jan 28, 2024 10:15', notes:'6-food EoE elimination protocol requires specialist approval', plan:null },
  { id:'RV-005', userId:'USR-001', userName:'Sarah Chen',      type:'Meal Plan Review',     priority:'low',    status:'approved',  dietician:'Dr. Patel',  submitted:'Jan 26, 2024 14:00', notes:'Routine FODMAP plan update', plan:'MP-001' },
];

export const failedRequests = [
  { id:'ERR-001', endpoint:'/api/v1/ai/recommend',    method:'POST', status:500, userId:'USR-005', userName:'Aisha Patel',    error:'OpenAI API timeout after 30s',         timestamp:'Jan 28, 2024 10:22', retries:3, resolved:false, category:'AI Service'    },
  { id:'ERR-002', endpoint:'/api/v1/scan/process',    method:'POST', status:503, userId:'USR-006', userName:'David Kim',      error:'OCR service unavailable',              timestamp:'Jan 28, 2024 09:15', retries:2, resolved:false, category:'OCR Service'   },
  { id:'ERR-003', endpoint:'/api/v1/payments/charge', method:'POST', status:402, userId:'USR-006', userName:'David Kim',      error:'Payment method declined',              timestamp:'Jan 28, 2024 08:45', retries:1, resolved:true,  category:'Payment'       },
  { id:'ERR-004', endpoint:'/api/v1/meals/generate',  method:'POST', status:422, userId:'USR-013', userName:'Maya Johnson',   error:'Invalid dietary constraints conflict',  timestamp:'Jan 27, 2024 17:30', retries:0, resolved:true,  category:'Meal Planning' },
  { id:'ERR-005', endpoint:'/api/v1/ai/recommend',    method:'POST', status:429, userId:'USR-008', userName:'Robert Martinez',error:'Rate limit exceeded',                  timestamp:'Jan 27, 2024 16:10', retries:1, resolved:true,  category:'AI Service'    },
  { id:'ERR-006', endpoint:'/api/v1/notifications/push',method:'POST',status:400,userId:'USR-011',userName:'Sophia Anderson', error:'Invalid device push token',            timestamp:'Jan 27, 2024 15:00', retries:2, resolved:false, category:'Notifications' },
  { id:'ERR-007', endpoint:'/api/v1/subscriptions/renew',method:'POST',status:500,userId:'USR-014',userName:'Jordan Lee',   error:'Stripe webhook processing error',       timestamp:'Jan 26, 2024 23:30', retries:3, resolved:false, category:'Payment'       },
];

export const notifications = [
  { id:'NOT-001', type:'system',    title:'Scheduled Maintenance',       body:'Platform maintenance window scheduled for Feb 1, 2024 02:00-04:00 UTC. All services will be briefly unavailable.', sent:'Jan 28, 2024 12:00', recipients:'all', status:'sent', channel:'push+email' },
  { id:'NOT-002', type:'alert',     title:'High Failed Request Rate',    body:'Failed API requests have exceeded 5% threshold in the last hour. Immediate investigation recommended.', sent:'Jan 28, 2024 10:30', recipients:'admins', status:'sent', channel:'push' },
  { id:'NOT-003', type:'user',      title:'Premium Plan Renewal Reminder',body:'Your premium subscription renews in 3 days. Ensure your payment method is up to date.', sent:'Jan 28, 2024 09:00', recipients:'premium-expiring', status:'sent', channel:'email' },
  { id:'NOT-004', type:'dietician', title:'New Review Queue Items',      body:'5 new items require dietician review. 1 marked as urgent.', sent:'Jan 28, 2024 08:30', recipients:'dieticians', status:'sent', channel:'push+email' },
  { id:'NOT-005', type:'system',    title:'AI Model Update',             body:'GPT-4o has been updated to the latest version. Improved accuracy for dietary recommendations expected.', sent:'Jan 27, 2024 18:00', recipients:'all', status:'sent', channel:'in-app' },
  { id:'NOT-006', type:'alert',     title:'OCR Service Degraded',        body:'OCR scanning service is experiencing elevated error rates. Engineering team has been notified.', sent:'Jan 28, 2024 09:15', recipients:'admins', status:'sent', channel:'push' },
  { id:'NOT-007', type:'user',      title:'Weekly Progress Report',      body:'Your weekly health progress report is now available. Check your personalized insights and meal adherence.', sent:'Jan 27, 2024 08:00', recipients:'active-users', status:'draft', channel:'email' },
];

export const activityFeed = [
  { id:1, type:'user_joined',     text:'New user Elena Rodriguez joined with Celiac disease profile',       time:'3 hours ago',   icon:'user-plus'      },
  { id:2, type:'ai_completed',    text:'AI generated SIBO meal plan for Nina Gupta (96% confidence)',       time:'30 minutes ago', icon:'zap'            },
  { id:3, type:'review_urgent',   text:'Urgent review flagged for Aisha Patel — IBD flare escalation',     time:'8 hours ago',   icon:'alert-triangle'  },
  { id:4, type:'subscription',    text:'Marcus Johnson renewed Premium subscription via Stripe',            time:'1 day ago',     icon:'credit-card'    },
  { id:5, type:'plan_approved',   text:'Dr. Patel approved meal plan MP-001 for Sarah Chen',               time:'2 hours ago',   icon:'check-circle'   },
  { id:6, type:'scan_flagged',    text:'OCR scan flagged gluten in product scanned by Sarah Chen',          time:'2 hours ago',   icon:'scan'           },
  { id:7, type:'payment_failed',  text:'Payment failed for David Kim — subscription expired',              time:'2 weeks ago',   icon:'x-circle'       },
  { id:8, type:'colonoscopy',     text:'Lisa Thompson completed colonoscopy prep Day 1 check-in',          time:'1 hour ago',    icon:'activity'       },
];

export const kpis = {
  totalUsers: 14,
  activeSubscriptions: 9,
  pendingReviews: 4,
  failedRequests: 4,
  totalRevenue: 2847,
  aiCallsToday: 10,
  scansToday: 8,
  newUsersThisWeek: 3,
};

export const chartData = {
  userActivity: [
    { day:'Mon', active:8,  new:1 },
    { day:'Tue', active:9,  new:0 },
    { day:'Wed', active:11, new:2 },
    { day:'Thu', active:10, new:1 },
    { day:'Fri', active:12, new:1 },
    { day:'Sat', active:7,  new:0 },
    { day:'Sun', active:9,  new:1 },
  ],
  planBreakdown: [
    { name:'Premium', count:8, color:'#0d9488' },
    { name:'Basic',   count:4, color:'#14b8a6' },
    { name:'Trial',   count:2, color:'#ccfbf1' },
  ],
  conditionBreakdown: [
    { name:'IBS',              count:2 },
    { name:"Crohn's",          count:1 },
    { name:'Celiac',           count:1 },
    { name:'GERD',             count:1 },
    { name:'IBD',              count:1 },
    { name:'Other',            count:8 },
  ],
};
