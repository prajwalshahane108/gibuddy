export function getStatusBadge(status) {
  const map = {
    active:     { bg:'#dcfce7', text:'#16a34a', label:'Active'     },
    trial:      { bg:'#f0fdfa', text:'#0d9488', label:'Trial'      },
    paused:     { bg:'#fef9c3', text:'#ca8a04', label:'Paused'     },
    expired:    { bg:'#fee2e2', text:'#dc2626', label:'Expired'    },
    premium:    { bg:'#ede9fe', text:'#7c3aed', label:'Premium'    },
    basic:      { bg:'#dbeafe', text:'#2563eb', label:'Basic'      },
    pending:    { bg:'#fef9c3', text:'#ca8a04', label:'Pending'    },
    completed:  { bg:'#dcfce7', text:'#16a34a', label:'Completed'  },
    failed:     { bg:'#fee2e2', text:'#dc2626', label:'Failed'     },
    processing: { bg:'#e0f2fe', text:'#0ea5e9', label:'Processing' },
    approved:   { bg:'#dcfce7', text:'#16a34a', label:'Approved'   },
    rejected:   { bg:'#fee2e2', text:'#dc2626', label:'Rejected'   },
    generated:  { bg:'#f0fdfa', text:'#0d9488', label:'Generated'  },
    purchased:  { bg:'#dcfce7', text:'#16a34a', label:'Purchased'  },
    reviewing:  { bg:'#e0f2fe', text:'#0ea5e9', label:'Reviewing'  },
    scheduled:  { bg:'#dbeafe', text:'#2563eb', label:'Scheduled'  },
    'prep-active':{ bg:'#fef9c3',text:'#ca8a04', label:'Prep Active'},
    'in-review':{ bg:'#e0f2fe', text:'#0ea5e9', label:'In Review'  },
    sent:       { bg:'#dcfce7', text:'#16a34a', label:'Sent'       },
    draft:      { bg:'#f1f5f9', text:'#64748b', label:'Draft'      },
    urgent:     { bg:'#fee2e2', text:'#dc2626', label:'Urgent'     },
    high:       { bg:'#ffedd5', text:'#ea580c', label:'High'       },
    medium:     { bg:'#fef9c3', text:'#ca8a04', label:'Medium'     },
    low:        { bg:'#f0fdfa', text:'#0d9488', label:'Low'        },
    resolved:   { bg:'#dcfce7', text:'#16a34a', label:'Resolved'   },
    unresolved: { bg:'#fee2e2', text:'#dc2626', label:'Unresolved' },
  };
  return map[status] || { bg:'#f1f5f9', text:'#64748b', label: status };
}

export function getDirectionBadge(direction) {
  const map = {
    improving: { icon:'↑', color:'#16a34a', label:'Improving' },
    stable:    { icon:'→', color:'#0ea5e9', label:'Stable'    },
    declining: { icon:'↓', color:'#dc2626', label:'Declining' },
  };
  return map[direction] || { icon:'—', color:'#94a3b8', label: direction };
}

export function getPlanBadge(plan) {
  const map = {
    premium: { bg:'#ede9fe', text:'#7c3aed', label:'Premium' },
    basic:   { bg:'#dbeafe', text:'#2563eb', label:'Basic'   },
  };
  return map[plan] || { bg:'#f1f5f9', text:'#64748b', label: plan };
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' }).format(amount);
}
