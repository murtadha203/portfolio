const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const languageButtons = document.querySelectorAll("[data-language-option]");
const year = document.querySelector("#year");
const accordionSections = document.querySelectorAll(".accordion-section");
const detailSelectors = [".branch-grid", ".project-highlights", ".project-note"];
const themeStorageKey = "portfolio-theme";
const languageStorageKey = "portfolio-language";

const translations = {
  "About": "نبذة",
  "Featured": "الأبرز",
  "Practice": "تدريب",
  "Edge AI": "Edge AI",
  "Tools": "الأدوات",
  "Community": "المجتمع",
  "Skills": "المهارات",
  "Contact": "التواصل",
  "Murtadha Najem": "مرتضى نجم",
  "Data Analyst & AI Engineer": "محلل بيانات ومهندس ذكاء اصطناعي",
  "I build end-to-end data pipelines, machine learning systems, and analytical reports that turn raw data into structured insights, with a focus on real-world problems in Iraq and Arabic-language data.": "أبني خطوط معالجة بيانات متكاملة، وأنظمة تعلم آلي، وتقارير تحليلية تحول البيانات الخام إلى رؤى منظمة، مع تركيز على مشكلات واقعية في العراق والبيانات العربية.",
  "View Projects": "عرض المشاريع",
  "Download CV": "تحميل السيرة الذاتية",
  "Based in Baghdad, Iraq · Open to Data Analyst, BI Analyst, Research Analyst, and AI/ML Engineer roles": "مقيم في بغداد، العراق · متاح لأدوار محلل بيانات، محلل ذكاء أعمال، محلل أبحاث، ومهندس AI/ML",
  "Portfolio Focus": "تركيز المعرض",
  "Data · AI · Analytics": "البيانات · الذكاء الاصطناعي · التحليلات",
  "Projects": "المشاريع",
  "Featured": "الأبرز",
  "Modern Stack": "تقنيات حديثة",
  "Clear thinking across data, models, and business problems.": "تفكير واضح يربط بين البيانات والنماذج ومشكلات العمل.",
  "Results-driven Data Analyst & AI Engineer with a background in Information and Communication Engineering from Al-Nahrain University. I focus on building practical data and AI systems, from data collection and cleaning to machine learning, structured extraction, and insight generation.": "محلل بيانات ومهندس ذكاء اصطناعي يركز على النتائج، بخلفية في هندسة المعلومات والاتصالات من جامعة النهرين. أعمل على بناء أنظمة بيانات وذكاء اصطناعي عملية، من جمع البيانات وتنظيفها إلى التعلم الآلي والاستخراج المنظم وتوليد الرؤى.",
  "Analytics": "التحليلات",
  "Insight-ready reporting and measurement.": "تقارير وقياسات جاهزة لاستخلاص الرؤى.",
  "AI Systems": "أنظمة الذكاء الاصطناعي",
  "Practical automation and model workflows.": "أتمتة عملية وسير عمل للنماذج.",
  "Communication": "التواصل",
  "Clear recommendations for stakeholders.": "توصيات واضحة لأصحاب القرار.",
  "Featured Projects": "المشاريع الأبرز",
  "Selected projects that best represent my work in data pipelines, AI systems, audio AI, and communication engineering.": "مشاريع مختارة تمثل عملي في خطوط البيانات، وأنظمة الذكاء الاصطناعي، وذكاء الصوت، وهندسة الاتصالات.",
  "End-to-End Data Pipeline · Analytical Report": "خط بيانات متكامل · تقرير تحليلي",
  "Iraqi Job Market Analysis Pipeline": "خط تحليل سوق العمل العراقي",
  "End-to-end data pipeline and analytical report on Iraq's private-sector job market.": "خط بيانات متكامل وتقرير تحليلي حول سوق العمل في القطاع الخاص العراقي.",
  "End-to-end Iraqi job market data pipeline that collected, filtered, classified, extracted, and analyzed more than 100,000 public job posts to produce a structured dataset and Arabic analytical report.": "خط بيانات متكامل لسوق العمل العراقي جمع وفرز وصنف واستخرج وحلل أكثر من 100,000 منشور وظيفي عام لإنتاج مجموعة بيانات منظمة وتقرير تحليلي باللغة العربية.",
  "job posts": "منشور وظيفي",
  "months": "شهراً",
  "Telegram channels": "قناة تليجرام",
  "platforms": "منصة",
  "Collected job posts from Telegram channels and hiring websites.": "جمع منشورات وظائف من قنوات التليجرام ومواقع التوظيف.",
  "Used REST APIs, Scrapy, Selenium/Playwright, and Telethon for scraping.": "استخدم REST APIs وScrapy وSelenium/Playwright وTelethon في جمع البيانات.",
  "Removed duplicates, short posts, and irrelevant messages.": "إزالة التكرارات والمنشورات القصيرة والرسائل غير ذات الصلة.",
  "Used a multi-stage AI classification pipeline to identify real job posts.": "استخدام خط تصنيف متعدد المراحل بالذكاء الاصطناعي لتحديد منشورات الوظائف الحقيقية.",
  "Routed posts into professional, service/clerical, and manual/basic job tiers.": "توجيه المنشورات إلى فئات وظيفية مهنية وخدمية/إدارية ويدوية/أساسية.",
  "Extracted job title, company, location, salary, experience, education, skills, contract type, and gender preference.": "استخراج المسمى الوظيفي، الشركة، الموقع، الراتب، الخبرة، التعليم، المهارات، نوع العقد، وتفضيل الجنس.",
  "Cleaned and normalized job titles, salaries, locations, sectors, and skills.": "تنظيف وتوحيد المسميات الوظيفية والرواتب والمواقع والقطاعات والمهارات.",
  "Produced an Arabic report for job seekers, employers, researchers, and decision makers.": "إنتاج تقرير عربي موجه للباحثين عن عمل وأصحاب العمل والباحثين وصناع القرار.",
  "Pipeline Repo": "مستودع الخط",
  "View Report": "عرض التقرير",
  "View Analysis Notebook": "عرض دفتر التحليل",
  "Telegram": "تليجرام",
  "Bot": "بوت",
  "Telegram Bot": "بوت تليجرام",
  "Bachelor's Final Year Project · Al-Nahrain University": "مشروع التخرج · جامعة النهرين",
  "Hierarchical LLM 5G/6G Control": "التحكم الهرمي باستخدام LLM في شبكات 5G/6G",
  "Multi-agent AI system for handover and MEC optimization in 5G/6G networks.": "نظام ذكاء اصطناعي متعدد الوكلاء لتحسين التسليم وMEC في شبكات 5G/6G.",
  "Graduation project combining deterministic telecom control agents with a guarded LLM strategy layer for handover and MEC optimization in simulated 5G/6G networks.": "مشروع تخرج يجمع بين وكلاء تحكم حتمي في الاتصالات وطبقة استراتيجية LLM محمية لتحسين التسليم وMEC في شبكات 5G/6G محاكاة.",
  "URLLC drop reduction": "تقليل إسقاط URLLC",
  "mMTC energy reduction": "تقليل طاقة mMTC",
  "fewer ping-pong handovers": "تسليمات ping-pong أقل",
  "Designed a hierarchical control architecture with tower-level agents, supervisor conflict resolution, and a strategic LLM optimizer.": "تصميم بنية تحكم هرمية تضم وكلاء على مستوى الأبراج، ومشرفاً لحل التعارضات، ومحسناً استراتيجياً يعتمد على LLM.",
  "Implemented a deterministic safety shield to prevent unsafe LLM outputs.": "تنفيذ طبقة أمان حتمية لمنع مخرجات LLM غير الآمنة.",
  "Used eight pre-validated policy bundles for controlled network optimization.": "استخدام ثماني حزم سياسات معتمدة مسبقاً لتحسين الشبكة بشكل مضبوط.",
  "Compared B0 baseline, B1 intent-aware, B2-noLLM deterministic, and B2 guarded LLM modes.": "مقارنة أوضاع B0 baseline وB1 intent-aware وB2-noLLM deterministic وB2 guarded LLM.",
  "Evaluated URLLC latency/drop, eMBB completion, mMTC energy, goodput, and unnecessary handovers.": "تقييم تأخير وإسقاط URLLC، وإنجاز eMBB، وطاقة mMTC، ومعدل النقل الفعال، والتسليمات غير الضرورية.",
  "Tested 600-second simulations across multiple random seeds and compared GPT-4o-mini, GPT-4.1, and TeleLLM.": "اختبار محاكاة مدتها 600 ثانية عبر بذور عشوائية متعددة ومقارنة GPT-4o-mini وGPT-4.1 وTeleLLM.",
  "View Repository": "عرض المستودع",
  "Research Paper": "ورقة بحثية",
  "Featured Audio AI Research · Arabic Maqam Recognition": "بحث صوتي مميز بالذكاء الاصطناعي · تمييز المقامات العربية",
  "Arabic Maqam Classification": "تصنيف المقامات العربية",
  "Deep learning system for recognizing Arabic maqamat in music and the Holy Quran.": "نظام تعلم عميق للتعرف على المقامات العربية في الموسيقى والقرآن الكريم.",
  "Audio AI project for recognizing Arabic maqamat across music and the Holy Quran, using signal processing, augmentation, and deep learning for a culturally specific Arabic audio problem.": "مشروع ذكاء اصطناعي صوتي للتعرف على المقامات العربية في الموسيقى والقرآن الكريم، باستخدام معالجة الإشارة وزيادة البيانات والتعلم العميق لمشكلة صوتية عربية متخصصة.",
  "test accuracy": "دقة الاختبار",
  "maqam classes": "فئات مقام",
  "Music + Holy Quran": "الموسيقى + القرآن الكريم",
  "Music Maqam": "مقام موسيقي",
  "Music Maqam Classification": "تصنيف المقام الموسيقي",
  "Built a deep learning pipeline for Arabic music maqam recognition using pitch-based features, augmentation, and a CNN-RNN / CNN-LSTM style model.": "بناء خط تعلم عميق للتعرف على المقام في الموسيقى العربية باستخدام خصائص تعتمد على طبقة الصوت، وزيادة البيانات، ونموذج بأسلوب CNN-RNN / CNN-LSTM.",
  "Classified 8 maqam classes: Ajam, Bayat, Hijaz, Kurd, Nahawand, Rast, Saba, and Seka.": "تصنيف 8 مقامات: Ajam وBayat وHijaz وKurd وNahawand وRast وSaba وSeka.",
  "Used Librosa for audio loading and feature extraction with 60 fixed windows per sample.": "استخدام Librosa لتحميل الصوت واستخراج الخصائص ضمن 60 نافذة ثابتة لكل عينة.",
  "Applied augmentation and efficient HDF5-based feature storage.": "تطبيق زيادة البيانات وتخزين الخصائص بكفاءة باستخدام HDF5.",
  "Holy Quran": "القرآن الكريم",
  "Holy Quran Maqam Classification": "تصنيف المقام في القرآن الكريم",
  "Extended the maqam-recognition workflow to Holy Quran audio as a related but distinct vocal audio classification task.": "توسيع سير عمل التعرف على المقام إلى صوت القرآن الكريم كمهمة تصنيف صوتي مرتبطة لكنها مختلفة.",
  "Focused on maqam recognition from Holy Quran audio.": "التركيز على التعرف على المقام من صوت القرآن الكريم.",
  "Applied preprocessing, feature extraction, and deep learning classification.": "تطبيق المعالجة المسبقة واستخراج الخصائص والتصنيف بالتعلم العميق.",
  "Presented as an audio AI experiment, without making religious or interpretive claims.": "تقديمه كتجربة ذكاء اصطناعي صوتي دون تقديم ادعاءات دينية أو تفسيرية.",
  "Featured because it targets a culturally specific Arabic audio AI problem.": "مميز لأنه يستهدف مشكلة صوتية عربية ذات خصوصية ثقافية.",
  "Music Notebook": "دفتر الموسيقى",
  "Holy Quran Notebook": "دفتر القرآن الكريم",
  "Telecommunications · Deep Learning": "الاتصالات · التعلم العميق",
  "Digital Modulation Classification": "تصنيف التضمين الرقمي",
  "CNN-based classification of digital modulation signals for telecommunications.": "تصنيف إشارات التضمين الرقمي للاتصالات باستخدام CNN.",
  "Telecommunications deep learning project that classifies digital modulation types from I/Q signal data using a family classifier and specialized CNN models.": "مشروع تعلم عميق في الاتصالات يصنف أنواع التضمين الرقمي من بيانات I/Q باستخدام مصنف عائلات ونماذج CNN متخصصة.",
  "final accuracy": "الدقة النهائية",
  "family classifier": "مصنف العائلة",
  "Used I/Q signal samples with shape 1024 x 2.": "استخدام عينات إشارات I/Q بأبعاد 1024 x 2.",
  "Combined RadioML-style digital modulation data with FSK data.": "دمج بيانات تضمين رقمي بأسلوب RadioML مع بيانات FSK.",
  "Built a general modulation-family classifier and specialized ASK, FSK, PSK, APSK, and QAM classifiers.": "بناء مصنف عام لعائلات التضمين ومصنفات متخصصة لـ ASK وFSK وPSK وAPSK وQAM.",
  "Implemented a routing system that sends each signal to the correct specialized CNN model.": "تنفيذ نظام توجيه يرسل كل إشارة إلى نموذج CNN المتخصص المناسب.",
  "View Notebook": "عرض الدفتر",
  "Report": "التقرير",
  "Learning & Practice Projects": "مشاريع التعلم والتدريب",
  "Earlier applied ML/DL notebooks built for practice, experimentation, and learning.": "دفاتر ML/DL تطبيقية أقدم بُنيت للتدريب والتجريب والتعلم.",
  "2 projects": "مشروعان",
  "1 project": "مشروع واحد",
  "2 tools": "أداتان",
  "3 projects": "3 مشاريع",
  "1 initiative": "مبادرة واحدة",
  "Computer Vision · Medical Imaging": "الرؤية الحاسوبية · التصوير الطبي",
  "X-Ray Chest Classification": "تصنيف الالتهاب الرئوي من خلال صورة الأشعة السينية",
  "Deep learning system for chest X-ray pneumonia classification.": "نظام تعلم عميق لتصنيف الالتهاب الرئوي من صور أشعة الصدر.",
  "This was my first serious project with CNNs and computer vision, built in 2024 while I was learning how deep learning models understand images. I used chest X-ray images to explore binary and multi-class classification with custom CNNs and transfer learning.": "كان هذا أول مشروع جاد لي مع CNN والرؤية الحاسوبية في عام 2024 أثناء تعلمي كيف تفهم نماذج التعلم العميق الصور. استخدمت صور أشعة الصدر لاستكشاف التصنيف الثنائي ومتعدد الفئات باستخدام نماذج CNN مخصصة والتعلم بالنقل.",
  "images": "صورة",
  "classes": "فئات",
  "Tested grayscale and RGB image pipelines with custom CNN models.": "اختبار خطوط صور grayscale وRGB باستخدام نماذج CNN مخصصة.",
  "Experimented with MobileNet, ResNet152V2, and DenseNet121 transfer learning models.": "تجربة نماذج تعلم بالنقل مثل MobileNet وResNet152V2 وDenseNet121.",
  "Used train/validation/test evaluation with confusion matrices and classification reports.": "استخدام تقييم train/validation/test مع مصفوفات الالتباس وتقارير التصنيف.",
  "Compared approaches for separating bacterial and viral pneumonia classes.": "مقارنة أساليب فصل فئات الالتهاب الرئوي البكتيري والفيروسي.",
  "Audio ML · Feature Engineering": "تعلم آلي صوتي · هندسة خصائص",
  "Speech-Based Gender Prediction": "التنبؤ بالجنس اعتماداً على الصوت",
  "Audio feature engineering and machine learning for voice-based gender classification.": "هندسة خصائص صوتية وتعلم آلي لتصنيف الجنس اعتماداً على الصوت.",
  "After image-based deep learning, I wanted to understand how models learn from audio. I extracted MFCC, pitch, spectral, and energy features, then compared machine learning approaches for voice-based gender classification.": "بعد التعلم العميق المعتمد على الصور، أردت فهم كيفية تعلم النماذج من الصوت. استخرجت خصائص MFCC وpitch وspectral وenergy ثم قارنت أساليب تعلم آلي لتصنيف الجنس من الصوت.",
  "Extracted spectral, temporal, pitch, MFCC, statistical, and energy-based features with Librosa.": "استخراج خصائص spectral وtemporal وpitch وMFCC وخصائص إحصائية وطاقية باستخدام Librosa.",
  "Applied preprocessing and MinMax scaling.": "تطبيق المعالجة المسبقة وMinMax scaling.",
  "Compared SVC, ExtraTrees, Random Forest, Bagging, KNN, Gradient Boosting, Logistic Regression, Naive Bayes, LDA, and QDA.": "مقارنة SVC وExtraTrees وRandom Forest وBagging وKNN وGradient Boosting وLogistic Regression وNaive Bayes وLDA وQDA.",
  "Used Bayesian search for hyperparameter tuning and saved the trained model for reuse.": "استخدام البحث البايزي لضبط المعاملات وحفظ النموذج المدرب لإعادة الاستخدام.",
  "Edge AI & IoT Projects": "مشاريع Edge AI وIoT",
  "Hardware-to-backend systems combining edge devices, computer vision, and automation.": "أنظمة من العتاد إلى الخلفية تجمع أجهزة edge والرؤية الحاسوبية والأتمتة.",
  "Applied Edge AI System": "نظام Edge AI تطبيقي",
  "Full pipeline from hardware capture to local backend processing and storage.": "خط كامل من الالتقاط عبر العتاد إلى المعالجة والتخزين في خلفية محلية.",
  "Edge AI · IoT Vision System": "Edge AI · نظام رؤية IoT",
  "Smart Walkway Camera System": "نظام كاميرات الممر الذكي",
  "ESP32-CAM edge-to-server computer vision pipeline for smart walkway monitoring.": "خط رؤية حاسوبية من ESP32-CAM إلى الخادم لمراقبة ممر ذكي.",
  "This project helped me learn how to combine ESP32 hardware with AI in an edge-computing workflow, sending relevant camera frames to a local Flask backend for vision processing and storage.": "ساعدني هذا المشروع على تعلم دمج عتاد ESP32 مع الذكاء الاصطناعي ضمن سير عمل edge computing، عبر إرسال الإطارات المهمة إلى خلفية Flask محلية لمعالجة الرؤية والتخزين.",
  "backend": "خلفية",
  "Edge Device": "جهاز الحافة",
  "Built an ESP32-CAM based edge vision pipeline.": "بناء خط رؤية edge يعتمد على ESP32-CAM.",
  "Used TinyML / Edge Impulse for on-device person detection.": "استخدام TinyML / Edge Impulse لاكتشاف الأشخاص على الجهاز.",
  "Captured VGA images and downscaled frames for lightweight edge inference.": "التقاط صور VGA وتصغير الإطارات لاستدلال خفيف على الحافة.",
  "Uploaded images only when a person was detected, including bounding boxes through custom HTTP headers.": "رفع الصور فقط عند اكتشاف شخص، مع إرسال bounding boxes عبر HTTP headers مخصصة.",
  "Backend & Storage": "الخلفية والتخزين",
  "Used a Python Flask server for receiving images and running local processing.": "استخدام خادم Python Flask لاستقبال الصور وتشغيل المعالجة المحلية.",
  "Applied OpenCV with ONNX models for face detection and recognition.": "تطبيق OpenCV مع نماذج ONNX لاكتشاف الوجوه والتعرف عليها.",
  "Generated processed images with bounding boxes and recognition labels.": "توليد صور معالجة مع bounding boxes وتسميات التعرف.",
  "Included optional PostgreSQL-backed image logging and multiple ESP32 operating modes.": "تضمين تسجيل اختياري للصور عبر PostgreSQL وعدة أوضاع تشغيل لـ ESP32.",
  "Workflow Automation Tools": "أدوات أتمتة سير العمل",
  "Applied tools built to automate specific tasks and make repeatable workflows easier.": "أدوات تطبيقية بُنيت لأتمتة مهام محددة وتسهيل سير العمل المتكرر.",
  "Automation · Local-First Tooling": "أتمتة · أدوات محلية أولاً",
  "Video Compression & Phone Sync Suite": "حزمة ضغط الفيديو ومزامنة الهاتف",
  "Local-first video compression and phone sync toolkit with Android automation and Telegram bot support.": "حزمة ضغط فيديو ومزامنة هاتف محلية أولاً مع أتمتة Android ودعم بوت التليجرام.",
  "This project started from a repeated personal problem: phone storage kept filling up because videos take too much space. I built a local-first workflow to pull, compress, report, and sync videos back to the phone.": "بدأ هذا المشروع من مشكلة شخصية متكررة: امتلاء مساحة الهاتف بسبب حجم الفيديوهات. بنيت سير عمل محلياً لسحب الفيديوهات وضغطها وإعداد تقارير عنها ومزامنتها مرة أخرى مع الهاتف.",
  "Local-first": "محلي أولاً",
  "Android CLI Pipeline": "خط Android عبر CLI",
  "Pulls videos from an Android camera folder to a local PC using ADB.": "سحب الفيديوهات من مجلد الكاميرا في Android إلى حاسوب محلي باستخدام ADB.",
  "Compresses videos using FFmpeg and HEVC/H.265.": "ضغط الفيديوهات باستخدام FFmpeg وHEVC/H.265.",
  "Pushes optimized videos back to the phone.": "إرجاع الفيديوهات المحسنة إلى الهاتف.",
  "Monitors free disk space and pauses before the drive fills up.": "مراقبة المساحة الحرة وإيقاف العمل قبل امتلاء القرص.",
  "Telegram Bot Workflow": "سير عمل بوت التليجرام",
  "Supports Android, iPhone/iOS, desktop, and web through Telegram upload.": "يدعم Android وiPhone/iOS والحاسوب والويب عبر رفع الملفات في التليجرام.",
  "Uses a 10-second sample encode to estimate runtime and final file size.": "استخدام عينة ترميز لمدة 10 ثوان لتقدير وقت التنفيذ والحجم النهائي.",
  "Provides Quick, Standard, and Maximum compression modes.": "توفير أوضاع ضغط: سريع، قياسي، وأقصى ضغط.",
  "Processes video jobs sequentially with a non-blocking internal queue.": "معالجة مهام الفيديو بالتتابع عبر طابور داخلي غير حاجب.",
  "Dynamically selects compression settings based on source bitrate.": "اختيار إعدادات الضغط ديناميكياً حسب bitrate المصدر.",
  "Generates compression reports and space-saving statistics.": "توليد تقارير ضغط وإحصاءات توفير المساحة.",
  "Product Engineering · Telegram Bot": "هندسة منتج · بوت تليجرام",
  "Telegram Crochet Pattern Bot": "بوت تليجرام لتحويل الصور إلى أنماط كروشيه",
  "Image-to-crochet-pattern Telegram bot with Arabic support and interactive step-by-step guidance.": "بوت تليجرام يحول الصور إلى أنماط كروشيه مع دعم عربي وإرشاد تفاعلي خطوة بخطوة.",
  "I built this bot after noticing how difficult it can be to manually convert images into crochet patterns. It turns an uploaded image into a crochet-style grid, maps colors, and guides users row by row in Telegram.": "بنيت هذا البوت بعد ملاحظة صعوبة تحويل الصور يدوياً إلى أنماط كروشيه. يحول الصورة المرفوعة إلى شبكة بأسلوب الكروشيه، ويطابق الألوان، ويرشد المستخدم صفاً بصف داخل التليجرام.",
  "Simple UI": "واجهة مستخدم بسيطة",
  "Telegram Use": "الاستخدام عبر التليجرام",
  "Precise Color Selection": "اختيار دقيق للألوان",
  "Workflow": "سير العمل",
  "Converts uploaded images into crochet pattern grids.": "تحويل الصور المرفوعة إلى شبكات أنماط كروشيه.",
  "Analyzes image complexity and recommends an optimal pattern size.": "تحليل تعقيد الصورة واقتراح الحجم الأنسب للنمط.",
  "Detects dominant colors and maps them to a yarn color palette.": "اكتشاف الألوان السائدة ومطابقتها مع لوحة ألوان خيوط.",
  "Generates row-by-row crochet instructions with Arabic interface support.": "توليد تعليمات كروشيه صفاً بصف مع دعم واجهة عربية.",
  "Architecture": "البنية",
  "Separates reusable image-processing modules from Telegram bot handlers.": "فصل وحدات معالجة الصور القابلة لإعادة الاستخدام عن معالجات بوت التليجرام.",
  "Uses SQLite for user and session persistence.": "استخدام SQLite لحفظ بيانات المستخدم والجلسات.",
  "Supports inline-button navigation and localized stitch color edits.": "دعم التنقل بالأزرار المدمجة وتعديل ألوان غرز محددة محلياً.",
  "Keeps core logic reusable for a future web app, CLI tool, or messaging platform.": "إبقاء المنطق الأساسي قابلاً لإعادة الاستخدام في تطبيق ويب أو أداة CLI أو منصة مراسلة لاحقاً.",
  "Side Projects & Personal Tools": "مشاريع جانبية وأدوات شخصية",
  "Small side projects and personal tools built from curiosity, study needs, or everyday use cases.": "مشاريع جانبية وأدوات شخصية صغيرة بُنيت من الفضول أو احتياجات الدراسة أو الاستخدام اليومي.",
  "Personal Automation Tools": "أدوات أتمتة شخصية",
  "Small utilities built to simplify repeatable personal workflows.": "أدوات صغيرة لتبسيط مهام شخصية متكررة.",
  "Personal Automation · Media Utility": "أتمتة شخصية · أداة وسائط",
  "YouTube to MP3 Tool": "أداة تحويل YouTube إلى MP3",
  "Windows and Telegram-based utility for converting YouTube videos to MP3.": "أداة تعتمد على Windows والتليجرام لتحويل فيديوهات YouTube إلى MP3.",
  "I built this tool because I needed a simpler way to download YouTube audio as MP3 without ads, limits, or unreliable websites. It combines Windows automation, yt-dlp, FFmpeg, and Telegram bot access.": "بنيت هذه الأداة لأنني احتجت طريقة أبسط لتحميل صوت YouTube بصيغة MP3 دون إعلانات أو قيود أو مواقع غير موثوقة. تجمع بين أتمتة Windows وyt-dlp وFFmpeg وإتاحة بوت التليجرام.",
  "utility": "أداة",
  "automation": "أتمتة",
  "Supports direct MP3 download on Windows through a simple batch file.": "دعم تحميل MP3 مباشرة على Windows عبر ملف batch بسيط.",
  "Supports remote download through a Telegram bot.": "دعم التحميل عن بُعد عبر بوت التليجرام.",
  "Accepts standard YouTube, youtu.be, and YouTube Shorts links.": "قبول روابط YouTube القياسية وروابط youtu.be وYouTube Shorts.",
  "Uses yt-dlp for downloading media streams and FFmpeg for MP3 conversion.": "استخدام yt-dlp لتنزيل تدفقات الوسائط وFFmpeg للتحويل إلى MP3.",
  "Uses browser cookies for authenticated YouTube access and temporary files for bot mode.": "استخدام cookies المتصفح للوصول الموثق إلى YouTube وملفات مؤقتة لوضع البوت.",
  "Experimental & Educational Tools": "أدوات تجريبية وتعليمية",
  "Small exploratory tools built around custom logic, study support, and practical interfaces.": "أدوات استكشافية صغيرة مبنية حول منطق مخصص ودعم دراسي وواجهات عملية.",
  "Mathematical Programming · Python Tool": "برمجة رياضية · أداة Python",
  "InfiniteBaseCalc": "حاسبة الأسس غير التقليدية",
  "Python base-conversion and calculator tool supporting unusual numeric bases.": "أداة Python للتحويل بين الأسس والحساب تدعم أنظمة عددية غير تقليدية.",
  "This older side project started from a math question about number systems beyond everyday bases. I built a converter and calculator to explore negative bases, fractional bases, and custom base logic.": "بدأ هذا المشروع الجانبي القديم من سؤال رياضي حول أنظمة عددية تتجاوز الأسس المعتادة. بنيت محولاً وحاسبة لاستكشاف الأسس السالبة والكسرية ومنطق الأسس المخصص.",
  "Negative Bases": "أسس سالبة",
  "Fractional Bases": "أسس كسرية",
  "Calculation Accuracy": "دقة في الحسابات",
  "Converts numbers across many base systems, excluding base 0 and base 1.": "تحويل الأعداد بين أنظمة أسس كثيرة باستثناء الأساس 0 والأساس 1.",
  "Supports fractional and negative numbers with manually implemented Python logic.": "دعم الأعداد الكسرية والسالبة بمنطق Python منفذ يدوياً.",
  "Includes an expression calculator for calculations in a selected base.": "تضمين حاسبة تعبيرات للحساب ضمن أساس مختار.",
  "Includes a testing script for measuring error rates across base and number scenarios.": "تضمين سكريبت اختبار لقياس معدلات الخطأ عبر سيناريوهات مختلفة للأسس والأعداد.",
  "Standard positive-base conversions reached 0% error in tested cases; higher error mainly appears with small fractional bases and large numbers.": "حققت تحويلات الأسس الموجبة القياسية خطأ 0% في الحالات المختبرة؛ وتظهر الأخطاء الأكبر غالباً مع الأسس الكسرية الصغيرة والأعداد الكبيرة.",
  "Educational Tool · Web Calculator": "أداة تعليمية · حاسبة ويب",
  "Numerical Methods Calculator Suite": "حزمة حاسبات الطرق العددية",
  "Simple Web Interface": "واجهة ويب بسيطة",
  "Full Step Explanation": "شرح كامل للخطوات",
  "Web-based study tools for solving numerical analysis methods.": "أدوات دراسة على الويب لحل طرق التحليل العددي.",
  "I built this web tool while studying numerical methods because our coursework required many techniques in one place. Programming each method helped me understand the algorithms more deeply.": "بنيت هذه الأداة أثناء دراسة الطرق العددية لأن المقرر كان يحتاج عدة تقنيات في مكان واحد. برمجة كل طريقة ساعدتني على فهم الخوارزميات بعمق أكبر.",
  "Built with HTML, CSS, and JavaScript to support classmates during coursework.": "بُنيت باستخدام HTML وCSS وJavaScript لدعم الزملاء أثناء المقرر.",
  "Helps students verify solutions and understand step-by-step numerical procedures.": "تساعد الطلاب على التحقق من الحلول وفهم الإجراءات العددية خطوة بخطوة.",
  "Organized into separate pages and scripts for each method.": "منظمة في صفحات وسكريبتات منفصلة لكل طريقة.",
  "Includes Bisection, Newton, Secant, False Position, Gaussian, Gauss-Jordan, Gauss-Seidel, Jacobi, Inverse Matrix, and Taylor methods.": "تتضمن طرق Bisection وNewton وSecant وFalse Position وGaussian وGauss-Jordan وGauss-Seidel وJacobi وInverse Matrix وTaylor.",
  "Community & Volunteering": "المجتمع والتطوع",
  "Educational documentation and knowledge-sharing work created to support students and future cohorts.": "توثيق تعليمي ومشاركة معرفة لدعم الطلاب والدفعات القادمة.",
  "Academic Documentation · Knowledge Sharing": "توثيق أكاديمي · مشاركة معرفة",
  "ICE 2022-2026 Study Archive": "أرشيف ICE 2022-2026 الدراسي",
  "Structured academic archive and student-friendly explanations for Information & Communication Engineering.": "أرشيف أكاديمي منظم وشروحات مناسبة للطلاب في هندسة المعلومات والاتصالات.",
  "A volunteer educational initiative built to organize, document, and explain study materials for Information & Communication Engineering students across four academic years.": "مبادرة تعليمية تطوعية لتنظيم وتوثيق وشرح مواد دراسة هندسة المعلومات والاتصالات عبر أربع سنوات أكاديمية.",
  "academic years": "سنوات أكاديمية",
  "semesters": "فصول دراسية",
  "archive": "أرشيف",
  "Created structured Telegram channels and course-level indexes.": "إنشاء قنوات تليجرام منظمة وفهارس على مستوى المواد.",
  "Documented lectures, summaries, explanations, questions, solutions, and useful references.": "توثيق المحاضرات والملخصات والشروحات والأسئلة والحلول والمراجع المفيدة.",
  "Wrote and organized explanations in a clear, student-friendly style.": "كتابة وتنظيم الشروحات بأسلوب واضح ومناسب للطلاب.",
  "Helped students quickly find materials by year, semester, and subject.": "مساعدة الطلاب على الوصول السريع للمواد حسب السنة والفصل والمادة.",
  "Shared the archive publicly to support future cohorts and students studying similar engineering topics.": "نشر الأرشيف علناً لدعم الدفعات القادمة والطلاب الذين يدرسون موضوعات هندسية مشابهة.",
  "Designed as a collaborative educational resource built around clarity, accessibility, and long-term usefulness.": "تصميمه كمورد تعليمي تعاوني يركز على الوضوح وسهولة الوصول والفائدة طويلة الأمد.",
  "Coverage includes Year 1 through Year 4, Course 1 and Course 2, across programming, mathematics, electronics, communications, networking, AI, data mining, multimedia, and related engineering subjects.": "تشمل التغطية السنوات من الأولى إلى الرابعة، الكورس الأول والثاني، ضمن البرمجة والرياضيات والإلكترونيات والاتصالات والشبكات والذكاء الاصطناعي وتنقيب البيانات والوسائط المتعددة ومواد هندسية مرتبطة.",
  "Open Archive": "فتح الأرشيف",
  "Grouped capabilities.": "مهارات منظمة حسب المجال.",
  "Data Analysis": "تحليل البيانات",
  "Machine Learning": "التعلم الآلي",
  "AI Engineering": "هندسة الذكاء الاصطناعي",
  "Visualization": "تصوير البيانات",
  "Academic background and certifications supporting my work in data analysis, machine learning, and applied AI.": "خلفية أكاديمية وشهادات تدعم عملي في تحليل البيانات والتعلم الآلي والذكاء الاصطناعي التطبيقي.",
  "Education": "التعليم",
  "B.Sc. Information and Communication Engineering": "بكالوريوس هندسة المعلومات والاتصالات",
  "Al-Nahrain University — College of Information Engineering": "جامعة النهرين — كلية هندسة المعلومات",
  "Graduated June 2026": "التخرج في يونيو 2026",
  "Ranked 1st in class": "الأول على الدفعة",
  "Certifications": "الشهادات",
  "Professional Certifications": "شهادات مهنية",
  "IBM Data Science Professional Certificate": "شهادة IBM المهنية في علم البيانات",
  "Python, SQL, machine learning, and data visualization across 12 courses.": "Python وSQL والتعلم الآلي وتصوير البيانات عبر 12 دورة.",
  "View Credential": "عرض الشهادة",
  "IBM Data Analyst Professional Certificate": "شهادة IBM المهنية في تحليل البيانات",
  "Data analysis, Excel, SQL, Jupyter, and Cognos Analytics across 11 courses.": "تحليل البيانات وExcel وSQL وJupyter وCognos Analytics عبر 11 دورة.",
  "Machine Learning Specialization by Stanford Online": "تخصص التعلم الآلي من Stanford Online",
  "Supervised learning, unsupervised learning, neural networks, and reinforcement learning across 3 courses.": "التعلم الخاضع للإشراف وغير الخاضع للإشراف والشبكات العصبية والتعلم المعزز عبر 3 دورات.",
  "IBM Machine Learning Professional Certificate": "شهادة IBM المهنية في التعلم الآلي",
  "Machine learning, deep learning, time series, and reinforcement learning across 6 courses.": "التعلم الآلي والتعلم العميق والسلاسل الزمنية والتعلم المعزز عبر 6 دورات.",
  "CV": "السيرة الذاتية",
  "Full CV": "السيرة الذاتية الكاملة",
  "For full education, experience, certifications, and project history, download the complete CV.": "للاطلاع على التعليم والخبرة والشهادات وتاريخ المشاريع كاملاً، حمّل السيرة الذاتية.",
  "Let's connect about data, AI, and useful work.": "لنتواصل حول البيانات والذكاء الاصطناعي والعمل المفيد.",
  "Open to Data Analyst, BI Analyst, Research Analyst, and AI/ML Engineer opportunities.": "متاح لفرص محلل بيانات، محلل ذكاء أعمال، محلل أبحاث، ومهندس AI/ML.",
  "Email": "البريد الإلكتروني",
  "Back to top": "العودة للأعلى",
  "Murtadha Najem. All rights reserved.": "مرتضى نجم. جميع الحقوق محفوظة.",
  "Show more": "عرض المزيد",
  "Show less": "عرض أقل",
  "Project Details": "تفاصيل المشروع",
  "Close project details": "إغلاق تفاصيل المشروع",
  "Switch to light mode": "التبديل إلى الوضع الفاتح",
  "Switch to dark mode": "التبديل إلى الوضع الداكن",
  "Switch language": "تبديل اللغة",
  "Toggle navigation menu": "فتح أو إغلاق قائمة التنقل",
  "Go to top": "العودة إلى أعلى الصفحة",
  "Download Murtadha Najem full CV": "تحميل السيرة الذاتية الكاملة لمرتضى نجم",
  "Open ICE 2022-2026 Study Archive on Telegram": "فتح أرشيف ICE 2022-2026 الدراسي على التليجرام"
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([english, arabic]) => [arabic, english]));

