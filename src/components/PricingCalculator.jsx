import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function PricingCalculator() {
  const [shifts, setShifts] = useState(1); // 1 turno por semana
  const [ticket, setTicket] = useState(400); // R$ 400 por consulta
  const [patientsPerShift, setPatientsPerShift] = useState(3); // 3 pacientes por turno

  // Mensalidade calculada
  const promoMonthlyRent = shifts * 500;
  const regularMonthlyRent = shifts * 1000;

  // Pacientes no mês = turnos * pacientesPorTurno * 4 semanas
  const monthlyPatients = shifts * patientsPerShift * 4;
  const grossRevenue = monthlyPatients * ticket;

  // Lucro líquido estimado (período regular)
  const estimatedProfit = grossRevenue - regularMonthlyRent;
  const profitMargin = grossRevenue > 0 ? Math.round((estimatedProfit / grossRevenue) * 100) : 0;

  const handleWhatsApp = () => {
    const text = `Olá! Gostaria de agendar uma visita ao Coworking Angatu no Gutierrez. Tenho interesse em ${shifts} turno(s) semanal(is).`;
    const url = `https://wa.me/5531997141515?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-[#E2DBCF] shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#E2DBCF]/80 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4A7C59]/10 text-[#4A7C59] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Viabilidade Financeira</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1E3F35]">
            Quanto você lucra atendendo no Angatu?
          </h3>
          <p className="text-sm text-[#4A5568] mt-1">
            Compare o custo fixo de um consultório convencional com a previsibilidade do coworking.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#C48B54]/40 px-4 py-2.5 rounded-2xl flex items-center space-x-3">
          <Sparkles className="w-5 h-5 text-[#C48B54]" />
          <div>
            <div className="text-xs text-[#4A5568] font-medium">Condição de Boas-Vindas:</div>
            <div className="text-base font-bold text-[#1E3F35]">2 Primeiros Meses por R$ 500 / turno</div>
          </div>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {/* Input 1 */}
        <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E2DBCF]">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
            1. Turnos Semanais
          </label>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold font-display text-[#1E3F35]">{shifts} turno{shifts > 1 ? 's' : ''}/sem</span>
            <span className="text-xs text-[#4A7C59] font-semibold">{shifts * 4} turnos/mês</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            value={shifts}
            onChange={(e) => setShifts(Number(e.target.value))}
            className="w-full accent-[#4A7C59] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#4A5568] mt-1">
            <span>1 turno</span>
            <span>3 turnos</span>
            <span>6 turnos</span>
          </div>
        </div>

        {/* Input 2 */}
        <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E2DBCF]">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
            2. Média de Pacientes por Turno
          </label>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold font-display text-[#1E3F35]">{patientsPerShift} consultas</span>
            <span className="text-xs text-[#4A7C59] font-semibold">{monthlyPatients} no mês</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            value={patientsPerShift}
            onChange={(e) => setPatientsPerShift(Number(e.target.value))}
            className="w-full accent-[#4A7C59] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#4A5568] mt-1">
            <span>1 paciente</span>
            <span>3 pacientes</span>
            <span>6 pacientes</span>
          </div>
        </div>

        {/* Input 3 */}
        <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E2DBCF]">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
            3. Valor da sua Consulta
          </label>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold font-display text-[#1E3F35]">R$ {ticket}</span>
            <span className="text-xs text-[#4A7C59] font-semibold">Particular</span>
          </div>
          <input
            type="range"
            min="200"
            max="1200"
            step="50"
            value={ticket}
            onChange={(e) => setTicket(Number(e.target.value))}
            className="w-full accent-[#4A7C59] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#4A5568] mt-1">
            <span>R$ 200</span>
            <span>R$ 600</span>
            <span>R$ 1.200</span>
          </div>
        </div>
      </div>

      {/* Result Cards */}
      <div className="bg-[#1E3F35] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-auto">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C9DBCF] font-medium">Seu Aluguel Regular</div>
            <div className="text-2xl md:text-3xl font-display font-extrabold text-white mt-1">
              R$ {regularMonthlyRent.toLocaleString('pt-BR')}<span className="text-xs font-normal text-[#C9DBCF]">/mês</span>
            </div>
            <div className="text-[11px] text-[#C48B54] font-semibold mt-0.5">
              (R$ {promoMonthlyRent.toLocaleString('pt-BR')} nos 2 primeiros meses)
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#C9DBCF] font-medium">Faturamento Estimado</div>
            <div className="text-2xl md:text-3xl font-display font-extrabold text-white mt-1">
              R$ {grossRevenue.toLocaleString('pt-BR')}<span className="text-xs font-normal text-[#C9DBCF]">/mês</span>
            </div>
            <div className="text-[11px] text-[#C9DBCF] mt-0.5">
              {monthlyPatients} pacientes atendidos
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="text-xs uppercase tracking-wider text-[#88B04B] font-bold">Seu Lucro Líquido</div>
            <div className="text-2xl md:text-3xl font-display font-extrabold text-[#88B04B] mt-1">
              R$ {estimatedProfit > 0 ? estimatedProfit.toLocaleString('pt-BR') : 0}<span className="text-xs font-normal text-[#C9DBCF]">/mês</span>
            </div>
            <div className="text-[11px] text-[#C9DBCF] mt-0.5">
              Margem líquida de ~{profitMargin}%
            </div>
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full md:w-auto whitespace-nowrap bg-[#C48B54] hover:bg-[#A66E3A] text-white font-semibold px-6 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span>Reservar Meu Turno no WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A5568] px-1">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
          <span>Sem fiador, sem reforma, com secretária e limpeza inclusas</span>
        </div>
        <div>
          <span>Chave PIX: <strong>31 9 9714-1515</strong> (ANGATU)</span>
        </div>
      </div>
    </div>
  );
}
