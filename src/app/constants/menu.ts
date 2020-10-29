export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'fenix',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.start',
    to: '/app/fenix/start',
  },
  {
    id: 'cadastros-menu',
    icon: 'simple-icon-user',
    label: 'menu.cadastros-menu',
    to: '/app/cadastros-menu',
    subs: [{
      icon: 'simple-icon-logout',
      label: 'menu.cadastros',
      to: '/app/cadastros-menu/cadastros-types'
    },
    {
      icon: 'simple-icon-layers',
      label: 'menu.pessoa-menu',
      to: '/app/cadastros-menu/cadastros-types',
      subs: [{
        icon: 'simple-icon-arrow-right',
        label: 'menu.pessoa',
        to: '/app/cadastros-menu/cadastros-levels/pessoa'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cliente',
        to: '/app/cadastros-menu/cadastros-levels/cliente'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.fornecedor',
        to: '/app/cadastros-menu/cadastros-levels/fornecedor'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.transportadora',
        to: '/app/cadastros-menu/cadastros-levels/transportadora'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.contador',
        to: '/app/cadastros-menu/cadastros-levels/contador'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.estado-civil',
        to: '/app/cadastros-menu/cadastros-levels/estado-civil'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.nivel-formacao',
        to: '/app/cadastros-menu/cadastros-levels/nivel-formacao'
      },
      ]
    },
    {
      icon: 'simple-icon-layers',
      label: 'menu.colaborador-menu',
      to: '/app/cadastros-menu/cadastro/colaborador-menu',
      subs: [{
        icon: 'simple-icon-arrow-right',
        label: 'menu.cargo',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.setor',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.colaborador',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.vendedor',
        to: ''
      }
      ]
    },
    {
      icon: 'simple-icon-layers',
      label: 'menu.financeiro-menu',
      to: '/app/cadastros-menu/cadastro/colaborador-menu',
      subs: [{
        icon: 'simple-icon-arrow-right',
        label: 'menu.banco',
        to: '/app/cadastros-menu/cadastros-levels/banco'
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.agencia',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.conta-caixa',
        to: ''
      }
      ]
    },
    {
      icon: 'simple-icon-layers',
      label: 'menu.produto-menu',
      to: '/app/cadastros-menu/cadastro/colaborador-menu',
      subs: [
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.marca',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.unidade',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.grupo',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.sub-grupo',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.produto',
        to: ''
      },
      ]
    },
    {
      icon: 'simple-icon-layers',
      label: 'menu.dados-pre-menu',
      to: '/app/cadastros-menu/cadastro/colaborador-menu',
      subs: [{
        icon: 'simple-icon-arrow-right',
        label: 'menu.cep',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.uf',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.municipio',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cfop',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cst-icms',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cst-pis',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cst-cofins',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cst-ipi',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.ncm',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.cnae',
        to: ''
      },
      {
        icon: 'simple-icon-arrow-right',
        label: 'menu.csosn',
        to: ''
      },
      ]
    }
    ]
  },
  {
    id: 'faturamento-menu',
    icon: 'iconsminds-wallet',
    label: 'menu.faturamento-menu',
    to: '/app/faturamento-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.faturamento',
        to: '/app/faturamento-menu/faturamento'
      }
    ]
  },
  {
    id: 'tributacao-menu',
    icon: 'simple-icon-chart',
    label: 'menu.tributacao-menu',
    to: '/app/tributacao-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.tributacao',
        to: '/app/tributacao-menu/tributacao'
      }
    ]
  },
  {
    id: 'compras-menu',
    icon: 'simple-icon-basket',
    label: 'menu.compras-menu',
    to: '/app/compras-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.compras',
        to: '/app/compras-menu/compras'
      }
    ]
  },
  {
    id: 'estoque-menu',
    icon: 'iconsminds-box-close',
    label: 'menu.estoque-menu',
    to: '/app/estoque-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.estoque',
        to: '/app/estoque-menu/estoque'
      }
    ]
  },
  {
    id: 'vendas-menu',
    icon: 'iconsminds-management',
    label: 'menu.vendas-menu',
    to: '/app/vendas-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.vendas',
        to: '/app/vendas-menu/vendas'
      }
    ]
  },
  {
    id: 'afv-menu',
    icon: 'iconsminds-office',
    label: 'menu.afv-menu',
    to: '/app/afv-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.afv',
        to: '/app/afv-menu/afv'
      }
    ]
  },
  {
    id: 'comissoes-menu',
    icon: 'iconsminds-monitor-analytics',
    label: 'menu.comissoes-menu',
    to: '/app/comissoes-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.comissoes',
        to: '/app/comissoes-menu/comissoes'
      }
    ]
  },
  {
    id: 'ordem-servico-menu',
    icon: 'simple-icon-speech',
    label: 'menu.ordem-servico-menu',
    to: '/app/ordem-servico-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.ordem-servico',
        to: '/app/ordem-servico-menu/ordem-servico'
      }
    ]
  },
  {
    id: 'nfe-menu',
    icon: 'iconsminds-qr-code',
    label: 'menu.nfe-menu',
    to: '/app/nfe-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.nfe',
        to: '/app/nfe-menu/nfe'
      }
    ]
  },
  {
    id: 'nfse-menu',
    icon: 'iconsminds-qr-code',
    label: 'menu.nfse-menu',
    to: '/app/nfse-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.nfse',
        to: '/app/nfse-menu/nfse'
      }
    ]
  },
  {
    id: 'nfce-menu',
    icon: 'iconsminds-qr-code',
    label: 'menu.nfce-menu',
    to: '/app/nfce-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.nfce',
        to: '/app/nfce-menu/nfce'
      }
    ]
  },
  {
    id: 'sat-menu',
    icon: 'iconsminds-qr-code',
    label: 'menu.sat-menu',
    to: '/app/sat-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.sat',
        to: '/app/sat-menu/sat'
      }
    ]
  },
  {
    id: 'cte-menu',
    icon: 'simple-icon-calendar',
    label: 'menu.cte-menu',
    to: '/app/cte-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.cte',
        to: '/app/cte-menu/cte'
      }
    ]
  },
  {
    id: 'sped-menu',
    icon: 'iconsminds-files',
    label: 'menu.sped-menu',
    to: '/app/sped-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.sped',
        to: '/app/sped-menu/sped'
      }
    ]
  },
  {
    id: 'ged-menu',
    icon: 'iconsminds-monitor-3',
    label: 'menu.ged-menu',
    to: '/app/ged-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.ged',
        to: '/app/ged-menu/ged'
      }
    ]
  },
  {
    id: 'loja-menu',
    icon: 'iconsminds-shop',
    label: 'menu.loja-menu',
    to: '/app/loja-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.loja',
        to: '/app/loja-menu/loja'
      }
    ]
  },
  {
    id: 'crm-menu',
    icon: 'iconsminds-id-card',
    label: 'menu.crm-menu',
    to: '/app/crm-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.crm',
        to: '/app/crm-menu/crm'
      }
    ]
  },
  {
    id: 'bi-menu',
    icon: 'iconsminds-puzzle',
    label: 'menu.bi-menu',
    to: '/app/bi-menu',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.bi',
        to: '/app/bi-menu/bi'
      }
    ]
  }

];
export default data;