const getSavedTheme = () => {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    return;
  }
};

const getSavedLanguage = () => {
  try {
    return localStorage.getItem(languageStorageKey);
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    return;
  }
};

const translateValue = (value, language) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return value;
  }

  const translated = language === "ar" ? translations[trimmed] : reverseTranslations[trimmed];

  if (!translated) {
    return value;
  }

  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  return `${leading}${translated}${trailing}`;
};

const translateTextNodes = (language) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const nextValue = translateValue(node.nodeValue, language);

    if (nextValue !== node.nodeValue) {
      node.parentElement.dataset.i18n = node.parentElement.dataset.i18n || "text";
      node.nodeValue = nextValue;
    }
  });
};

const translateAriaLabel = (value, language) => {
  if (language === "en") {
    return value;
  }

  const exact = translations[value];

  if (exact) {
    return exact;
  }

  const repositoryMatch = value.match(/^View (.+) repository$/);
  if (repositoryMatch) {
    return `عرض مستودع ${repositoryMatch[1]}`;
  }

  const notebookMatch = value.match(/^View (.+) notebook$/);
  if (notebookMatch) {
    return `عرض دفتر ${notebookMatch[1]}`;
  }

  const reportMatch = value.match(/^View (.+) report$/);
  if (reportMatch) {
    return `عرض تقرير ${reportMatch[1]}`;
  }

  const researchMatch = value.match(/^Read (.+) research paper$/);
  if (researchMatch) {
    return `قراءة الورقة البحثية: ${researchMatch[1]}`;
  }

  return value;
};

