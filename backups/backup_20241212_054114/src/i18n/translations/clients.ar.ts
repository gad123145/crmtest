export const clientsTranslations = {
  welcome: "مرحباً",
  addNew: "إضافة عميل جديد",
  addSuccess: "تم إضافة العميل بنجاح",
  addError: "خطأ في إضافة العميل",
  duplicateError: "لا يمكن إضافة العميل. تم العثور على {{count}} عميل (عملاء) مكرر",
  name: "الاسم",
  phone: "رقم الهاتف",
  email: "البريد الإلكتروني",
  facebook: "فيسبوك",
  country: "الدولة",
  city: "المدينة",
  project: "المشروع",
  budget: "الميزانية",
  salesPerson: "مندوب المبيعات",
  contactMethod: "طريقة التواصل",
  campaign: "الحملة",
  delete: "حذف",
  deleteSelected: "حذف المحدد ({{count}})",
  creator: "منشئ العميل",
  assignedTo: "معين إلى",
  roles: {
    admin: "مدير النظام",
    supervisor: "مشرف",
    sales: "مندوب مبيعات",
    employee: "موظف"
  },
  status: {
    new: "عميل جديد",
    potential: "عميل محتمل",
    interested: "مهتم",
    responded: "تم الرد",
    noResponse: "لم يتم الرد",
    scheduled: "موعد محدد",
    postMeeting: "بعد الاجتماع",
    whatsappContact: "تم التواصل واتساب",
    facebookContact: "تم التواصل ماسنجر",
    booked: "تم الحجز",
    cancelled: "ملغي",
    sold: "تم البيع",
    postponed: "مؤجل",
    resale: "إعادة بيع"
  },
  common: {
    unknown: "غير معروف",
    selectStatus: "اختر الحالة"
  },
  notifications: {
    statusUpdate: "تحديث حالة العميل",
    clientStatusUpdated: "تم تحديث حالة العميل",
    to: "إلى"
  },
  statusUpdateSuccess: "تم تحديث حالة العميل بنجاح",
  noClientsFound: "لم يتم العثور على عملاء",
  deleteSuccess: "تم حذف العميل بنجاح",
  exportSuccess: "تم تصدير العملاء بنجاح",
  assignSuccess: "تم تعيين العملاء بنجاح",
  unassignSuccess: "تم إلغاء تعيين العملاء بنجاح",
  exportAll: "تصدير الكل",
  exportSelected: "تصدير المحدد",
  assign: "تعيين",
  unassign: "إلغاء التعيين",
  importClients: {
    title: "استيراد العملاء",
    success: "تم استيراد {{count}} عميل بنجاح",
    partialSuccess: "تم استيراد {{imported}} عميل، تم تخطي {{duplicates}} عميل مكرر",
    allDuplicates: "تم تخطي جميع العملاء ({{count}}) حيث أنهم موجودون بالفعل بأرقام الهواتف: {{phone}}",
    duplicatesFound: "تم العثور على {{duplicates}} عميل موجود بالفعل بأرقام الهواتف: {{phone}}",
    noValidData: "لا توجد بيانات صالحة للاستيراد",
    error: "خطأ في استيراد العملاء",
    dropFiles: "قم بإسقاط الملفات هنا أو انقر للاختيار",
    maxSize: "الحد الأقصى لحجم الملف: 5 ميجابايت",
    supportedFormats: "الصيغ المدعومة: .xlsx, .xls, .csv",
    mapping: {
      title: "تخطيط الحقول",
      description: "قم بمطابقة الأعمدة من ملفك مع حقول النظام",
      sourceColumn: "اختر العمود المقابل",
      fields: {
        name: "الاسم",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        facebook: "فيسبوك",
        country: "الدولة",
        city: "المدينة",
        project: "المشروع",
        budget: "الميزانية",
        salesPerson: "مندوب المبيعات",
        contactMethod: "طريقة التواصل",
        campaign: "الحملة"
      },
      import: "استيراد",
      cancel: "إلغاء"
    }
  },
  search: "بحث",
  allUsers: "جميع المستخدمين",
  selectUser: "اختر المستخدم",
  showFavorites: "عرض المفضلة فقط",
  addedToFavorites: "تمت الإضافة إلى المفضلة",
  removedFromFavorites: "تمت الإزالة من المفضلة",
  insights: {
    aiAnalysis: "تحليل الذكاء الاصطناعي",
    purchaseProbability: "احتمالية الشراء",
    bestTime: "أفضل وقت للتواصل",
    recommendations: "التوصيات",
    nextSteps: "الخطوات التالية",
    loading: "جاري تحليل بيانات العميل...",
    analysisSuccess: "تم تحليل بيانات العميل بنجاح",
    analysisError: "حدث خطأ أثناء تحليل بيانات العميل"
  }
} as const;