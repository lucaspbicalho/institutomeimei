import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const pagBankUrl = "https://pag.ae/817Xs_nr5/button";

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
              Sua contribuição mensal ajuda a manter nossos projetos
              de educação, acolhimento e transformação social.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">

            <Card>
              <h2 className="text-2xl font-bold text-brand-blue">
                R$ 30/mês
              </h2>

              <p className="mt-3 text-text-muted">
                Ajude na manutenção dos nossos projetos.
              </p>

              <Button
                href={pagBankUrl}
                variant="primary"
                className="mt-6 w-full"
              >
                Quero apadrinhar
              </Button>
            </Card>


            <Card>
              <h2 className="text-2xl font-bold text-brand-blue">
                R$ 50/mês
              </h2>

              <p className="mt-3 text-text-muted">
                Sua contribuição amplia nosso atendimento.
              </p>

              <Button
                href={pagBankUrl}
                variant="primary"
                className="mt-6 w-full"
              >
                Quero apadrinhar
              </Button>
            </Card>


            <Card>
              <h2 className="text-2xl font-bold text-brand-blue">
                R$ 100/mês
              </h2>

              <p className="mt-3 text-text-muted">
                Uma ajuda ainda maior para transformar vidas.
              </p>

              <Button
                href={pagBankUrl}
                variant="primary"
                className="mt-6 w-full"
              >
                Quero apadrinhar
              </Button>
            </Card>

          </div>
        </Container>
      </section>
    </>
  );
}