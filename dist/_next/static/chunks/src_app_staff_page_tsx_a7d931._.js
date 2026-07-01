(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_staff_page_tsx_a7d931._.js", {

"[project]/src/app/staff/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$SalarySlipModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/SalarySlipModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$AddStaffModalLight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/AddStaffModalLight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$EditStaffModalLight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/EditStaffModalLight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$StaffDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/StaffDetailView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$PhotoViewerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/PhotoViewerModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$EditAdvanceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/EditAdvanceModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/pdfGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/excelGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Users$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) {export default as Users}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__UserPlus$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) {export default as UserPlus}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) {export default as User}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Calendar$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) {export default as Calendar}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) {export default as Clock}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) {export default as DollarSign}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript) {export default as CheckCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__XCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x-circle.js [app-client] (ecmascript) {export default as XCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) {export default as FileText}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) {export default as Search}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) {export default as ChevronLeft}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) {export default as ChevronRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Camera$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) {export default as Camera}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) {export default as MapPin}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) {export default as Download}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Edit2$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) {export default as Edit2}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Trash2$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) {export default as Trash2}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowUpRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) {export default as ArrowUpRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowDownRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) {export default as ArrowDownRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) {export default as ArrowRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$ManualDutyModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/ManualDutyModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$StaffPayrollDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/staff/components/StaffPayrollDetailModal.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature(), _s6 = __turbopack_refresh__.signature(), _s7 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const StaffManagement = ()=>{
    _s();
    const [activeTab, setActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('directory');
    const [stats, setStats] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        totalPersonnel: 0,
        todayAttendance: 0
    });
    const [payrollStats, setPayrollStats] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        totalBaseSalary: 0,
        salaryPaid: 0,
        pendingSalary: 0,
        totalAdvances: 0
    });
    const [month, setMonth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Date().getMonth());
    const [year, setYear] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Date().getFullYear());
    const [selectedDate, setSelectedDate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](()=>{
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    });
    const [isAddStaffOpen, setIsAddStaffOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isManualDutyOpen, setIsManualDutyOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [manualDutyDefaultStaff, setManualDutyDefaultStaff] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [manualDutyDefaultDate, setManualDutyDefaultDate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [manualDutyDefaultTimeIn, setManualDutyDefaultTimeIn] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isRecordAdvanceOpen, setIsRecordAdvanceOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [selectedPayroll, setSelectedPayroll] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [settlePayrollData, setSettlePayrollData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [detailModalPayroll, setDetailModalPayroll] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [refreshKey, setRefreshKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const triggerRefresh = ()=>setRefreshKey((prev)=>prev + 1);
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const searchVal = params.get('search') || params.get('name') || params.get('staff');
            if (searchVal) {
                setSearchQuery(searchVal);
            }
        }
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchStats = async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/admin/staff/dashboard-stats');
                setStats(res.data);
            } catch (err) {}
        };
        fetchStats();
    }, [
        refreshKey
    ]);
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').substring(0, 2).toUpperCase();
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex min-h-screen bg-[#F5F7FA]",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("main", {
                className: "flex-1 lg:ml-64 p-8 overflow-y-auto pb-20",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-blue-100 text-blue-600 p-2 rounded-xl",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Users$7d$__["Users"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                    className: "text-2xl font-black text-gray-900 tracking-tight",
                                                    children: "Staff Operations"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm text-gray-500 font-medium",
                                                    children: "Manage personnel, attendance and monthly payroll"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        onClick: ()=>setIsAddStaffOpen(true),
                                        className: "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__UserPlus$7d$__["UserPlus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            " Add Staff"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        onClick: ()=>{
                                            setManualDutyDefaultStaff(null);
                                            setManualDutyDefaultDate(null);
                                            setManualDutyDefaultTimeIn(null);
                                            setIsManualDutyOpen(true);
                                        },
                                        className: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            " Manual Duty"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        onClick: ()=>setIsRecordAdvanceOpen(true),
                                        className: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__["DollarSign"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            " Record Advance"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-sm transition-all",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__["Download"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("grid gap-6 mb-6", activeTab === 'salary' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2"),
                        children: activeTab !== 'salary' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Total Personnel"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-4xl font-black text-gray-900",
                                                    children: stats.totalPersonnel
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-gray-50 p-4 rounded-2xl group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Users$7d$__["Users"], {
                                                className: "w-8 h-8 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Today Attendance"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-4xl font-black text-green-600",
                                                    children: stats.todayAttendance
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-green-50 p-4 rounded-2xl group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                                className: "w-8 h-8 text-green-500"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Total Base Salary"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-4xl font-black text-gray-900",
                                                    children: [
                                                        "₹",
                                                        Math.round(payrollStats.totalBaseSalary).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-gray-50 p-4 rounded-2xl group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__["DollarSign"], {
                                                className: "w-8 h-8 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-red-500 uppercase tracking-widest mb-2",
                                                    children: "Total Advances"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-4xl font-black text-red-600",
                                                    children: [
                                                        "₹",
                                                        Math.round(payrollStats.totalAdvances || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-red-50 p-4 rounded-2xl group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowDownRight$7d$__["ArrowDownRight"], {
                                                className: "w-8 h-8 text-red-500"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-green-500 uppercase tracking-widest mb-2",
                                                    children: "Salary Paid"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-4xl font-black text-green-600",
                                                    children: [
                                                        "₹",
                                                        Math.round(payrollStats.salaryPaid).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-green-50 p-4 rounded-2xl group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__["CheckCircle"], {
                                                className: "w-8 h-8 text-green-500"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2",
                                                    children: "Pending Salary"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-4xl font-black text-yellow-600",
                                                    children: [
                                                        "₹",
                                                        Math.round(payrollStats.pendingSalary).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-yellow-50 p-4 rounded-2xl group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                                className: "w-8 h-8 text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bg-white rounded-2xl p-3 shadow-sm border border-gray-200 flex flex-col xl:flex-row justify-between items-stretch xl:items-center mb-6 gap-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex gap-2 overflow-x-auto no-scrollbar pb-1 xl:pb-0",
                                children: [
                                    {
                                        id: 'directory',
                                        label: 'Personnel',
                                        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Users$7d$__["Users"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 175,
                                            columnNumber: 60
                                        }, this)
                                    },
                                    {
                                        id: 'attendance',
                                        label: 'Attendance',
                                        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 176,
                                            columnNumber: 62
                                        }, this)
                                    },
                                    {
                                        id: 'leaves',
                                        label: 'Leaves',
                                        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Calendar$7d$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 177,
                                            columnNumber: 54
                                        }, this)
                                    },
                                    {
                                        id: 'advances',
                                        label: 'Advances',
                                        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__["DollarSign"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 178,
                                            columnNumber: 58
                                        }, this)
                                    },
                                    {
                                        id: 'salary',
                                        label: 'Payroll',
                                        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 179,
                                            columnNumber: 55
                                        }, this)
                                    }
                                ].map((tab)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shrink-0", activeTab === tab.id ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"),
                                        children: [
                                            tab.icon,
                                            tab.label
                                        ]
                                    }, tab.id, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-col sm:flex-row gap-4 items-stretch sm:items-center px-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "relative flex-1 sm:flex-initial",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__["Search"], {
                                                className: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                type: "text",
                                                placeholder: "Search Personnel...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    activeTab === 'attendance' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                onClick: ()=>{
                                                    const d = new Date(selectedDate);
                                                    d.setDate(d.getDate() - 1);
                                                    setSelectedDate(d.toISOString().split('T')[0]);
                                                },
                                                className: "p-1 hover:bg-gray-200 rounded-lg",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__["ChevronLeft"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 211,
                                                    columnNumber: 64
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                type: "date",
                                                value: selectedDate,
                                                onChange: (e)=>setSelectedDate(e.target.value),
                                                className: "bg-transparent text-sm font-bold text-gray-700 focus:outline-none cursor-pointer px-1"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                onClick: ()=>{
                                                    const d = new Date(selectedDate);
                                                    d.setDate(d.getDate() + 1);
                                                    setSelectedDate(d.toISOString().split('T')[0]);
                                                },
                                                className: "p-1 hover:bg-gray-200 rounded-lg",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__["ChevronRight"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 224,
                                                    columnNumber: 64
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                className: "p-1 hover:bg-gray-200 rounded-lg",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__["ChevronLeft"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 228,
                                                    columnNumber: 70
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                                value: month,
                                                onChange: (e)=>setMonth(Number(e.target.value)),
                                                className: "bg-transparent text-sm font-bold text-gray-700 focus:outline-none appearance-none px-2 cursor-pointer",
                                                children: Array.from({
                                                    length: 12
                                                }).map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                        value: i,
                                                        children: new Date(2000, i).toLocaleString('default', {
                                                            month: 'short'
                                                        }).toUpperCase()
                                                    }, i, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 230,
                                                        columnNumber: 57
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                                value: year,
                                                onChange: (e)=>setYear(Number(e.target.value)),
                                                className: "bg-transparent text-sm font-bold text-gray-700 focus:outline-none appearance-none pr-4 cursor-pointer",
                                                children: [
                                                    2024,
                                                    2025,
                                                    2026,
                                                    2027
                                                ].map((y)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                        value: y,
                                                        children: y
                                                    }, y, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 233,
                                                        columnNumber: 54
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                className: "p-1 hover:bg-gray-200 rounded-lg",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__["ChevronRight"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 235,
                                                    columnNumber: 70
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]",
                        children: [
                            activeTab === 'directory' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](StaffDirectoryTab, {
                                refreshKey: refreshKey,
                                triggerRefresh: triggerRefresh,
                                getInitials: getInitials,
                                searchQuery: searchQuery
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 243,
                                columnNumber: 41
                            }, this),
                            activeTab === 'attendance' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](AttendanceTrackerTab, {
                                refreshKey: refreshKey,
                                triggerRefresh: triggerRefresh,
                                selectedDate: selectedDate,
                                getInitials: getInitials,
                                searchQuery: searchQuery
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 244,
                                columnNumber: 42
                            }, this),
                            activeTab === 'leaves' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LeaveRequestsTab, {
                                refreshKey: refreshKey,
                                triggerRefresh: triggerRefresh,
                                month: month,
                                year: year,
                                getInitials: getInitials,
                                searchQuery: searchQuery
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 245,
                                columnNumber: 38
                            }, this),
                            activeTab === 'advances' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](AdvancesTab, {
                                refreshKey: refreshKey,
                                month: month,
                                year: year,
                                getInitials: getInitials,
                                triggerRefresh: triggerRefresh,
                                searchQuery: searchQuery
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 246,
                                columnNumber: 40
                            }, this),
                            activeTab === 'salary' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](SalaryProcessingTab, {
                                refreshKey: refreshKey,
                                month: month,
                                year: year,
                                getInitials: getInitials,
                                setPayrollStats: setPayrollStats,
                                setSelectedPayroll: setSelectedPayroll,
                                setSettlePayrollData: setSettlePayrollData,
                                setDetailModalPayroll: setDetailModalPayroll,
                                searchQuery: searchQuery
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 247,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    isAddStaffOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$AddStaffModalLight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setIsAddStaffOpen(false),
                        onSuccess: triggerRefresh
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 251,
                        columnNumber: 28
                    }, this),
                    isManualDutyOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$ManualDutyModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isManualDutyOpen,
                        onClose: ()=>setIsManualDutyOpen(false),
                        defaultStaffId: manualDutyDefaultStaff,
                        defaultDate: manualDutyDefaultDate,
                        defaultTimeIn: manualDutyDefaultTimeIn,
                        onSubmit: async (data)=>{
                            try {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff/manual-duty', data);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Attendance updated successfully');
                                triggerRefresh();
                                setIsManualDutyOpen(false);
                            } catch (err) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to update attendance');
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    isRecordAdvanceOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](RecordAdvanceModal, {
                        onClose: ()=>setIsRecordAdvanceOpen(false),
                        onSuccess: triggerRefresh
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 271,
                        columnNumber: 33
                    }, this),
                    settlePayrollData && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](SettlePaymentModalLight, {
                        payroll: settlePayrollData,
                        onClose: ()=>setSettlePayrollData(null),
                        onSuccess: ()=>{
                            setSettlePayrollData(null);
                            triggerRefresh();
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 272,
                        columnNumber: 31
                    }, this),
                    selectedPayroll && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$SalarySlipModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        payroll: selectedPayroll,
                        onClose: ()=>setSelectedPayroll(null),
                        onProcess: async (staffId)=>{
                            try {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff/salary/process', {
                                    staffId,
                                    month,
                                    year
                                });
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Salary Processed & Generated!');
                                setSelectedPayroll(null);
                                triggerRefresh();
                            } catch (err) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to process salary');
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$StaffPayrollDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: !!detailModalPayroll,
                        onClose: ()=>setDetailModalPayroll(null),
                        staff: detailModalPayroll?.staff,
                        payroll: detailModalPayroll,
                        month: month,
                        year: year,
                        onSettle: (id)=>{
                            setSettlePayrollData(detailModalPayroll);
                        }
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_s(StaffManagement, "RaNiClaHQ5w8TUOTJTI+SKDi8pw=");
_c = StaffManagement;
// -----------------------------------------------------------------------------
// 1. Staff Directory Tab
// -----------------------------------------------------------------------------
const StaffDirectoryTab = ({ refreshKey, triggerRefresh, getInitials, searchQuery })=>{
    _s1();
    const [staff, setStaff] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [editStaffData, setEditStaffData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [detailStaffData, setDetailStaffData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchStaff = async ()=>{
            try {
                setLoading(true);
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/admin/staff');
                setStaff(res.data);
            } catch (err) {} finally{
                setLoading(false);
            }
        };
        fetchStaff();
    }, [
        refreshKey
    ]);
    const deleteStaff = async (id)=>{
        if (!window.confirm('Delete this staff member permanently?')) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/admin/staff/${id}`);
            setStaff(staff.filter((s)=>s._id !== id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Staff deleted successfully');
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to delete staff');
        }
    };
    if (loading) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "p-12 text-center text-gray-500 font-bold",
        children: "Loading Personnel..."
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 336,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                className: "w-full text-left text-sm whitespace-nowrap",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                        className: "text-gray-400 font-bold text-xs uppercase tracking-widest border-b border-gray-100",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Personnel"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 343,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Designation"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 344,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 345,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Join Date"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 346,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 347,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5 text-right",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 348,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 342,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 341,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                        className: "divide-y divide-gray-50",
                        children: [
                            staff.filter((s)=>s.name?.toLowerCase().includes((searchQuery || '').toLowerCase()) || s.username?.toLowerCase().includes((searchQuery || '').toLowerCase())).map((s)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    className: "hover:bg-gray-50/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm",
                                                        children: getInitials(s.name)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold text-gray-900",
                                                                children: s.name
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 360,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-xs text-gray-500 font-medium",
                                                                children: [
                                                                    "@",
                                                                    s.username
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 361,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 354,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                                                children: "Staff"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 365,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold text-gray-700",
                                                    children: s.mobile || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 369,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-gray-400 font-medium",
                                                    children: "Regular Duty"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 370,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 368,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 font-bold text-gray-700",
                                            children: new Date(s.createdAt).toLocaleDateString('en-GB')
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 372,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-2 h-2 rounded-full bg-green-500"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "font-bold text-green-600 text-xs tracking-wider",
                                                        children: "ACTIVE"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 375,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 text-right",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex justify-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>setDetailStaffData(s),
                                                        className: "p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors",
                                                        title: "View Details",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__["User"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 383,
                                                            columnNumber: 175
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 383,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>setEditStaffData(s),
                                                        className: "p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",
                                                        title: "Edit",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Edit2$7d$__["Edit2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 384,
                                                            columnNumber: 162
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>deleteStaff(s._id),
                                                        className: "p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors",
                                                        title: "Delete",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Trash2$7d$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 385,
                                                            columnNumber: 160
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 385,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 382,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 381,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, s._id, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 353,
                                    columnNumber: 11
                                }, this)),
                            staff.length === 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                    colSpan: 6,
                                    className: "p-12 text-center text-gray-400 font-medium",
                                    children: "No personnel found."
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 390,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 390,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 351,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 340,
                columnNumber: 5
            }, this),
            editStaffData && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$EditStaffModalLight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                staff: editStaffData,
                onClose: ()=>setEditStaffData(null),
                onSuccess: triggerRefresh
            }, void 0, false, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 393,
                columnNumber: 27
            }, this),
            detailStaffData && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$StaffDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                staff: detailStaffData,
                onClose: ()=>setDetailStaffData(null),
                onRefresh: triggerRefresh
            }, void 0, false, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 394,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true);
};
_s1(StaffDirectoryTab, "paO3FKdT2JVZtYe5V7EluVTuH/Q=");
_c1 = StaffDirectoryTab;
// -----------------------------------------------------------------------------
// 2. Attendance Tracker Tab
// -----------------------------------------------------------------------------
const AttendanceTrackerTab = ({ refreshKey, triggerRefresh, selectedDate, getInitials, searchQuery })=>{
    _s2();
    const [attendance, setAttendance] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [staffList, setStaffList] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [photoViewerUrl, setPhotoViewerUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchData = async ()=>{
            try {
                if (!selectedDate) return;
                const [y, m] = selectedDate.split('-');
                const [attRes, staffRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/admin/staff/attendance?month=${parseInt(m, 10)}&year=${y}`),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/admin/staff')
                ]);
                setAttendance(attRes.data);
                setStaffList(staffRes.data);
            } catch (err) {}
        };
        fetchData();
    }, [
        selectedDate,
        refreshKey
    ]);
    const deleteAttendance = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/admin/staff/attendance/${id}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Attendance record deleted');
            setAttendance(attendance.filter((a)=>a._id !== id));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to delete attendance');
        }
    };
    const markOut = async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/admin/staff/attendance/${id}/mark-out`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Staff marked out successfully');
            triggerRefresh();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to mark out');
        }
    };
    const filteredAttendance = attendance.filter((a)=>{
        if (!a.date) return false;
        const dateStr = new Date(a.date).toISOString().split('T')[0];
        return dateStr === selectedDate;
    });
    const mergedData = staffList.map((staff)=>{
        const att = filteredAttendance.find((a)=>a.staff?._id === staff._id || a.staff === staff._id);
        return {
            staff,
            attendance: att || null
        };
    });
    const filteredMerged = mergedData.filter(({ staff, attendance })=>{
        if (!attendance) return false;
        return staff.name?.toLowerCase().includes((searchQuery || '').toLowerCase());
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                className: "font-bold text-gray-900 text-lg tracking-tight",
                                children: "Daily Attendance Tracker"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-xs text-gray-500 font-medium mt-0.5",
                                children: [
                                    "Date: ",
                                    new Date(selectedDate).toLocaleDateString('en-GB')
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportAttendanceToExcel"](filteredMerged, selectedDate),
                        className: "bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__["Download"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            " EXPORT EXCEL"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                className: "w-full text-left text-sm whitespace-nowrap",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                        className: "text-gray-400 font-bold text-xs uppercase tracking-widest border-b border-gray-100",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Staff Member"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "In / Out Times"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Evidence (In / Out)"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5 text-right",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                        className: "divide-y divide-gray-50",
                        children: [
                            filteredMerged.map(({ staff, attendance: a })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    className: "hover:bg-gray-50/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold text-gray-900",
                                                    children: new Date(selectedDate).toLocaleDateString('en-GB')
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-gray-500 font-medium",
                                                    children: new Date(selectedDate).toLocaleDateString('en-US', {
                                                        weekday: 'long'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 486,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-black text-sm",
                                                        children: getInitials(staff.name || 'S M')
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 490,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold text-gray-900",
                                                                children: staff.name
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 494,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-xs text-gray-500 font-medium uppercase tracking-wider",
                                                                children: staff.designation || 'USER: SYSTEM'
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 495,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 493,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: a && (a.status === 'present' || a.status === 'half-day') ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-5 h-5 rounded-md bg-green-50 flex items-center justify-center",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowUpRight$7d$__["ArrowUpRight"], {
                                                                    className: "w-3.5 h-3.5 text-green-600"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                                    lineNumber: 504,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 503,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "font-bold text-sm text-gray-800",
                                                                children: a.punchIn?.time ? new Date(a.punchIn.time).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                }) : '--:--'
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 506,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 502,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowDownRight$7d$__["ArrowDownRight"], {
                                                                    className: "w-3.5 h-3.5 text-orange-600"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                                    lineNumber: 510,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 509,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "font-bold text-sm text-gray-800",
                                                                children: a.punchOut?.time ? new Date(a.punchOut.time).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                }) : 'ACTIVE SHIFT'
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 512,
                                                                columnNumber: 23
                                                            }, this),
                                                            !a.punchOut?.time && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                                onClick: ()=>markOut(a._id),
                                                                className: "text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 px-1.5 py-0.5 rounded ml-1 transition-colors",
                                                                children: "MARK OUT"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 513,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 508,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "bg-gray-50 text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider",
                                                children: "Not Punched In"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 517,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: a && (a.status === 'present' || a.status === 'half-day') ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "relative w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shadow-sm border border-gray-200 cursor-pointer",
                                                        title: "Punch In Photo",
                                                        onClick: ()=>a.punchIn?.evidence && setPhotoViewerUrl(a.punchIn.evidence),
                                                        children: [
                                                            a.punchIn?.evidence ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                src: a.punchIn.evidence,
                                                                alt: "In",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 526,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Camera$7d$__["Camera"], {
                                                                className: "w-4 h-4 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 528,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "absolute top-0 right-0 bg-green-500 w-2.5 h-2.5 rounded-full border border-white shadow-sm"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 530,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 524,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "relative w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shadow-sm border border-gray-200 opacity-90 cursor-pointer",
                                                        title: "Punch Out Photo",
                                                        onClick: ()=>a.punchOut?.evidence && setPhotoViewerUrl(a.punchOut.evidence),
                                                        children: [
                                                            a.punchOut?.evidence ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                src: a.punchOut.evidence,
                                                                alt: "Out",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 536,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Camera$7d$__["Camera"], {
                                                                className: "w-4 h-4 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 538,
                                                                columnNumber: 25
                                                            }, this),
                                                            a.punchOut?.time && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "absolute top-0 right-0 bg-orange-500 w-2.5 h-2.5 rounded-full border border-white shadow-sm"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 540,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 534,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "w-10 h-10 rounded-full bg-gray-50 border border-gray-200 border-dashed flex items-center justify-center",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Camera$7d$__["Camera"], {
                                                    className: "w-4 h-4 text-gray-300"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 545,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 544,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: a && (a.status === 'present' || a.status === 'half-day') ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-start gap-3 max-w-[200px]",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "p-1.5 rounded-lg bg-blue-50 text-blue-600 mt-0.5",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 553,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 552,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold text-sm text-gray-900 truncate",
                                                                children: a.punchIn?.location?.lat ? 'Location Tracked' : 'Location unknown'
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this),
                                                            a.punchIn?.location?.lat && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                href: `https://maps.google.com/?q=${a.punchIn.location.lat},${a.punchIn.location.lng}`,
                                                                target: "_blank",
                                                                className: "text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest mt-0.5 block",
                                                                children: "OPEN MAP →"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 560,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-start gap-3 opacity-60",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "p-1.5 rounded-lg bg-gray-50 text-gray-400 mt-0.5",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 569,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 568,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "font-bold text-sm text-gray-400 mt-1",
                                                        children: "Location unknown"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 text-right",
                                            children: a ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                onClick: ()=>deleteAttendance(a._id),
                                                className: "w-10 h-10 inline-flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-colors shadow-sm",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Trash2$7d$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 578,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 577,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "w-10 h-10 inline-flex items-center justify-center bg-gray-50 border border-gray-100 rounded-full",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Trash2$7d$__["Trash2"], {
                                                    className: "w-4 h-4 text-gray-300"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 582,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 581,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, staff._id, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this)),
                            filteredMerged.length === 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                    colSpan: 6,
                                    className: "px-6 py-12 text-center text-gray-400 font-medium bg-gray-50/50",
                                    children: "No attendance records found for this date."
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            photoViewerUrl && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$PhotoViewerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                photoUrl: photoViewerUrl,
                onClose: ()=>setPhotoViewerUrl(null)
            }, void 0, false, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 597,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 460,
        columnNumber: 5
    }, this);
};
_s2(AttendanceTrackerTab, "A8od0h4tu4QFbxhB3rakU9bEqTE=");
_c2 = AttendanceTrackerTab;
// -----------------------------------------------------------------------------
// 3. Leave Requests Tab
// -----------------------------------------------------------------------------
const LeaveRequestsTab = ({ refreshKey, triggerRefresh, month, year, getInitials, searchQuery })=>{
    _s3();
    const [leaves, setLeaves] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchLeaves = async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/admin/staff/leaves');
                setLeaves(res.data);
            } catch (err) {}
        };
        fetchLeaves();
    }, [
        month,
        year,
        refreshKey
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-center gap-2 mb-6",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-2 h-6 bg-yellow-400 rounded-full"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        className: "text-lg font-black text-gray-900 tracking-tight uppercase",
                        children: "Pending Leave Requests"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 620,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                className: "w-full text-left text-sm whitespace-nowrap",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                        className: "text-gray-400 font-bold text-xs uppercase tracking-widest border-b border-gray-100",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Staff Member"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Leave Dates"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Applied On"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5 text-right",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 631,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                        className: "divide-y divide-gray-50",
                        children: [
                            leaves.filter((l)=>l.staff?.name?.toLowerCase().includes((searchQuery || '').toLowerCase())).map((l)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    className: "hover:bg-gray-50/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-black text-sm",
                                                        children: getInitials(l.staff?.name || 'SM')
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 639,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold text-gray-900",
                                                                children: l.staff?.name
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 643,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-xs text-gray-500 font-medium",
                                                                children: l.type
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 644,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 642,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 638,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 637,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold text-gray-700",
                                                    children: [
                                                        l.startDate,
                                                        " to ",
                                                        l.endDate
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 649,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-gray-400 font-medium truncate w-48",
                                                    children: l.reason
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 650,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 font-bold text-gray-700",
                                            children: new Date(l.createdAt).toLocaleDateString('en-GB')
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 652,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 text-right",
                                            children: l.status === 'Pending' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex justify-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: async ()=>{
                                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/admin/staff/leaves/${l._id}`, {
                                                                status: 'Approved'
                                                            });
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Approved');
                                                            triggerRefresh();
                                                        },
                                                        className: "px-4 py-1.5 rounded-lg bg-green-50 text-green-700 font-bold text-xs hover:bg-green-100 transition-colors",
                                                        children: "APPROVE"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 658,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: async ()=>{
                                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/admin/staff/leaves/${l._id}`, {
                                                                status: 'Rejected'
                                                            });
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Rejected');
                                                            triggerRefresh();
                                                        },
                                                        className: "px-4 py-1.5 rounded-lg bg-red-50 text-red-700 font-bold text-xs hover:bg-red-100 transition-colors",
                                                        children: "REJECT"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 663,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("px-3 py-1 rounded-full text-xs font-bold uppercase", l.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'),
                                                children: l.status
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 655,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, l._id, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 636,
                                    columnNumber: 13
                                }, this)),
                            leaves.length === 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                    colSpan: 4,
                                    className: "py-20 text-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Calendar$7d$__["Calendar"], {
                                            className: "w-12 h-12 text-gray-200 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 677,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-400 font-bold",
                                            children: "No pending leave requests at the moment."
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 678,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 676,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 675,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 625,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 619,
        columnNumber: 5
    }, this);
};
_s3(LeaveRequestsTab, "Nb3O1EPWW5Mp4lBVOE9AXM3hFAU=");
_c3 = LeaveRequestsTab;
// -----------------------------------------------------------------------------
// 4. Advances Tab
// -----------------------------------------------------------------------------
const AdvancesTab = ({ refreshKey, month, year, getInitials, triggerRefresh, searchQuery })=>{
    _s4();
    const [advances, setAdvances] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [editAdvanceData, setEditAdvanceData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const totalAdvance = advances.reduce((sum, a)=>sum + (a.amount || 0), 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchAdvances = async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/admin/staff/advances?month=${month}&year=${year}`);
                setAdvances(res.data);
            } catch (err) {}
        };
        fetchAdvances();
    }, [
        month,
        year,
        refreshKey
    ]);
    const deleteAdvance = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/admin/staff/advances/${id}`);
            setAdvances(advances.filter((a)=>a._id !== id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Advance record deleted');
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to delete advance');
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "bg-red-50 border-b border-red-100 p-6 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-xs font-bold text-red-600 uppercase tracking-widest mb-1",
                                children: "Total Advances Given"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-3xl font-black text-red-700",
                                children: [
                                    "₹",
                                    totalAdvance.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-xs font-medium text-red-500 mt-1",
                                children: [
                                    "Selected Period: ",
                                    new Date(year, month).toLocaleString('default', {
                                        month: 'long'
                                    }),
                                    " ",
                                    year
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 721,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "bg-red-100 p-4 rounded-full",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__["DollarSign"], {
                            className: "w-8 h-8 text-red-500"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 724,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 717,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "p-6 border-b border-gray-100 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "font-bold text-gray-900 text-lg tracking-tight",
                        children: "Advance Payment Records"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 729,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-sm font-bold text-gray-400",
                        children: [
                            advances.length,
                            " Records found"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 728,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                className: "w-full text-left text-sm whitespace-nowrap",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                        className: "text-gray-400 font-bold text-xs uppercase tracking-widest border-b border-gray-100",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Staff Member"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 737,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 738,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Remark"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 739,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5 text-right",
                                    children: "Action"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 740,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 734,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                        className: "divide-y divide-gray-50",
                        children: [
                            advances.filter((a)=>a.staff?.name?.toLowerCase().includes((searchQuery || '').toLowerCase())).map((a)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    className: "hover:bg-gray-50/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm",
                                                        children: getInitials(a.staff?.name || 'SM')
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 748,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900",
                                                            children: a.staff?.name
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 752,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 751,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 747,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 font-bold text-gray-700",
                                            children: new Date(a.date).toLocaleDateString('en-GB')
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 font-black text-red-600",
                                            children: [
                                                "₹",
                                                a.amount.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 text-gray-500 font-medium",
                                            children: a.description || '-'
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 758,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 text-right",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex justify-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>setEditAdvanceData(a),
                                                        className: "p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Edit2$7d$__["Edit2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 761,
                                                            columnNumber: 153
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 761,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: ()=>deleteAdvance(a._id),
                                                        className: "p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Trash2$7d$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                                            lineNumber: 762,
                                                            columnNumber: 149
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 760,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 759,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, a._id, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 745,
                                    columnNumber: 13
                                }, this)),
                            advances.length === 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                    colSpan: 5,
                                    className: "p-12 text-center text-gray-400 font-medium",
                                    children: "No advances found for this month."
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 767,
                                    columnNumber: 41
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 767,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 733,
                columnNumber: 7
            }, this),
            editAdvanceData && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$staff$2f$components$2f$EditAdvanceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                advance: editAdvanceData,
                onClose: ()=>setEditAdvanceData(null),
                onRefresh: triggerRefresh
            }, void 0, false, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 770,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 716,
        columnNumber: 5
    }, this);
};
_s4(AdvancesTab, "t8nfTP7jDBksDYEa4R4AK3DtwC4=");
_c4 = AdvancesTab;
// -----------------------------------------------------------------------------
// 5. Payroll Tab
// -----------------------------------------------------------------------------
const SalaryProcessingTab = ({ refreshKey, month, year, getInitials, setPayrollStats, setSelectedPayroll, setSettlePayrollData, setDetailModalPayroll, searchQuery })=>{
    _s5();
    const [payrollData, setPayrollData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const fetchPayroll = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/admin/staff/payroll-data?month=${month}&year=${year}`);
            setPayrollData(res.data.payments);
            setPayrollStats(res.data.stats);
        } catch (err) {}
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        fetchPayroll();
    }, [
        month,
        year,
        refreshKey
    ]);
    const processSalary = async (staffId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff/salary/process', {
                staffId,
                month,
                year
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Salary Processed & Generated!');
            fetchPayroll();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to process salary');
        }
    };
    const generateBulkPayroll = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff/salary/bulk-process', {
                month,
                year
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Bulk Payroll Generated Successfully!');
            fetchPayroll();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to generate bulk payroll');
        }
    };
    const downloadBulkSlips = ()=>{
        if (payrollData.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('No payroll records found. Please generate payroll first.');
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Generating Bulk Salary Slips PDF...');
        try {
            const doc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBulkSalarySlipsPDF"](payrollData, month, year);
            doc.save(`Bulk_Salary_Slips_${month + 1}_${year}.pdf`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Bulk PDF Downloaded!');
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to generate bulk slips');
        }
    };
    const filteredPayroll = payrollData.filter((p)=>p.staff?.name?.toLowerCase().includes((searchQuery || '').toLowerCase()));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "p-6 border-b border-gray-100 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "font-bold text-gray-900 text-lg tracking-tight",
                        children: "Payroll Records"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: generateBulkPayroll,
                                className: "bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 836,
                                        columnNumber: 13
                                    }, this),
                                    " CALCULATE PAYROLL"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: downloadBulkSlips,
                                className: "bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__["Download"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this),
                                    " BULK PDF SLIPS"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$excelGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportPayrollToExcel"](filteredPayroll, month, year),
                                className: "bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md flex items-center gap-2 hover:bg-blue-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__["Download"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                        lineNumber: 842,
                                        columnNumber: 13
                                    }, this),
                                    " EXPORT EXCEL"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 841,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 832,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                className: "w-full text-left text-sm whitespace-nowrap",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                        className: "text-gray-400 font-bold text-xs uppercase tracking-widest border-b border-gray-100",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Staff Member"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 850,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Attendance"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 851,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Base Salary"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 852,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Advances"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 853,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Total Salary"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 854,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 855,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                    className: "px-6 py-5 text-right",
                                    children: "Action"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 856,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 849,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 848,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                        className: "divide-y divide-gray-50",
                        children: [
                            filteredPayroll.map((p)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    className: "hover:bg-gray-50/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm",
                                                        children: getInitials(p.staff?.name || 'SM')
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 864,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold text-gray-900",
                                                                children: p.staff?.name
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 868,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-[10px] text-gray-500 font-black tracking-widest uppercase",
                                                                children: "Specialist"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 869,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 867,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 863,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 862,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-black text-green-600 text-sm",
                                                                children: [
                                                                    p.presentDays || 0,
                                                                    " PRES"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 876,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-[9px] font-black tracking-widest text-green-600 uppercase",
                                                                children: "PRESENT"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 877,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 875,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "font-bold text-gray-700 text-sm",
                                                                children: [
                                                                    "01/",
                                                                    String(month + 1).padStart(2, '0'),
                                                                    "/",
                                                                    String(year).slice(-2),
                                                                    " - 30/",
                                                                    String(month + 1).padStart(2, '0'),
                                                                    "/",
                                                                    String(year).slice(-2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 880,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-[9px] text-gray-400 font-black tracking-widest uppercase mt-0.5",
                                                                children: "Month Cycle"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                                lineNumber: 881,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 879,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 874,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 873,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 font-black text-gray-800",
                                            children: [
                                                "₹",
                                                Math.round(p.basicSalary || 0).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 885,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold text-red-600",
                                                    children: [
                                                        "₹",
                                                        Math.round(p.advances || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 887,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] text-gray-400 font-black tracking-widest uppercase",
                                                    children: "Monthly Advance"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 888,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 886,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-black text-gray-900 text-lg",
                                                    children: [
                                                        "₹",
                                                        Math.round((p.earnedSalary || 0) + (p.allowances || 0) - (p.advances || 0)).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 891,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] text-yellow-600 font-black tracking-widest uppercase",
                                                    children: "Net Payable"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 892,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 890,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("px-3 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase", p.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'),
                                                children: [
                                                    "• ",
                                                    p.status
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 895,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 894,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: "px-6 py-4 text-right",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center justify-end gap-2",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    onClick: ()=>setDetailModalPayroll(p),
                                                    className: "w-8 h-8 rounded-xl border border-yellow-200 text-yellow-600 flex items-center justify-center hover:bg-yellow-50 transition-colors shadow-sm",
                                                    title: "Details",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowRight$7d$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/page.tsx>",
                                                        lineNumber: 902,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                                    lineNumber: 901,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/page.tsx>",
                                                lineNumber: 900,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 899,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, p._id, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 861,
                                    columnNumber: 13
                                }, this)),
                            payrollData.length === 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                    colSpan: 7,
                                    className: "p-12 text-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-gray-400 font-bold mb-4",
                                            children: "No payroll records generated for this month."
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 910,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                            className: "text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100",
                                            onClick: generateBulkPayroll,
                                            children: "Generate Payroll Records"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 911,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 909,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 908,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/page.tsx>",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/page.tsx>",
                lineNumber: 847,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 831,
        columnNumber: 5
    }, this);
};
_s5(SalaryProcessingTab, "09TAMZynifeBDzD069GypcIBtq8=");
_c5 = SalaryProcessingTab;
// -----------------------------------------------------------------------------
// Modals
// -----------------------------------------------------------------------------
const SettlePaymentModalLight = ({ payroll, onClose, onSuccess })=>{
    _s6();
    const [bonus, setBonus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [deduction, setDeduction] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const initialAmount = payroll.amount || 0;
    const finalAmount = Math.max(0, initialAmount + Number(bonus || 0) - Number(deduction || 0));
    const handleSettle = async ()=>{
        try {
            setIsSubmitting(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff/salary/settle', {
                staffId: payroll.staff._id,
                month: payroll.month,
                year: payroll.year,
                bonus: Number(bonus || 0),
                deduction: Number(deduction || 0)
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Payment Settled Successfully!');
            onSuccess();
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to settle payment');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-3xl w-full max-w-md shadow-2xl p-8 border border-gray-100 relative overflow-hidden",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "absolute top-0 left-0 w-full h-1 bg-yellow-400"
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/page.tsx>",
                    lineNumber: 948,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-xl font-black text-gray-900 tracking-tight",
                            children: "Settle Final Payment"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 950,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: onClose,
                            className: "p-2 rounded-full hover:bg-gray-100 transition-colors",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__XCircle$7d$__["XCircle"], {
                                className: "w-6 h-6 text-gray-400 hover:text-gray-600"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 952,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 951,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/page.tsx>",
                    lineNumber: 949,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "bg-gray-50 rounded-2xl p-4 border border-gray-200 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest",
                                    children: "Net Payable"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 958,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-lg font-black text-gray-900",
                                    children: [
                                        "₹",
                                        initialAmount.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 959,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 957,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                            className: "text-[10px] font-black text-green-600 uppercase tracking-widest block mb-2",
                                            children: "Bonus (+)"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 964,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                            type: "number",
                                            className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-green-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500",
                                            value: bonus,
                                            onChange: (e)=>setBonus(e.target.value),
                                            placeholder: "0"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 965,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 963,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                            className: "text-[10px] font-black text-red-600 uppercase tracking-widest block mb-2",
                                            children: "Deduction (-)"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 968,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                            type: "number",
                                            className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-red-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500",
                                            value: deduction,
                                            onChange: (e)=>setDeduction(e.target.value),
                                            placeholder: "0"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 969,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 967,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 962,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "bg-yellow-50 rounded-2xl p-5 border border-yellow-200 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-sm font-black text-yellow-700 uppercase tracking-widest",
                                    children: "Final Amount"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 974,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-2xl font-black text-yellow-600",
                                    children: [
                                        "₹",
                                        finalAmount.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 975,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 973,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: handleSettle,
                            disabled: isSubmitting,
                            className: "w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black tracking-widest uppercase text-sm py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2",
                            children: isSubmitting ? 'Processing...' : 'Mark as Paid'
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 978,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/page.tsx>",
                    lineNumber: 956,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/page.tsx>",
            lineNumber: 947,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 946,
        columnNumber: 7
    }, this);
};
_s6(SettlePaymentModalLight, "t9w5JQhfacEotPXvEf3ezsDca0o=");
_c6 = SettlePaymentModalLight;
const RecordAdvanceModal = ({ onClose, onSuccess })=>{
    _s7();
    const [staffList, setStaffList] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [form, setForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        staffId: '',
        amount: '',
        date: '',
        description: ''
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/admin/staff').then((res)=>{
            setStaffList(res.data);
            if (res.data.length > 0) setForm((f)=>({
                    ...f,
                    staffId: res.data[0]._id
                }));
        });
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff/advance', form);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Advance Recorded');
            onSuccess?.();
            onClose();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to record advance');
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-3xl w-full max-w-md shadow-2xl p-8 border border-gray-100",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "text-xl font-black text-gray-900",
                            children: "Record Salary Advance"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1014,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: onClose,
                            className: "p-2 rounded-full hover:bg-gray-100",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__XCircle$7d$__["XCircle"], {
                                className: "w-6 h-6 text-gray-400"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/page.tsx>",
                                lineNumber: 1015,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1015,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/page.tsx>",
                    lineNumber: 1013,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2",
                                    children: "Select Staff"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1018,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    value: form.staffId,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            staffId: e.target.value
                                        }),
                                    children: staffList.map((s)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                            value: s._id,
                                            children: s.name
                                        }, s._id, false, {
                                            fileName: "<[project]/src/app/staff/page.tsx>",
                                            lineNumber: 1020,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1019,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1018,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2",
                                    children: "Advance Amount (₹)"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1023,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "number",
                                    required: true,
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-2xl font-black text-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    value: form.amount,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            amount: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1023,
                                    columnNumber: 130
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1023,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2",
                                    children: "Advance Date"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1024,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "date",
                                    required: true,
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    value: form.date,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            date: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1024,
                                    columnNumber: 124
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1024,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2",
                                    children: "Reason / Remark"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1025,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "text",
                                    required: true,
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    value: form.description,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            description: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/page.tsx>",
                                    lineNumber: 1025,
                                    columnNumber: 127
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1025,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg mt-4 transition-all",
                            children: "Record Advance"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/page.tsx>",
                            lineNumber: 1026,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/page.tsx>",
                    lineNumber: 1017,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/page.tsx>",
            lineNumber: 1012,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/page.tsx>",
        lineNumber: 1011,
        columnNumber: 5
    }, this);
};
_s7(RecordAdvanceModal, "qgt5G6FJ2K6iPlTfY/DbqXgW0BE=");
_c7 = RecordAdvanceModal;
const __TURBOPACK__default__export__ = StaffManagement;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_refresh__.register(_c, "StaffManagement");
__turbopack_refresh__.register(_c1, "StaffDirectoryTab");
__turbopack_refresh__.register(_c2, "AttendanceTrackerTab");
__turbopack_refresh__.register(_c3, "LeaveRequestsTab");
__turbopack_refresh__.register(_c4, "AdvancesTab");
__turbopack_refresh__.register(_c5, "SalaryProcessingTab");
__turbopack_refresh__.register(_c6, "SettlePaymentModalLight");
__turbopack_refresh__.register(_c7, "RecordAdvanceModal");

})()),
}]);

//# sourceMappingURL=src_app_staff_page_tsx_a7d931._.js.map