const translateAttributes = (language) => {
  document.querySelectorAll("[aria-label]").forEach((element) => {
    if (!element.dataset.i18nAriaOriginal) {
      element.dataset.i18nAriaOriginal = element.getAttribute("aria-label");
    }

    const originalValue = element.dataset.i18nAriaOriginal;
    const nextValue = language === "ar" ? translateAriaLabel(originalValue, language) : originalValue;

    if (nextValue !== element.getAttribute("aria-label")) {
      element.dataset.i18nAriaLabel = "true";
      element.setAttribute("aria-label", nextValue);
    }
  });
};

const updateLanguageToggle = (language) => {
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const setLanguage = (language, shouldSave = true) => {
  const nextLanguage = language === "ar" ? "ar" : "en";

  document.documentElement.lang = nextLanguage;
  document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.language = nextLanguage;
  document.title =
    nextLanguage === "ar"
      ? "مرتضى نجم | محلل بيانات ومهندس ذكاء اصطناعي"
      : "Murtadha Najem | Data Analyst & AI Engineer";

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      nextLanguage === "ar"
        ? "معرض أعمال مرتضى نجم، محلل بيانات ومهندس ذكاء اصطناعي مقيم في بغداد، العراق."
        : "Portfolio for Murtadha Najem, Data Analyst and AI Engineer based in Baghdad, Iraq."
    );
  }

  translateTextNodes(nextLanguage);
  translateAttributes(nextLanguage);
  updateLanguageToggle(nextLanguage);
  updateThemeToggle(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

  if (shouldSave) {
    saveLanguage(nextLanguage);
  }
};

