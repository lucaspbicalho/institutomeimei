import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { sponsorPlans } from "@/data/content";

export function ApadrinhePage() {
  return (
    <>
      <section className="bg-brand-blue-light py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-text">
              Apadrinhe uma criança
            </h1>

            <p className="mt-6 text-lg text-text-muted">
              Seu apoio mensal ajuda o Instituto Meimei a oferecer educação,
              alimentação, acolhimento e oportunidades para crianças em
              situação de vulnerabilidade.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-text">
              Escolha uma contribuição mensal
            </h2>

            <p className="mt-4 text-text-muted">
              Cada valor representa cuidado, educação e transformação.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sponsorPlans.map((plan) => (
              <Card
                key={plan.title}
                className={
                  plan.recommended
                    ? "border-2 border-brand-blue shadow-lg"
                    : ""
                }
              >
                {plan.recommended && (
                  <span className="mb-4 inline-block rounded-full bg-brand-blue px-3 py-1 text-sm font-semibold text-white">
                    Mais escolhido
                  </span>
                )}

                <h3 className="text-2xl font-bold text-brand-blue">
                  {plan.title}
                </h3>

                <p className="mt-4 text-text-muted">
                  {plan.description}
                </p>

                <Button
                  href={plan.url}
                  variant="primary"
                  className="mt-6 w-full"
                >
                  Quero apadrinhar
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-light py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-text">
              Juntos podemos transformar histórias
            </h2>

            <p className="mt-4 text-text-muted">
              O apadrinhamento é uma forma de participar da missão do Instituto
              Meimei e garantir que mais crianças tenham acesso a cuidado,
              aprendizado e desenvolvimento.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}