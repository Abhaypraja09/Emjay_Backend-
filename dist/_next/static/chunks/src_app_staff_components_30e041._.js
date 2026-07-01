(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_staff_components_30e041._.js", {

"[project]/src/app/staff/components/SalarySlipModal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SalarySlipModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) {export default as Download}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) {export default as FileText}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle2$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check-circle-2.js [app-client] (ecmascript) {export default as CheckCircle2}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Info$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) {export default as Info}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Camera$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) {export default as Camera}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/pdfGenerator.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
function SalarySlipModal({ payroll, onClose, onProcess }) {
    _s();
    const [attendance, setAttendance] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    // Parse the month and year from payroll
    const month = payroll.month;
    const year = payroll.year;
    const totalDays = new Date(year, month + 1, 0).getDate();
    const getInitials = (name)=>name?.split(' ').map((n)=>n[0]).join('').substring(0, 2).toUpperCase() || 'SM';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchAttendance = async ()=>{
            try {
                setLoading(true);
                // The API returns all attendance for the month, we filter by staffId
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/admin/staff/attendance?month=${month + 1}&year=${year}`);
                const staffAttendance = res.data.filter((a)=>a.staff?._id === payroll.staff?._id);
                setAttendance(staffAttendance);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to load attendance details');
            } finally{
                setLoading(false);
            }
        };
        fetchAttendance();
    }, [
        month,
        year,
        payroll.staff?._id
    ]);
    const daysPresent = payroll.presentDays || 0;
    const paidLeaves = payroll.paidLeaves || 0;
    const earnedSalary = payroll.earnedSalary || 0;
    const totalBaseSalary = payroll.basicSalary || 0;
    const perDay = totalBaseSalary / totalDays;
    // Placeholder calculations based on screenshot
    const leaveCarryForward = 16;
    const leaveUsed = 39;
    const leavePool = 4;
    const unpaidAbsentDays = totalDays - daysPresent - paidLeaves; // Simplistic
    const unpaidDeduction = unpaidAbsentDays > 0 ? unpaidAbsentDays * perDay : 0;
    const handleDownload = ()=>{
        if (payroll.status === 'pending' && onProcess) {
            onProcess(payroll.staff._id);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Generating Salary Slip PDF...');
            try {
                const doc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSalarySlipPDF"](payroll, month, year);
                const monthName = getMonthName(month);
                doc.save(`Salary_Slip_${payroll.staff?.name || 'Staff'}_${monthName}_${year}.pdf`);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('PDF Downloaded successfully!');
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to generate PDF');
            }
        }
    };
    const getMonthName = (m)=>{
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        return months[m] || '';
    };
    const getStatusColor = (status)=>{
        if (status === 'present') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
        if (status === 'half-day') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        if (status === 'absent') return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
        return 'bg-gray-800 text-gray-500 border-gray-700';
    };
    const getDotColor = (status)=>{
        if (status === 'present') return 'bg-emerald-400';
        if (status === 'half-day') return 'bg-yellow-400';
        if (status === 'absent') return 'bg-rose-500';
        return 'bg-transparent';
    };
    // Build calendar grid
    const daysArray = Array.from({
        length: totalDays
    }, (_, i)=>{
        const d = i + 1;
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const record = attendance.find((a)=>new Date(a.date).toISOString().split('T')[0] === dateStr);
        return {
            day: d,
            dateStr,
            record
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-md overflow-y-auto",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-[2.5rem] w-full max-w-6xl shadow-2xl border border-gray-200 flex flex-col lg:flex-row overflow-hidden relative my-auto",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: onClose,
                    className: "absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all z-10 border border-gray-200",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "w-full lg:w-[400px] bg-gray-50 p-8 lg:p-10 flex flex-col border-r border-gray-200",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-14 h-14 rounded-2xl bg-yellow-50 text-yellow-600 border border-yellow-200 flex items-center justify-center font-black text-xl shadow-sm",
                                    children: getInitials(payroll.staff?.name)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                            className: "text-xl font-black text-gray-900",
                                            children: payroll.staff?.name
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-black tracking-widest text-yellow-600 uppercase",
                                            children: "Staff Member"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-3xl p-6 border border-slate-700/50 mb-6 shadow-xl relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "text-center mb-6 mt-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2",
                                            children: "Earned So Far"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-start justify-center gap-1",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-xl font-bold text-amber-500 mt-2",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-5xl font-black text-white tracking-tight",
                                                    children: Math.round(payroll.amount || 0).toLocaleString('en-IN')
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center justify-center gap-2 mt-4 text-xs font-medium text-slate-400",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                                    className: "w-3.5 h-3.5 text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    children: [
                                                        "01/",
                                                        String(month + 1).padStart(2, '0'),
                                                        "/",
                                                        year,
                                                        " → ",
                                                        totalDays,
                                                        "/",
                                                        String(month + 1).padStart(2, '0'),
                                                        "/",
                                                        year
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: handleDownload,
                                    className: "w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.1)] text-sm tracking-wide",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__["Download"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        payroll.status === 'pending' ? 'PROCESS & DOWNLOAD SLIP' : 'DOWNLOAD SALARY SLIP'
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex-1 space-y-3",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-[#1e293b]/40 rounded-2xl p-4 border border-indigo-500/20",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Info$7d$__["Info"], {
                                                    className: "w-3.5 h-3.5 text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] font-black text-indigo-400 uppercase tracking-widest",
                                                    children: "How is Salary Calculated?"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-medium text-slate-300",
                                            children: [
                                                "(Present + Sundays + Extras) × ₹",
                                                Math.round(perDay),
                                                "/day"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-emerald-900/10 rounded-2xl p-4 border border-emerald-500/10 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle2$7d$__["CheckCircle2"], {
                                                            className: "w-3.5 h-3.5 text-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] font-black text-emerald-500 uppercase tracking-widest",
                                                            children: "Days Present"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] font-medium text-emerald-500/70",
                                                    children: [
                                                        "Of ",
                                                        totalDays,
                                                        " working days passed"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-lg font-black text-emerald-400",
                                            children: [
                                                daysPresent,
                                                " ",
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-xs font-bold text-emerald-500/70",
                                                    children: "days"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 156,
                                                    columnNumber: 80
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-amber-900/10 rounded-2xl p-4 border border-amber-500/10 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "w-3.5 h-1 bg-amber-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] font-black text-amber-500 uppercase tracking-widest",
                                                            children: "Total Leaves Taken"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] font-medium text-amber-500/70",
                                                    children: "All leaves are unpaid as per policy"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-lg font-black text-amber-400",
                                            children: [
                                                paidLeaves,
                                                " ",
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-xs font-bold text-amber-500/70",
                                                    children: "days"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 167,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-rose-900/10 rounded-2xl p-4 border border-rose-500/10 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                                            className: "w-3.5 h-3.5 text-rose-500"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] font-black text-rose-500 uppercase tracking-widest",
                                                            children: "Unpaid Absent Days"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 174,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] font-medium text-rose-500/70",
                                                    children: "Beyond free allowance → deducted"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-lg font-black text-rose-400",
                                                    children: [
                                                        unpaidAbsentDays,
                                                        " ",
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "text-xs font-bold text-rose-500/70",
                                                            children: "days"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 179,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs font-bold text-rose-500",
                                                    children: [
                                                        "-₹",
                                                        unpaidDeduction.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                payroll.staff?.staffType === 'Regular' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-[#1e293b]/40 rounded-2xl p-4 border border-slate-700/50",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3",
                                            children: "Leave Carry-Forward Pool"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-lg font-black text-white",
                                                            children: leaveCarryForward
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[9px] font-bold text-slate-500 uppercase tracking-wider",
                                                            children: "Accrued (Total)"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-lg font-black text-rose-400",
                                                            children: leaveUsed
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[9px] font-bold text-slate-500 uppercase tracking-wider",
                                                            children: "Used (Till Date)"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-lg font-black text-emerald-400",
                                                            children: leavePool
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[9px] font-bold text-slate-500 uppercase tracking-wider",
                                                            children: "Available (Pool)"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        payroll.staff?.staffType === 'Regular' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4",
                                    children: "Leave Carry-Forward Pool"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-white p-4 rounded-2xl border border-gray-200 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-2xl font-black text-blue-600",
                                                    children: leaveCarryForward
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1",
                                                    children: "Previous C/F"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-white p-4 rounded-2xl border border-gray-200 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-2xl font-black text-gray-900",
                                                    children: leavePool
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1",
                                                    children: "Allowed Leaves"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-2xl font-black text-emerald-600",
                                                    children: leaveCarryForward + leavePool
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[9px] font-bold text-emerald-600 uppercase tracking-widest mt-1",
                                                    children: "Total Available"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "bg-white p-4 rounded-2xl border border-rose-200 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-2xl font-black text-rose-500",
                                                    children: leaveUsed
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[9px] font-bold text-rose-500 uppercase tracking-widest mt-1",
                                                    children: "Utilized This Month"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mt-auto",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                    className: "text-[10px] font-black text-yellow-600 uppercase tracking-widest mb-3 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 231,
                                            columnNumber: 123
                                        }, this),
                                        " Final Payout Calculation"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-yellow-50 rounded-2xl p-4 border border-yellow-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-between items-center mb-2",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-xs font-bold text-gray-600",
                                                children: [
                                                    "Extra Leaves: ",
                                                    Math.max(0, unpaidAbsentDays),
                                                    " day(s)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-[11px] font-bold text-gray-500 mb-2",
                                            children: [
                                                "(",
                                                totalBaseSalary.toLocaleString(),
                                                " / ",
                                                totalDays,
                                                ") x ",
                                                daysPresent + paidLeaves
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-bold text-gray-500 mb-2",
                                            children: [
                                                "Advances Deducted: -₹",
                                                payroll.advances?.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-sm font-black text-yellow-600",
                                            children: [
                                                "= ₹",
                                                Math.round(payroll.amount || 0).toLocaleString(),
                                                " (TOTAL SALARY)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex-1 p-8 lg:p-10 bg-white overflow-y-auto max-h-[85vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-between items-center mb-10",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xl font-black text-gray-900 tracking-tight",
                                            children: [
                                                new Date(year, month).toLocaleString('default', {
                                                    month: 'long'
                                                }),
                                                " ",
                                                year,
                                                " Cycle Calendar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-medium text-gray-500 mt-1",
                                            children: [
                                                "01/",
                                                String(month + 1).padStart(2, '0'),
                                                "/",
                                                year,
                                                " → ",
                                                totalDays,
                                                "/",
                                                String(month + 1).padStart(2, '0'),
                                                "/",
                                                year
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-2 h-2 rounded-full bg-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 257,
                                                    columnNumber: 56
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-[10px] font-black text-emerald-600 uppercase tracking-wider",
                                                    children: "Present"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 257,
                                                    columnNumber: 115
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-2 h-2 rounded-full bg-yellow-500"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 258,
                                                    columnNumber: 56
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-[10px] font-black text-yellow-600 uppercase tracking-wider",
                                                    children: "Half Day"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 258,
                                                    columnNumber: 114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-2 h-2 rounded-full bg-rose-500"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 259,
                                                    columnNumber: 56
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-[10px] font-black text-rose-600 uppercase tracking-wider",
                                                    children: "Absent"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 259,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "grid grid-cols-7 gap-3 mb-10",
                            children: daysArray.map((item, index)=>{
                                const isActive = !!item.record;
                                const statusColor = item.record ? getStatusColor(item.record.status).replace('bg-', 'bg-').replace('border-', 'border-').replace('text-', 'text-') : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-300';
                                const dotColor = item.record ? getDotColor(item.record.status) : '';
                                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: `flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer shadow-sm ${statusColor}`,
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-xs font-black mb-1",
                                            children: item.day
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-[8px] font-bold uppercase tracking-widest opacity-60 mb-1",
                                            children: new Date(year, month, item.day).toLocaleString('default', {
                                                weekday: 'short'
                                            })
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 273,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: `w-1.5 h-1.5 rounded-full ${dotColor} shadow-[0_0_8px_currentColor]`
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 274,
                                            columnNumber: 32
                                        }, this),
                                        !isActive && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-1.5 h-1.5 rounded-full bg-transparent"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 275,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-col sm:flex-row gap-8 mb-10 bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-sm",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-between text-xs font-black uppercase tracking-widest mb-3",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-gray-500",
                                                    children: "Payroll Accrual"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-yellow-600",
                                                    children: [
                                                        Math.round(payroll.amount / totalBaseSalary * 100 || 0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "h-2 w-full bg-gray-200 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "h-full bg-yellow-500 shadow-sm rounded-full",
                                                style: {
                                                    width: `${Math.min(100, payroll.amount / totalBaseSalary * 100 || 0)}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex justify-between text-xs font-black uppercase tracking-widest mb-3",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-gray-500",
                                                    children: "Earned Days Rate"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 294,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-emerald-500",
                                                    children: [
                                                        Math.round(daysPresent / totalDays * 100 || 0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "h-2 w-full bg-gray-200 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "h-full bg-emerald-500 shadow-sm rounded-full",
                                                style: {
                                                    width: `${Math.min(100, daysPresent / totalDays * 100 || 0)}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "text-lg font-black text-gray-900 tracking-tight mb-6",
                                    children: "Attendance Activity Log"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                                        className: "w-full text-left text-sm whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                                                className: "bg-gray-50 text-gray-500 font-bold text-[10px] uppercase tracking-widest border-b border-gray-100",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-6 py-4",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-6 py-4",
                                                            children: "Photos"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-6 py-4",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-6 py-4",
                                                            children: "Time (In/Out)"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                                                className: "divide-y divide-gray-100",
                                                children: attendance.length > 0 ? attendance.slice().reverse().map((record)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                        className: "hover:bg-gray-50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                className: "px-6 py-4",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "font-bold text-gray-900",
                                                                        children: new Date(record.date).toLocaleDateString('en-GB')
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                        lineNumber: 319,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-[10px] font-medium text-gray-500",
                                                                        children: new Date(record.date).toLocaleDateString('en-GB')
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                        lineNumber: 320,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                lineNumber: 318,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        record.photoInUrl ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                            src: record.photoInUrl,
                                                                            alt: "In",
                                                                            className: "w-8 h-8 rounded-lg object-cover border border-gray-200"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                            lineNumber: 325,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200",
                                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Camera$7d$__["Camera"], {
                                                                                className: "w-3 h-3 text-gray-400"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                                lineNumber: 328,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                            lineNumber: 327,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        record.photoOutUrl && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                            src: record.photoOutUrl,
                                                                            alt: "Out",
                                                                            className: "w-8 h-8 rounded-lg object-cover border border-gray-200"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                            lineNumber: 332,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                    lineNumber: 323,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                lineNumber: 322,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: `px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${getStatusColor(record.status)}`,
                                                                    children: record.status
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                    lineNumber: 337,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                className: "px-6 py-4",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "font-bold text-emerald-600 text-xs",
                                                                        children: record.timeIn || '--:--'
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                        lineNumber: 342,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "font-bold text-rose-600 text-xs mt-0.5",
                                                                        children: record.timeOut || '--:--'
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                        lineNumber: 343,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                                lineNumber: 341,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, record._id, true, {
                                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                        colSpan: 4,
                                                        className: "px-6 py-12 text-center text-gray-400 font-medium",
                                                        children: loading ? 'Loading records...' : 'No attendance records found for this cycle.'
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                        lineNumber: 348,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/SalarySlipModal.tsx>",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(SalarySlipModal, "pNesZvz9lijwOUzsAeFbfhAiK78=");
_c = SalarySlipModal;
var _c;
__turbopack_refresh__.register(_c, "SalarySlipModal");

})()),
"[project]/src/app/staff/components/AddStaffModalLight.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AddStaffModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) {export default as MapPin}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) {export default as Search}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) {export default as Clock}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__UserPlus$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) {export default as UserPlus}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Info$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) {export default as Info}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const DynamicMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](()=>__turbopack_require__("[project]/src/app/staff/components/MapComponent.tsx [app-client] (ecmascript, loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/staff/components/AddStaffModalLight.tsx -> " + "./MapComponent"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "w-full h-full bg-gray-100 rounded-xl animate-pulse"
        }, void 0, false, {
            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
            lineNumber: 8,
            columnNumber: 89
        }, this)
});
_c = DynamicMap;
function AddStaffModal({ onClose }) {
    _s();
    const [form, setForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        name: '',
        mobile: '',
        designation: '',
        salary: '',
        joiningDate: '',
        staffType: 'Regular',
        monthlyTarget: 26,
        overtime: {
            enabled: false,
            thresholdHours: 9,
            ratePerHour: 100
        },
        username: '',
        password: '',
        geofence: {
            lat: 28.6129,
            lng: 77.2295,
            radius: 200
        },
        shift: {
            startTime: '09:00',
            endTime: '18:00'
        },
        monthlyLeaveQuota: 4
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/admin/staff', form);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Staff added successfully!');
            onClose();
            window.location.reload();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.response?.data?.message || 'Failed to add staff');
        }
    };
    const handleLocateMe = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                setForm({
                    ...form,
                    geofence: {
                        ...form.geofence,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Location updated!');
            }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Unable to retrieve your location'));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Geolocation not supported');
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-[2.5rem] w-full max-w-5xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative my-auto",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "bg-gray-50 p-6 lg:p-8 border-b border-gray-200 flex justify-between items-center relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-4 relative z-10",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm border border-blue-200",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__UserPlus$7d$__["UserPlus"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                            className: "text-2xl font-black text-gray-900 tracking-tight",
                                            children: "NEW STAFF RECORD"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-medium text-gray-500 mt-1",
                                            children: "Onboard a new member to your organization"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: onClose,
                            className: "p-2 rounded-full bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all z-10 border border-gray-200 shadow-sm",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "p-6 lg:p-10 overflow-y-auto max-h-[75vh]",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                        onSubmit: handleSubmit,
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1 h-4 bg-blue-600 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Personal Identity"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Full Name"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 83,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. John Doe",
                                                                value: form.name,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        name: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Mobile Number"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 87,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. 9876543210",
                                                                value: form.mobile,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        mobile: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 88,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Designation"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 91,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. Senior Manager",
                                                                value: form.designation,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        designation: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 92,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1 h-4 bg-blue-600 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "System Access"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Username"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 105,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. john_staff",
                                                                value: form.username,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        username: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 106,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Password"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 109,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "password",
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "••••••••",
                                                                value: form.password,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        password: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 110,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1 h-4 bg-blue-600 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Payroll & Leave Policy"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                        className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4",
                                                        children: "Staff Type"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        staffType: 'Regular'
                                                                    }),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-2", form.staffType === 'Regular' ? "border-blue-500 bg-blue-50/50 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.02]" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"),
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("font-black text-xs tracking-tight mb-1", form.staffType === 'Regular' ? "text-blue-900" : "text-gray-700"),
                                                                            children: "Regular"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                            lineNumber: 140,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: "text-[9px] font-bold text-gray-400 leading-snug",
                                                                            children: "Standard Salary"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                            lineNumber: 141,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 139,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        staffType: 'Fixed'
                                                                    }),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-2", form.staffType === 'Fixed' ? "border-purple-500 bg-purple-50/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] scale-[1.02]" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"),
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("font-black text-xs tracking-tight mb-1", form.staffType === 'Fixed' ? "text-purple-900" : "text-gray-700"),
                                                                            children: "Fixed"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                            lineNumber: 154,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: "text-[9px] font-bold text-gray-400 leading-snug",
                                                                            children: "Fixed Monthly Pay"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                            lineNumber: 155,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 153,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        staffType: 'Daily'
                                                                    }),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-2", form.staffType === 'Daily' ? "border-green-500 bg-green-50/50 shadow-[0_0_15px_rgba(34,197,94,0.15)] scale-[1.02]" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"),
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("font-black text-xs tracking-tight mb-1", form.staffType === 'Daily' ? "text-green-900" : "text-gray-700"),
                                                                            children: "Daily Wage"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                            lineNumber: 168,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: "text-[9px] font-bold text-gray-400 leading-snug",
                                                                            children: "Paid per day"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                            lineNumber: 169,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 167,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: form.staffType === 'Daily' ? 'Daily Wage (Per Day)' : 'Monthly Salary'
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 font-black",
                                                                        children: "₹"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 181,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                        type: "number",
                                                                        required: true,
                                                                        className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm font-black text-blue-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white",
                                                                        placeholder: "0",
                                                                        value: form.salary,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                salary: e.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 182,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2 text-right",
                                                                children: "Joining Date"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 186,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "date",
                                                                required: true,
                                                                className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white text-right",
                                                                value: form.joiningDate,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        joiningDate: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 187,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Monthly Target"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 193,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white",
                                                                value: form.monthlyTarget,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        monthlyTarget: Number(e.target.value)
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 194,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2 text-right",
                                                                children: "Overtime Check"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 197,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex items-center justify-end h-full",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                        type: "checkbox",
                                                                        checked: form.overtime.enabled,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                overtime: {
                                                                                    ...form.overtime,
                                                                                    enabled: e.target.checked
                                                                                }
                                                                            }),
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 199,
                                                                        columnNumber: 24
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "ml-2 text-sm font-bold text-gray-700",
                                                                        children: "Enabled"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 200,
                                                                        columnNumber: 24
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 198,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            form.staffType === 'Regular' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                            className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                            children: "Monthly Leave Quota"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                            lineNumber: 208,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                            type: "number",
                                                            className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white",
                                                            value: form.monthlyLeaveQuota,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    monthlyLeaveQuota: Number(e.target.value)
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                            lineNumber: 209,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            form.overtime.enabled && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10 bg-blue-50 p-4 rounded-xl border border-blue-100",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Threshold Hours"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 217,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500",
                                                                value: form.overtime.thresholdHours,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        overtime: {
                                                                            ...form.overtime,
                                                                            thresholdHours: Number(e.target.value)
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2 text-right",
                                                                children: "Rate Per Hour"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 221,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 text-right",
                                                                value: form.overtime.ratePerHour,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        overtime: {
                                                                            ...form.overtime,
                                                                            ratePerHour: Number(e.target.value)
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 222,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Work Geofencing"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "relative flex-1",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__["Search"], {
                                                                className: "w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "Search Office (e.g. City Branch Office)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 238,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        type: "button",
                                                        onClick: handleLocateMe,
                                                        className: "bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors whitespace-nowrap shadow-md",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-3 h-3 rounded-full border-2 border-white flex items-center justify-center",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "w-1 h-1 bg-white rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 241,
                                                                    columnNumber: 114
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this),
                                                            " LOCATE ME"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "h-48 rounded-xl border border-gray-200 overflow-hidden relative mb-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "absolute top-4 right-4 z-10 bg-white/90 backdrop-blur border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 247,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "text-[10px] font-black text-gray-800 tracking-widest uppercase",
                                                                children: "Live Preview"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 248,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](DynamicMap, {
                                                        lat: form.geofence.lat,
                                                        lng: form.geofence.lng,
                                                        radius: form.geofence.radius,
                                                        onChangeLocation: (lat, lng)=>setForm({
                                                                ...form,
                                                                geofence: {
                                                                    ...form.geofence,
                                                                    lat,
                                                                    lng
                                                                }
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur border border-gray-200 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "w-3 h-3 rounded-full border-2 border-blue-500 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "w-1 h-1 bg-blue-500 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 256,
                                                                        columnNumber: 119
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 256,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 255,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-xs font-black text-gray-900 tracking-tight",
                                                                        children: [
                                                                            form.geofence.radius,
                                                                            "m Radius"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 259,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-[9px] font-bold text-gray-500",
                                                                        children: "Allowed Punch-In Area"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 260,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "bg-gray-50 border border-gray-200 p-5 rounded-2xl mb-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex justify-between items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                                        className: "w-3.5 h-3.5 text-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 268,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-[10px] font-black text-gray-800 tracking-widest uppercase",
                                                                        children: "Range Control"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                        lineNumber: 269,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 267,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "text-[10px] font-black text-blue-600",
                                                                    children: [
                                                                        form.geofence.radius,
                                                                        "m"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 272,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 271,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                        type: "range",
                                                        min: "50",
                                                        max: "1000",
                                                        step: "50",
                                                        value: form.geofence.radius,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                geofence: {
                                                                    ...form.geofence,
                                                                    radius: Number(e.target.value)
                                                                }
                                                            }),
                                                        className: "w-full accent-blue-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex justify-between mt-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                children: "50m (Strict)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 277,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                children: "1000m (Relaxed)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Info$7d$__["Info"], {
                                                        className: "w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[10px] font-medium text-gray-500 leading-relaxed",
                                                        children: "Drag the marker on the map to fine-tune the center point. Punch-in will only be allowed within the highlighted circle."
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Shift Timings"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Punch-In Time"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 296,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "relative",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                    type: "time",
                                                                    required: true,
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                    value: form.shift.startTime,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            shift: {
                                                                                ...form.shift,
                                                                                startTime: e.target.value
                                                                            }
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 298,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 297,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Punch-Out Time"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "relative",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                    type: "time",
                                                                    required: true,
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                    value: form.shift.endTime,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            shift: {
                                                                                ...form.shift,
                                                                                endTime: e.target.value
                                                                            }
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                    lineNumber: 304,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                                lineNumber: 303,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        type: "submit",
                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-black tracking-widest uppercase py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "w-4 h-4 rounded-full border-2 border-white flex items-center justify-center",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](CheckCircle, {
                                                    className: "w-3 h-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                    lineNumber: 311,
                                                    columnNumber: 110
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            " CREATE STAFF ACCOUNT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AddStaffModal, "aXF/Nt62luE8Et8I+GKK9AohBl4=");
_c1 = AddStaffModal;
const CheckCircle = ({ className })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
            lineNumber: 324,
            columnNumber: 145
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/AddStaffModalLight.tsx>",
        lineNumber: 324,
        columnNumber: 3
    }, this);
_c2 = CheckCircle;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "DynamicMap");
__turbopack_refresh__.register(_c1, "AddStaffModal");
__turbopack_refresh__.register(_c2, "CheckCircle");

})()),
"[project]/src/app/staff/components/EditStaffModalLight.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>EditStaffModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) {export default as MapPin}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) {export default as Search}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) {export default as Clock}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__UserPlus$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) {export default as UserPlus}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Info$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) {export default as Info}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const DynamicMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](()=>__turbopack_require__("[project]/src/app/staff/components/MapComponent.tsx [app-client] (ecmascript, loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/app/staff/components/EditStaffModalLight.tsx -> " + "./MapComponent"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "w-full h-full bg-gray-100 rounded-xl animate-pulse"
        }, void 0, false, {
            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
            lineNumber: 8,
            columnNumber: 89
        }, this)
});
_c = DynamicMap;
function EditStaffModal({ staff, onClose }) {
    _s();
    const [form, setForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        name: staff?.name || '',
        mobile: staff?.mobile || '',
        designation: staff?.designation || '',
        salary: staff?.salary || '',
        joiningDate: staff?.joiningDate ? new Date(staff.joiningDate).toISOString().split('T')[0] : '',
        staffType: staff?.staffType || 'Regular',
        monthlyTarget: staff?.monthlyTarget || 26,
        monthlyLeaveQuota: staff?.monthlyLeaveQuota ?? 4,
        overtime: staff?.overtime || {
            enabled: false,
            thresholdHours: 9,
            ratePerHour: 100
        },
        username: staff?.username || '',
        password: '',
        geofence: staff?.geofence && staff.geofence.lat ? staff.geofence : {
            lat: 28.6129,
            lng: 77.2295,
            radius: 200
        },
        shift: staff?.shift || {
            startTime: '09:00',
            endTime: '18:00'
        }
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/admin/staff/${staff._id}`, form);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Staff updated successfully!');
            onClose();
            window.location.reload();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.response?.data?.message || 'Failed to update staff');
        }
    };
    const handleLocateMe = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                setForm({
                    ...form,
                    geofence: {
                        ...form.geofence,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Location updated!');
            }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Unable to retrieve your location'));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Geolocation not supported');
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-[2.5rem] w-full max-w-5xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative my-auto",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "bg-gray-50 p-6 lg:p-8 border-b border-gray-200 flex justify-between items-center relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-4 relative z-10",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm border border-blue-200",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__UserPlus$7d$__["UserPlus"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                            className: "text-2xl font-black text-gray-900 tracking-tight",
                                            children: "EDIT STAFF RECORD"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-medium text-gray-500 mt-1",
                                            children: "Update personnel details"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: onClose,
                            className: "p-2 rounded-full bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all z-10 border border-gray-200 shadow-sm",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "p-6 lg:p-10 overflow-y-auto max-h-[75vh]",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                        onSubmit: handleSubmit,
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1 h-4 bg-blue-600 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Personal Identity"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Full Name"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. John Doe",
                                                                value: form.name,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        name: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 90,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Mobile Number"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 93,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. 9876543210",
                                                                value: form.mobile,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        mobile: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 94,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Designation"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 97,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. Senior Manager",
                                                                value: form.designation,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        designation: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 98,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1 h-4 bg-blue-600 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "System Access"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Username"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 111,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "e.g. john_staff",
                                                                value: form.username,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        username: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 112,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Password"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 115,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "password",
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "••••••••",
                                                                value: form.password,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        password: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 116,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-1 h-4 bg-blue-600 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Payroll & Leave Policy"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                        className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4",
                                                        children: "Staff Type"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        staffType: 'Regular'
                                                                    }),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-2", form.staffType === 'Regular' ? "border-blue-500 bg-blue-50/50 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.02]" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"),
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("font-black text-xs tracking-tight mb-1", form.staffType === 'Regular' ? "text-blue-900" : "text-gray-700"),
                                                                            children: "Regular"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                            lineNumber: 146,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: "text-[9px] font-bold text-gray-400 leading-snug",
                                                                            children: "Standard Salary"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                            lineNumber: 147,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 138,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        staffType: 'Fixed'
                                                                    }),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-2", form.staffType === 'Fixed' ? "border-purple-500 bg-purple-50/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] scale-[1.02]" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"),
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("font-black text-xs tracking-tight mb-1", form.staffType === 'Fixed' ? "text-purple-900" : "text-gray-700"),
                                                                            children: "Fixed"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                            lineNumber: 160,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: "text-[9px] font-bold text-gray-400 leading-snug",
                                                                            children: "Fixed Monthly Pay"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                            lineNumber: 161,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 159,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        staffType: 'Daily'
                                                                    }),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-2", form.staffType === 'Daily' ? "border-green-500 bg-green-50/50 shadow-[0_0_15px_rgba(34,197,94,0.15)] scale-[1.02]" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"),
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("font-black text-xs tracking-tight mb-1", form.staffType === 'Daily' ? "text-green-900" : "text-gray-700"),
                                                                            children: "Daily Wage"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                            lineNumber: 174,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                            className: "text-[9px] font-bold text-gray-400 leading-snug",
                                                                            children: "Paid per day"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                            lineNumber: 175,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 173,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: form.staffType === 'Daily' ? 'Daily Wage (Per Day)' : 'Monthly Salary'
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 183,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 font-black",
                                                                        children: "₹"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 185,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                        type: "number",
                                                                        required: true,
                                                                        className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm font-black text-blue-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white",
                                                                        placeholder: "0",
                                                                        value: form.salary,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                salary: e.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 186,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 184,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2 text-right",
                                                                children: "Joining Date"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 190,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "date",
                                                                required: true,
                                                                className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white text-right",
                                                                value: form.joiningDate,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        joiningDate: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 191,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Monthly Target"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 197,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white",
                                                                value: form.monthlyTarget,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        monthlyTarget: Number(e.target.value)
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 198,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this),
                                                    form.staffType === 'Regular' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Monthly Leave Quota"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner focus:bg-white",
                                                                value: form.monthlyLeaveQuota,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        monthlyLeaveQuota: Number(e.target.value)
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2 text-right",
                                                                children: "Overtime Check"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex items-center justify-end h-full",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                        type: "checkbox",
                                                                        checked: form.overtime.enabled,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                overtime: {
                                                                                    ...form.overtime,
                                                                                    enabled: e.target.checked
                                                                                }
                                                                            }),
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 209,
                                                                        columnNumber: 24
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "ml-2 text-sm font-bold text-gray-700",
                                                                        children: "Enabled"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 210,
                                                                        columnNumber: 24
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            form.overtime.enabled && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5 mb-5 relative z-10 bg-blue-50 p-4 rounded-xl border border-blue-100",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Threshold Hours"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500",
                                                                value: form.overtime.thresholdHours,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        overtime: {
                                                                            ...form.overtime,
                                                                            thresholdHours: Number(e.target.value)
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2 text-right",
                                                                children: "Rate Per Hour"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 222,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                type: "number",
                                                                className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 text-right",
                                                                value: form.overtime.ratePerHour,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        overtime: {
                                                                            ...form.overtime,
                                                                            ratePerHour: Number(e.target.value)
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 223,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Work Geofencing"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "relative flex-1",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__["Search"], {
                                                                className: "w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 238,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                placeholder: "Search Office (e.g. City Branch Office)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        type: "button",
                                                        onClick: handleLocateMe,
                                                        className: "bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors whitespace-nowrap shadow-md",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-3 h-3 rounded-full border-2 border-white flex items-center justify-center",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "w-1 h-1 bg-white rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 242,
                                                                    columnNumber: 114
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 242,
                                                                columnNumber: 21
                                                            }, this),
                                                            " LOCATE ME"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "h-48 rounded-xl border border-gray-200 overflow-hidden relative mb-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "absolute top-4 right-4 z-10 bg-white/90 backdrop-blur border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 248,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "text-[10px] font-black text-gray-800 tracking-widest uppercase",
                                                                children: "Live Preview"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 249,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](DynamicMap, {
                                                        lat: form.geofence.lat,
                                                        lng: form.geofence.lng,
                                                        radius: form.geofence.radius,
                                                        onChangeLocation: (lat, lng)=>setForm({
                                                                ...form,
                                                                geofence: {
                                                                    ...form.geofence,
                                                                    lat,
                                                                    lng
                                                                }
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur border border-gray-200 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "w-3 h-3 rounded-full border-2 border-blue-500 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "w-1 h-1 bg-blue-500 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 257,
                                                                        columnNumber: 119
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 257,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-xs font-black text-gray-900 tracking-tight",
                                                                        children: [
                                                                            form.geofence.radius,
                                                                            "m Radius"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 260,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-[9px] font-bold text-gray-500",
                                                                        children: "Allowed Punch-In Area"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 261,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "bg-gray-50 border border-gray-200 p-5 rounded-2xl mb-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex justify-between items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                                        className: "w-3.5 h-3.5 text-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 269,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                        className: "text-[10px] font-black text-gray-800 tracking-widest uppercase",
                                                                        children: "Range Control"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                        lineNumber: 270,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "text-[10px] font-black text-blue-600",
                                                                    children: [
                                                                        form.geofence.radius,
                                                                        "m"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 273,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 272,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                        type: "range",
                                                        min: "50",
                                                        max: "1000",
                                                        step: "50",
                                                        value: form.geofence.radius,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                geofence: {
                                                                    ...form.geofence,
                                                                    radius: Number(e.target.value)
                                                                }
                                                            }),
                                                        className: "w-full accent-blue-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex justify-between mt-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                children: "50m (Strict)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                children: "1000m (Relaxed)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Info$7d$__["Info"], {
                                                        className: "w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[10px] font-medium text-gray-500 leading-relaxed",
                                                        children: "Drag the marker on the map to fine-tune the center point. Punch-in will only be allowed within the highlighted circle."
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-white p-6 rounded-3xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-sm font-black text-gray-800 tracking-widest uppercase",
                                                        children: "Shift Timings"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-2 gap-5",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Punch-In Time"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 297,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "relative",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                    type: "time",
                                                                    required: true,
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                    value: form.shift.startTime,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            shift: {
                                                                                ...form.shift,
                                                                                startTime: e.target.value
                                                                            }
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 299,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 298,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2",
                                                                children: "Punch-Out Time"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 303,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "relative",
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                                    type: "time",
                                                                    required: true,
                                                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-black text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                    value: form.shift.endTime,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            shift: {
                                                                                ...form.shift,
                                                                                endTime: e.target.value
                                                                            }
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                                lineNumber: 304,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        type: "submit",
                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-black tracking-widest uppercase py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "w-4 h-4 rounded-full border-2 border-white flex items-center justify-center",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](CheckCircle, {
                                                    className: "w-3 h-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                    lineNumber: 312,
                                                    columnNumber: 110
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            " UPDATE STAFF RECORD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(EditStaffModal, "OTFEC31zPvX1AD5c+Tpj9ny5wKo=");
_c1 = EditStaffModal;
const CheckCircle = ({ className })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
            lineNumber: 325,
            columnNumber: 145
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/EditStaffModalLight.tsx>",
        lineNumber: 325,
        columnNumber: 3
    }, this);
_c2 = CheckCircle;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "DynamicMap");
__turbopack_refresh__.register(_c1, "EditStaffModal");
__turbopack_refresh__.register(_c2, "CheckCircle");

})()),
"[project]/src/app/staff/components/StaffDetailView.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>StaffDetailView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Phone$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) {export default as Phone}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Briefcase$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) {export default as Briefcase}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) {export default as MapPin}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) {export default as Clock}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) {export default as DollarSign}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Target$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) {export default as Target}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) {export default as Settings}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) {export default as AlertCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function StaffDetailView({ staff, onClose, onRefresh }) {
    if (!staff) return null;
    const handleBlockStaff = async ()=>{
        if (!window.confirm(`Are you sure you want to ${staff.status === 'blocked' ? 'unblock' : 'block'} this staff member?`)) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/admin/staff/${staff._id}/block`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`Staff ${staff.status === 'blocked' ? 'unblocked' : 'blocked'} successfully`);
            onRefresh();
            onClose();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to update status');
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-[2rem] w-full max-w-4xl shadow-2xl overflow-hidden relative my-auto",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white relative",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "absolute top-4 right-4 z-10 flex gap-2",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: handleBlockStaff,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm", staff.status === 'blocked' ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"),
                                    children: staff.status === 'blocked' ? 'UNBLOCK STAFF' : 'BLOCK STAFF'
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: onClose,
                                    className: "p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-6 relative z-10",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-24 h-24 rounded-2xl bg-white flex items-center justify-center text-blue-600 text-3xl font-black shadow-lg",
                                    children: staff.name.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                    className: "text-3xl font-black",
                                                    children: staff.name
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this),
                                                staff.status === 'blocked' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md tracking-wider",
                                                    children: "BLOCKED"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-blue-100 font-medium mt-1 text-sm flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Briefcase$7d$__["Briefcase"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                staff.designation || 'Staff Member'
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-blue-200 font-medium mt-1 text-sm flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Phone$7d$__["Phone"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                staff.mobile
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xs font-black text-gray-400 tracking-widest uppercase mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                " System Access"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "USERNAME"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 68,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900",
                                                            children: staff.username || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 69,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "ROLE"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 72,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900 capitalize",
                                                            children: staff.role
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 73,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "JOINING DATE"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900",
                                                            children: staff.joiningDate ? new Date(staff.joiningDate).toLocaleDateString() : 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xs font-black text-gray-400 tracking-widest uppercase mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                " Location & Shift"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "GEOFENCE"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900",
                                                            children: [
                                                                staff.geofence?.radius,
                                                                "m Radius"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        staff.geofence?.lat && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-xs text-gray-400 mt-1",
                                                            children: [
                                                                "Lat: ",
                                                                staff.geofence.lat.toFixed(4),
                                                                ", Lng: ",
                                                                staff.geofence.lng.toFixed(4)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 90,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "SHIFT TIMINGS"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900",
                                                            children: [
                                                                staff.shift?.startTime,
                                                                " to ",
                                                                staff.shift?.endTime
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 94,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-white p-6 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-[40px]"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-xs font-black text-blue-600 tracking-widest uppercase mb-4 flex items-center gap-2 relative z-10",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__DollarSign$7d$__["DollarSign"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                " Payroll & Compensation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "grid grid-cols-2 gap-6 relative z-10",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "STAFF TYPE"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 110,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-lg",
                                                            children: staff.staffType || 'Regular'
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 111,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "BASE SALARY"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-black text-xl text-gray-900",
                                                            children: [
                                                                "₹",
                                                                staff.salary?.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 115,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                staff.staffType === 'Regular' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "LEAVE QUOTA"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "font-bold text-gray-900",
                                                            children: [
                                                                staff.monthlyLeaveQuota,
                                                                " Days / Month"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "text-[10px] text-gray-500 font-bold tracking-wider mb-1",
                                                            children: "MONTHLY TARGET"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex items-center gap-1.5 font-bold text-gray-900",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Target$7d$__["Target"], {
                                                                    className: "w-4 h-4 text-orange-500"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                                    lineNumber: 128,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                staff.monthlyTarget || 26,
                                                                " Days"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        staff.overtime?.enabled && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "mt-6 pt-6 border-t border-gray-100 relative z-10",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                    className: "text-[10px] font-black text-gray-500 tracking-widest mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Clock$7d$__["Clock"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this),
                                                        " OVERTIME RULES"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex gap-8",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Threshold"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "font-bold text-gray-900",
                                                                    children: [
                                                                        staff.overtime.thresholdHours,
                                                                        " Hours/Day"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                                    lineNumber: 141,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Rate"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                                    lineNumber: 144,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "font-bold text-gray-900",
                                                                    children: [
                                                                        "₹",
                                                                        staff.overtime.ratePerHour,
                                                                        " / Hour"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                !staff.faceDescriptor || staff.faceDescriptor.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__["AlertCircle"], {
                                            className: "w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold text-orange-900 text-sm",
                                                    children: "Face Not Registered"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-orange-700 mt-1",
                                                    children: "This staff member cannot punch in via the mobile app until they register their face."
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-green-50 border border-green-100 p-4 rounded-xl flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "font-bold text-green-900 text-sm",
                                                    children: "Face Registered"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-green-700 mt-1",
                                                    children: "Biometric authentication is active for this personnel."
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/StaffDetailView.tsx>",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = StaffDetailView;
var _c;
__turbopack_refresh__.register(_c, "StaffDetailView");

})()),
"[project]/src/app/staff/components/PhotoViewerModal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PhotoViewerModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PhotoViewerModal({ photoUrl, onClose }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm",
        onClick: onClose,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "absolute top-4 right-4 z-10",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: onClose,
                        className: "p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                    src: photoUrl,
                    alt: "Punch In Evidence",
                    className: "w-full h-auto object-contain max-h-[80vh]"
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "p-4 bg-white text-center border-t border-gray-100",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "font-bold text-gray-800",
                            children: "Attendance Photo Evidence"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: "Captured at punch-in time"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/PhotoViewerModal.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = PhotoViewerModal;
var _c;
__turbopack_refresh__.register(_c, "PhotoViewerModal");

})()),
"[project]/src/app/staff/components/EditAdvanceModal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>EditAdvanceModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Save$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) {export default as Save}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Edit3$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) {export default as Edit3}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function EditAdvanceModal({ advance, onClose, onRefresh }) {
    _s();
    const [form, setForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        amount: advance.amount || '',
        date: advance.date ? new Date(advance.date).toISOString().split('T')[0] : '',
        givenBy: advance.givenBy || 'Office',
        description: advance.description || ''
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/admin/staff/advances/${advance._id}`, form);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Advance updated successfully');
            onRefresh();
            onClose();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.response?.data?.message || 'Failed to update advance');
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Edit3$7d$__["Edit3"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                            className: "text-lg font-black text-gray-900",
                                            children: "Edit Advance"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-bold text-gray-500",
                                            children: "Update deduction record"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: onClose,
                            className: "p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-black text-gray-500 uppercase tracking-wider block mb-2",
                                    children: "Amount (₹)"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "number",
                                    required: true,
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all",
                                    value: form.amount,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            amount: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-black text-gray-500 uppercase tracking-wider block mb-2",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "date",
                                    required: true,
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all",
                                    value: form.date,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            date: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-black text-gray-500 uppercase tracking-wider block mb-2",
                                    children: "Given By"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all",
                                    value: form.givenBy,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            givenBy: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                            value: "Office",
                                            children: "Office"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                            value: "Owner",
                                            children: "Owner"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                            value: "Manager",
                                            children: "Manager"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "text-xs font-black text-gray-500 uppercase tracking-wider block mb-2",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "text",
                                    className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all",
                                    value: form.description,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            description: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 transition-colors",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Save$7d$__["Save"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                " Update Record"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/EditAdvanceModal.tsx>",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(EditAdvanceModal, "o3S2Y1anGod6GOqMd32jxNR7oqE=");
_c = EditAdvanceModal;
var _c;
__turbopack_refresh__.register(_c, "EditAdvanceModal");

})()),
"[project]/src/app/staff/components/ManualDutyModal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ManualDutyModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) {export default as ShieldCheck}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) {export default as AlertCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript) {export default as CheckCircle}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
function ManualDutyModal({ isOpen, onClose, defaultStaffId, defaultDate, defaultTimeIn, onSubmit }) {
    _s();
    const [staffList, setStaffList] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [staffId, setStaffId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [date, setDate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [status, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('present');
    const [timeIn, setTimeIn] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [timeOut, setTimeOut] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isOpen) {
            setStaffId(defaultStaffId || '');
            setDate(defaultDate || new Date().toISOString().split('T')[0]);
            setStatus('present');
            setTimeIn(defaultTimeIn || '09:00');
            setTimeOut('');
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/admin/staff').then((res)=>{
                setStaffList(res.data);
                if (!defaultStaffId && res.data.length > 0) {
                    setStaffId(res.data[0]._id);
                }
            });
        }
    }, [
        isOpen,
        defaultStaffId,
        defaultDate,
        defaultTimeIn
    ]);
    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit({
            staffId,
            date,
            status,
            timeIn,
            timeOut
        });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/80 backdrop-blur-md font-sans",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "relative w-full max-w-lg bg-[#0b1121] rounded-3xl overflow-hidden shadow-2xl border border-gray-800",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "absolute top-0 left-10 right-10 h-1.5 bg-yellow-400 rounded-b-xl"
                }, void 0, false, {
                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "p-8 pt-10",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-between items-start mb-8",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-14 h-14 rounded-2xl bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center shadow-inner",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__["ShieldCheck"], {
                                                className: "w-7 h-7 text-yellow-400"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "text-yellow-500",
                                                            children: "Security Panel"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                            lineNumber: 63,
                                                            columnNumber: 19
                                                        }, this),
                                                        " • Admin Override"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                    className: "text-2xl font-black text-white tracking-tight",
                                                    children: "Mark Attendance"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: onClose,
                                    className: "p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors border border-gray-700/50",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex gap-4 items-center bg-[#17161b] border border-[#3e3423] rounded-2xl p-4 mb-8",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center shrink-0 border border-yellow-900/50",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__["AlertCircle"], {
                                        className: "w-5 h-5 text-yellow-500"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "font-black text-yellow-500 text-sm tracking-wide",
                                            children: "Attendance Policy"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-[11px] font-bold text-yellow-500/70 mt-0.5",
                                            children: "Backdated entries are limited to the previous 60 days (2 Months)."
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                            className: "block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2",
                                            children: "Staff Member"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                            value: staffId,
                                            onChange: (e)=>setStaffId(e.target.value),
                                            required: true,
                                            className: "w-full bg-[#111827] border border-gray-800 text-white rounded-xl px-4 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 appearance-none transition-colors shadow-inner",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "Select a staff member"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                staffList.map((s)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                        value: s._id,
                                                        children: [
                                                            s.name,
                                                            " ",
                                                            s.designation ? `(${s.designation})` : ''
                                                        ]
                                                    }, s._id, true, {
                                                        fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid grid-cols-2 gap-5",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    className: "block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    type: "date",
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value),
                                                    required: true,
                                                    className: "w-full bg-[#111827] border border-gray-800 text-white rounded-xl px-4 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 [color-scheme:dark] shadow-inner"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    className: "block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Official Status"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                                    value: status,
                                                    onChange: (e)=>setStatus(e.target.value),
                                                    required: true,
                                                    className: "w-full bg-[#111827] border border-gray-800 text-white rounded-xl px-4 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 appearance-none uppercase tracking-widest shadow-inner",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                            value: "present",
                                                            children: "Present"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                            value: "half-day",
                                                            children: "Half Day"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                            lineNumber: 124,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                            value: "absent",
                                                            children: "Absent"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid grid-cols-2 gap-5",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    className: "block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Punch In Time"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    type: "time",
                                                    value: timeIn,
                                                    onChange: (e)=>setTimeIn(e.target.value),
                                                    required: status !== 'absent',
                                                    disabled: status === 'absent',
                                                    className: "w-full bg-[#080d19] border border-gray-900 text-white rounded-xl px-4 py-4 font-black focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 [color-scheme:dark] disabled:opacity-50 shadow-inner"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                    className: "block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2",
                                                    children: "Punch Out Time"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                    type: "time",
                                                    value: timeOut,
                                                    onChange: (e)=>setTimeOut(e.target.value),
                                                    disabled: status === 'absent',
                                                    className: "w-full bg-[#080d19] border border-gray-900 text-white rounded-xl px-4 py-4 font-black focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 [color-scheme:dark] disabled:opacity-50 shadow-inner"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    type: "submit",
                                    className: "mt-6 w-full bg-gradient-to-r from-[#d2a342] to-[#765dd7] hover:from-[#c2963c] hover:to-[#6751be] text-white font-black py-4 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99]",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__["CheckCircle"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        "AUTHORIZE ENTRY"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-center text-[10px] font-black text-gray-600 uppercase tracking-widest mt-2 mb-2",
                                    children: "Action will be logged in security audit history"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/staff/components/ManualDutyModal.tsx>",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ManualDutyModal, "fdVba+Ywk0p/zfoKdbHu+rol5zk=");
_c = ManualDutyModal;
var _c;
__turbopack_refresh__.register(_c, "ManualDutyModal");

})()),
"[project]/src/app/staff/components/StaffPayrollDetailModal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>StaffPayrollDetailModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) {export default as FileText}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) {export default as Download}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Calendar$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) {export default as Calendar}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) {export default as ArrowRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/api.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
function StaffPayrollDetailModal({ isOpen, onClose, staff, payroll, month, year, onSettle }) {
    _s();
    const [attendance, setAttendance] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const selectedMonthName = monthNames[month];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isOpen && staff) {
            setLoading(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/admin/staff/attendance?month=${month + 1}&year=${year}`).then((res)=>{
                const staffAttendance = res.data.filter((a)=>a.staff?._id === staff._id || a.staff === staff._id);
                setAttendance(staffAttendance);
            }).catch((err)=>console.error(err)).finally(()=>setLoading(false));
        }
    }, [
        isOpen,
        staff,
        month,
        year
    ]);
    if (!isOpen || !staff || !payroll) return null;
    // Generate calendar days
    const getDaysInMonth = (m, y)=>new Date(y, m + 1, 0).getDate();
    const daysInMonth = getDaysInMonth(month, year);
    const days = Array.from({
        length: daysInMonth
    }, (_, i)=>{
        const day = i + 1;
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const record = attendance.find((a)=>a.date === dateStr);
        return {
            day,
            status: record ? record.status : 'absent'
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-full md:w-[35%] bg-gray-50 border-r border-gray-200 p-8 flex flex-col overflow-y-auto custom-scrollbar",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center shadow-lg",
                                        children: staff.name.split(' ').map((n)=>n[0]).join('').substring(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                className: "text-xl font-bold text-gray-900",
                                                children: staff.name
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-sm font-semibold text-blue-600 uppercase tracking-widest",
                                                children: staff.role
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 relative overflow-hidden group hover:border-gray-200 transition-colors",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "absolute top-0 right-0 p-4 opacity-5",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                            className: "w-16 h-16"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 relative z-10",
                                        children: "Earned So Far"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-baseline gap-1 relative z-10",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-3xl font-bold text-gray-400",
                                                children: "₹"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-5xl font-black text-gray-900 tracking-tight",
                                                children: Math.round(payroll.amount || 0).toLocaleString('en-IN')
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-[10px] text-gray-400 mt-2 font-bold flex items-center gap-1.5 relative z-10 uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Calendar$7d$__["Calendar"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            payroll.cycleStart,
                                            " → ",
                                            payroll.cycleEnd
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "w-full mt-6 bg-gray-900 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 relative z-10 shadow-lg shadow-gray-900/20 active:scale-[0.98]",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Download$7d$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            "DOWNLOAD SALARY SLIP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            payroll.carryForwardStats && staff.staffType === 'Regular' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "bg-white border-2 border-gray-100 rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mb-6",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        className: "text-[10px] font-black text-gray-400 tracking-widest uppercase mb-4",
                                        children: "Leave Carry-Forward Pool"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "bg-blue-50/50 border border-blue-100/50 rounded-xl p-3.5 flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-2xl font-black text-blue-600 leading-none",
                                                        children: payroll.carryForwardStats.historicalBalance || 0
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[9px] font-bold text-blue-500/70 uppercase tracking-widest mt-1.5",
                                                        children: "Previous C/F"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "bg-gray-50/50 border border-gray-100/80 rounded-xl p-3.5 flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-2xl font-black text-gray-900 leading-none",
                                                        children: staff.monthlyLeaveQuota !== undefined ? staff.monthlyLeaveQuota : 4
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[9px] font-bold text-gray-500/70 uppercase tracking-widest mt-1.5",
                                                        children: "Allowed Leaves"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "bg-green-50/50 border border-green-100/50 rounded-xl p-3.5 flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-2xl font-black text-green-600 leading-none",
                                                        children: payroll.carryForwardStats.availableThisMonth || 0
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[9px] font-bold text-green-600/70 uppercase tracking-widest mt-1.5",
                                                        children: "Total Available"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "bg-red-50/50 border border-red-100/50 rounded-xl p-3.5 flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-2xl font-black text-red-600 leading-none",
                                                        children: payroll.carryForwardStats.utilizedThisMonth || 0
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[9px] font-bold text-red-500/70 uppercase tracking-widest mt-1.5",
                                                        children: "Utilized This Month"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mt-auto",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        className: "text-[10px] font-black text-gray-400 tracking-widest uppercase mb-4 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            " Final Payout Calculation"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "space-y-3 text-xs font-bold text-gray-500 uppercase tracking-wide",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "Base Salary:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 118,
                                                        columnNumber: 64
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-gray-900 font-black text-sm",
                                                        children: [
                                                            "₹",
                                                            payroll.basicSalary?.toLocaleString('en-IN')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 118,
                                                        columnNumber: 90
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "Total Days in Cycle:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 119,
                                                        columnNumber: 64
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-gray-900 font-black text-sm",
                                                        children: payroll.totalDaysInCycle
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 119,
                                                        columnNumber: 98
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "Present Days:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 120,
                                                        columnNumber: 64
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-gray-900 font-black text-sm",
                                                        children: payroll.presentDays
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 120,
                                                        columnNumber: 91
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "Paid Leaves:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 121,
                                                        columnNumber: 64
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-gray-900 font-black text-sm",
                                                        children: payroll.paidLeaves
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 121,
                                                        columnNumber: 90
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: "Advances Deducted:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 122,
                                                        columnNumber: 64
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-gray-900 font-black text-sm",
                                                        children: [
                                                            "₹",
                                                            payroll.advances?.toLocaleString('en-IN') || 0
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 122,
                                                        columnNumber: 96
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mt-5 pt-5 border-t border-gray-100",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-[10px] font-bold text-gray-400 tracking-widest mb-1.5",
                                                children: [
                                                    "(",
                                                    payroll.basicSalary?.toLocaleString('en-IN'),
                                                    " / ",
                                                    payroll.totalDaysInCycle,
                                                    ") x ",
                                                    payroll.presentDays + payroll.paidLeaves
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-lg font-black text-blue-600 uppercase tracking-wide flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowRight$7d$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ₹",
                                                    Math.round(payroll.amount || 0).toLocaleString('en-IN'),
                                                    " (TOTAL SALARY)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-full md:w-[65%] p-8 flex flex-col relative bg-white h-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: onClose,
                                className: "absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors text-gray-500 z-10",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-col sm:flex-row sm:items-end justify-between mb-8 pr-12 gap-4",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                className: "text-2xl font-black text-gray-900",
                                                children: [
                                                    selectedMonthName,
                                                    " ",
                                                    year,
                                                    " Cycle Calendar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-xs font-bold text-gray-500 mt-1.5 uppercase tracking-widest",
                                                children: [
                                                    payroll.cycleStart,
                                                    " → ",
                                                    payroll.cycleEnd
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex gap-4 items-center bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm shrink-0",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-green-500"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 149,
                                                        columnNumber: 56
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-[10px] font-bold text-gray-600 uppercase tracking-wider",
                                                        children: "PRESENT"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 149,
                                                        columnNumber: 117
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 150,
                                                        columnNumber: 56
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-[10px] font-bold text-gray-600 uppercase tracking-wider",
                                                        children: "HALF DAY"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 150,
                                                        columnNumber: 118
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-red-500"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 151,
                                                        columnNumber: 56
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "text-[10px] font-bold text-gray-600 uppercase tracking-wider",
                                                        children: "ABSENT"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 151,
                                                        columnNumber: 115
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex-1 bg-gray-50 border border-gray-200 rounded-3xl p-6 mb-8 overflow-y-auto custom-scrollbar shadow-inner",
                                children: loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-full h-full flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs font-bold text-gray-400 mt-4 animate-pulse uppercase tracking-widest",
                                            children: "Loading Records..."
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid grid-cols-7 gap-3 sm:gap-4",
                                    children: [
                                        [
                                            'SUN',
                                            'MON',
                                            'TUE',
                                            'WED',
                                            'THU',
                                            'FRI',
                                            'SAT'
                                        ].map((day)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "text-center text-[10px] font-black text-gray-400 tracking-widest uppercase mb-2",
                                                children: day
                                            }, day, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)),
                                        Array.from({
                                            length: new Date(year, month, 1).getDay()
                                        }).map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "aspect-square rounded-2xl bg-transparent opacity-50"
                                            }, `empty-${i}`, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)),
                                        days.map((d, i)=>{
                                            let bgColor = 'bg-white hover:bg-gray-50 border border-gray-200';
                                            let dotColor = 'bg-gray-200';
                                            let textColor = 'text-gray-400';
                                            if (d.status === 'present') {
                                                bgColor = 'bg-green-50 border border-green-100 shadow-[0_2px_10px_rgba(34,197,94,0.1)]';
                                                dotColor = 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]';
                                                textColor = 'text-green-700';
                                            } else if (d.status === 'half-day') {
                                                bgColor = 'bg-yellow-50 border border-yellow-100 shadow-[0_2px_10px_rgba(234,179,8,0.1)]';
                                                dotColor = 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]';
                                                textColor = 'text-yellow-700';
                                            } else if (d.status === 'absent') {
                                                // Highlight absent if it's in the past (before today)
                                                const isPast = new Date(year, month, d.day) < new Date();
                                                if (isPast) {
                                                    bgColor = 'bg-red-50 border border-red-100 shadow-[0_2px_10px_rgba(239,68,68,0.1)]';
                                                    dotColor = 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]';
                                                    textColor = 'text-red-700';
                                                }
                                            }
                                            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: `aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all duration-300 cursor-pointer ${bgColor}`,
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: `text-xl font-black ${textColor}`,
                                                        children: d.day
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: `absolute bottom-3 w-1.5 h-1.5 rounded-full ${dotColor}`
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-between items-center mt-auto shrink-0 border-t border-gray-100 pt-6",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex gap-8 px-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                                                        children: "PAYROLL ACCRUAL"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-base font-black text-gray-800 mt-1",
                                                        children: "100%"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 214,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                                                        children: "EARNED DAYS RATE"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 217,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-base font-black text-gray-800 mt-1",
                                                        children: [
                                                            payroll.presentDays,
                                                            "/",
                                                            payroll.totalDaysInCycle
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    payroll.status === 'pending' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        onClick: ()=>{
                                            onClose();
                                            onSettle(payroll._id);
                                        },
                                        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm shadow-[0_8px_16px_rgba(37,99,235,0.2)] transition-all flex items-center gap-2",
                                        children: [
                                            "SETTLE PAYMENT ",
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowRight$7d$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                                lineNumber: 224,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    payroll.status === 'paid' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "bg-green-100 text-green-700 font-bold py-3.5 px-8 rounded-xl text-sm shadow-sm flex items-center gap-2 border border-green-200",
                                        children: "SETTLED ALREADY"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("style", {
                children: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E5E7EB;
          border-radius: 20px;
        }
      `
            }, void 0, false, {
                fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/staff/components/StaffPayrollDetailModal.tsx>",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(StaffPayrollDetailModal, "pNesZvz9lijwOUzsAeFbfhAiK78=");
_c = StaffPayrollDetailModal;
var _c;
__turbopack_refresh__.register(_c, "StaffPayrollDetailModal");

})()),
}]);

//# sourceMappingURL=src_app_staff_components_30e041._.js.map