const getPreferredLanguage = () => {
  const savedLanguage = getSavedLanguage();
  return savedLanguage === "ar" ? "ar" : "en";
};

const updateThemeToggle = (theme) => {
  if (!themeToggle || !themeToggleIcon) {
    return;
  }

  const isDark = theme === "dark";
  const isArabic = document.documentElement.lang === "ar";
  themeToggleIcon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isArabic
      ? isDark
        ? translations["Switch to light mode"]
        : translations["Switch to dark mode"]
      : isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
  );
  themeToggle.setAttribute("aria-pressed", String(isDark));
};

const setTheme = (theme, shouldSave = true) => {
  document.documentElement.dataset.theme = theme;
  updateThemeToggle(theme);

  if (shouldSave) {
    saveTheme(theme);
  }
};

const getPreferredTheme = () => {
  const savedTheme = getSavedTheme();

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

setTheme(getPreferredTheme(), false);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!getSavedTheme()) {
    setTheme(event.matches ? "dark" : "light", false);
  }
});

const setAccordionState = (section, shouldOpen) => {
  const button = section.querySelector(".accordion-header");
  const panel = section.querySelector(".accordion-panel");

  if (!button || !panel) {
    return;
  }

  button.setAttribute("aria-expanded", String(shouldOpen));
  section.classList.toggle("is-open", shouldOpen);

  if (shouldOpen) {
    panel.hidden = false;
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    return;
  }

  panel.style.maxHeight = `${panel.scrollHeight}px`;
  requestAnimationFrame(() => {
    panel.style.maxHeight = "0px";
  });

  window.setTimeout(() => {
    if (!section.classList.contains("is-open")) {
      panel.hidden = true;
    }
  }, 260);
};

const modal = document.createElement("div");
modal.className = "project-modal";
modal.hidden = true;
modal.innerHTML = `
  <div class="project-modal-backdrop" data-modal-close></div>
  <div class="project-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" tabindex="-1">
    <button class="project-modal-close" type="button" aria-label="Close project details" data-modal-close>&times;</button>
    <div class="project-modal-content"></div>
  </div>
`;
document.body.appendChild(modal);

const modalDialog = modal.querySelector(".project-modal-dialog");
const modalContent = modal.querySelector(".project-modal-content");
let lastFocusedElement = null;

const getFocusableElements = () =>
  Array.from(
    modal.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => element.offsetParent !== null || element === modalDialog);

const closeProjectModal = () => {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  modalContent.innerHTML = "";

  if (lastFocusedElement) {
    lastFocusedElement.setAttribute("aria-expanded", "false");
    lastFocusedElement.focus();
  }
};

const openProjectModal = (card, button) => {
  const title = card.querySelector("h3")?.textContent?.trim() || "Project details";
  const summary = card.querySelector(":scope > div:first-child")?.cloneNode(true);
  const stats = card.querySelector(":scope > .stats-grid")?.cloneNode(true);
  const details = card.querySelector(":scope > .project-details")?.cloneNode(true);
  const tags = card.querySelector(":scope > .tag-row")?.cloneNode(true);
  const actions = card.querySelector(":scope > .card-actions")?.cloneNode(true);

  lastFocusedElement = button;
  button.setAttribute("aria-expanded", "true");
  modalContent.innerHTML = "";

  const header = document.createElement("div");
  header.className = "project-modal-header";
  header.innerHTML = `<p class="eyebrow">${document.documentElement.lang === "ar" ? translations["Project Details"] : "Project Details"}</p><h2 id="project-modal-title">${title}</h2>`;
  modalContent.appendChild(header);

  [summary, stats, details, tags, actions].forEach((section) => {
    if (!section) {
      return;
    }

    section.hidden = false;
    section.style.maxHeight = "";
    section.classList.remove("project-details");
    modalContent.appendChild(section);
  });

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalDialog.focus();
};

accordionSections.forEach((section) => {
  const button = section.querySelector(".accordion-header");
  const panel = section.querySelector(".accordion-panel");

  if (!button || !panel) {
    return;
  }

  panel.hidden = true;
  panel.style.maxHeight = "0px";

  button.addEventListener("click", () => {
    const shouldOpen = button.getAttribute("aria-expanded") !== "true";
    setAccordionState(section, shouldOpen);
  });
});

document.querySelectorAll(".project-card, .community-card").forEach((card, index) => {
  const detailItems = Array.from(card.children).filter((child) =>
    detailSelectors.some((selector) => child.matches(selector))
  );

  if (!detailItems.length) {
    return;
  }

  card.classList.add("has-project-details");

  const details = document.createElement("div");
  const detailsId = `project-details-${index + 1}`;
  details.className = "project-details";
  details.id = detailsId;
  details.hidden = true;

  detailItems.forEach((item) => details.appendChild(item));

  const button = document.createElement("button");
  button.className = "show-more-btn";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", detailsId);
  button.innerHTML = '<span>Show more</span><span class="show-more-chevron" aria-hidden="true"></span>';

  const actions = card.querySelector(".card-actions");
  if (actions) {
    actions.after(button);
  } else {
    card.appendChild(button);
  }

  button.after(details);

  button.addEventListener("click", () => {
    openProjectModal(card, button);
  });
});

setLanguage(getPreferredLanguage(), false);

window.addEventListener("resize", () => {
  accordionSections.forEach((section) => {
    const panel = section.querySelector(".accordion-panel");

    if (panel && section.classList.contains("is-open")) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-modal-close]")) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeProjectModal();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableElements();
  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  if (!first || !last) {
    event.preventDefault();
    modalDialog.focus();
    return;
  }

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const openAccordionFromHash = () => {
  if (!window.location.hash) {
    return;
  }

  const target = document.querySelector(window.location.hash);

  if (target?.classList.contains("accordion-section")) {
    setAccordionState(target, true);
  }
};

window.addEventListener("hashchange", openAccordionFromHash);
openAccordionFromHash();

if (year) {
  year.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageOption);
  });
});

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
      document.body.classList.remove("nav-open");

      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (target?.classList.contains("accordion-section")) {
        setAccordionState(target, true);
      }
    });
  });
}
